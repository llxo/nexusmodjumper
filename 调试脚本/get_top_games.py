#!/usr/bin/env python3
"""
Nexus Mods 热门游戏获取器
获取前200名热度的游戏列表，按下载量、模组数量等指标排序
"""

import requests
import json
import time
from datetime import datetime
from typing import List, Dict, Any

# API配置
NEXUS_API_KEY = "<YOUR_API_KEY>"
NEXUS_API_BASE = "https://api.nexusmods.com/v1"

# 请求头
HEADERS = {
    'apikey': NEXUS_API_KEY,
    'Content-Type': 'application/json',
    'User-Agent': 'NexusModsGameFetcher/1.0'
}

# 只获取英文名，不需要中文翻译

def make_api_request(url: str, max_retries: int = 3) -> Dict[Any, Any]:
    """
    发送API请求，包含重试机制
    """
    for attempt in range(max_retries):
        try:
            print(f"正在请求: {url} (尝试 {attempt + 1}/{max_retries})")
            
            response = requests.get(url, headers=HEADERS, timeout=30)
            
            # 检查请求限制
            if 'X-RL-Hourly-Remaining' in response.headers:
                remaining = response.headers['X-RL-Hourly-Remaining']
                print(f"API剩余请求数: {remaining}")
                
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 429:
                print("API请求频率限制，等待60秒...")
                time.sleep(60)
                continue
            else:
                print(f"API请求失败: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            print(f"网络请求错误: {e}")
            
        if attempt < max_retries - 1:
            wait_time = (attempt + 1) * 5
            print(f"等待 {wait_time} 秒后重试...")
            time.sleep(wait_time)
    
    return {}

def get_all_games() -> List[Dict[str, Any]]:
    """
    获取所有游戏列表
    """
    print("正在获取游戏列表...")
    url = f"{NEXUS_API_BASE}/games.json"
    
    games_data = make_api_request(url)
    
    if not games_data:
        print("❌ 无法获取游戏列表")
        return []
    
    print(f"✅ 成功获取 {len(games_data)} 个游戏")
    return games_data

def process_games(games_data: List[Dict[str, Any]], top_count: int = 200) -> List[Dict[str, Any]]:
    """
    处理游戏数据，添加中文名称并按热度排序
    """
    print("正在处理游戏数据...")
    
    processed_games = []
    
    for game in games_data:
        try:
            # 基本信息
            name = game.get('name', '')
            domain_name = game.get('domain_name', '')
            
            if not name or not domain_name:
                continue
            
            # 统计数据
            downloads = game.get('downloads', 0)
            file_count = game.get('file_count', 0)
            endorsements = game.get('mod_downloads', 0)  # 模组下载量
            
            # 计算热度分数 (权重：下载量70% + 文件数20% + 背书数10%)
            hotness_score = (downloads * 0.7) + (file_count * 20 * 0.2) + (endorsements * 0.1)
            
            processed_game = {
                'rank': 0,  # 稍后设置
                'name': name,
                'domain_name': domain_name,
                'downloads': downloads,
                'file_count': file_count,
                'endorsements': endorsements,
                'hotness_score': int(hotness_score),
                'categories': game.get('categories', []),
                'nexusmods_url': f"https://www.nexusmods.com/{domain_name}"
            }
            
            processed_games.append(processed_game)
            
        except Exception as e:
            print(f"处理游戏 {game.get('name', 'Unknown')} 时出错: {e}")
            continue
    
    # 按热度分数排序
    processed_games.sort(key=lambda x: x['hotness_score'], reverse=True)
    
    # 设置排名
    for i, game in enumerate(processed_games[:top_count]):
        game['rank'] = i + 1
    
    print(f"✅ 处理完成，获取前 {min(top_count, len(processed_games))} 名热门游戏")
    
    return processed_games[:top_count]

def save_results(games: List[Dict[str, Any]], filename: str = None):
    """
    保存结果到文件
    """
    if not filename:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"nexus_top_games_{timestamp}.json"
    
    # 保存详细JSON数据
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(games, f, ensure_ascii=False, indent=2)
    
    print(f"✅ 详细数据已保存到: {filename}")
    
    # 创建可读性更强的文本报告
    txt_filename = filename.replace('.json', '.txt')
    with open(txt_filename, 'w', encoding='utf-8') as f:
        f.write("Nexus Mods 前200名热门游戏榜单\n")
        f.write("=" * 50 + "\n")
        f.write(f"生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"总计游戏数: {len(games)}\n\n")
        
        for game in games:
            f.write(f"#{game['rank']:3d} | {game['name']}\n")
    
    print(f"✅ 可读报告已保存到: {txt_filename}")

def print_top_games_summary(games: List[Dict[str, Any]], show_count: int = 50):
    """
    打印前N名游戏的摘要
    """
    print(f"\n🏆 前 {show_count} 名热门游戏:")
    print("=" * 50)
    print(f"{'排名':<4} {'英文名'}")
    print("-" * 50)
    
    for game in games[:show_count]:
        print(f"{game['rank']:<4} {game['name']}")

def main():
    """
    主函数
    """
    print("🚀 Nexus Mods 热门游戏获取器")
    print("=" * 50)
    
    try:
        # 获取所有游戏
        all_games = get_all_games()
        
        if not all_games:
            print("❌ 无法获取游戏数据，程序退出")
            return
        
        # 处理和排序游戏
        top_games = process_games(all_games, 200)
        
        if not top_games:
            print("❌ 无法处理游戏数据，程序退出")
            return
        
        # 打印摘要
        print_top_games_summary(top_games, 50)
        
        # 保存结果
        save_results(top_games)
        
        print(f"\n🎉 任务完成！成功获取并保存了前 {len(top_games)} 名热门游戏")
        
        # 显示一些统计信息
        total_downloads = sum(game['downloads'] for game in top_games)
        total_files = sum(game['file_count'] for game in top_games)
        
        print(f"\n📊 统计信息:")
        print(f"   - 前200名游戏总下载量: {total_downloads:,}")
        print(f"   - 前200名游戏总模组数: {total_files:,}")
        print(f"   - 平均每游戏下载量: {total_downloads // len(top_games):,}")
        print(f"   - 平均每游戏模组数: {total_files // len(top_games):,}")
        
    except KeyboardInterrupt:
        print("\n❌ 用户中断程序")
    except Exception as e:
        print(f"❌ 程序运行出错: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
