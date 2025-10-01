# Nexus Mods 跳转器

[![GitHub](https://img.shields.i## 📁 项目结构

```
Nexus-Mods-跳转器/
├── ModJumper.html           # 主程序文件
├── translations.js     # 游戏名映射表
├── README.md               # 项目说明文档
├── 调试脚本/
│   └── get_top_games.py    # API 游戏列表获取脚本
└── .git/                   # Git 版本控制
```
ub-Repository-blue.svg)](.)
[![HTML](https://img.shields.io/badge/Built%20with-HTML%2FJS-orange.svg)]()
[![Version](https://img.shields.io/badge/Version-v1.1-green.svg)]()

一个现代化的 Nexus Mods 跳转工具，支持智能搜索和直接跳转到指定 Mod 页面。

## ✨ 核心特性

### 🔍 智能搜索系统
- **多语言支持** - 中英文游戏名搜索，200热门游戏映射
- **模糊匹配** - 支持缩写搜索（如 gta → Grand Theft Auto）
- **智能排序** - 按相关性排序，精确匹配优先
- **高亮显示** - 搜索关键词自动高亮

### ⚡ 性能优化
- **智能缓存** - 24小时缓存机制，提升 90% 加载速度
- **API 集成** - 集成 Nexus Mods 官方 API，实时数据
- **降级策略** - API → 过期缓存 → 备用列表，确保可用性
- **本地存储** - 安全的浏览器本地数据存储

### 🎨 现代化界面
- **响应式设计** - 完美适配桌面和移动设备
- **玻璃拟态** - 现代化的视觉设计
- **动画反馈** - 丰富的交互动画和状态提示
- **用户友好** - 直观的操作流程和错误提示

## 🚀 使用指南

### 基础使用
1. **智能搜索** - 输入中文或英文游戏名（如"赛博朋克"或"cyberpunk"）
2. **选择游戏** - 从智能排序的下拉列表选择目标游戏
3. **输入 Mod ID** - 填入要访问的 Mod 数字 ID
4. **一键跳转** - 点击按钮直接跳转到 Nexus Mods

### 高级功能
- **API Key 配置** - 点击右上角 ⚙️ 设置个人 API Key
- **缓存管理** - 点击右上角 🔄 手动刷新游戏列表
- **搜索技巧** - 支持缩写（gta、cod）和模糊匹配

## � API Key 设置

### 获取 API Key
1. 访问 [Nexus Mods 账户设置](https://www.nexusmods.com/users/myaccount?tab=api)
2. 复制 "Personal API Key"
3. 在工具中点击 ⚙️ 图标配置

### 配置效果
- **已配置** - 获取完整游戏列表（1000+ 游戏）
- **未配置** - 使用备用列表（精选热门游戏）

## �📁 项目结构

```
Nexus-Mods-跳转器/
├── ModJumper.html           # 主程序文件
├── translations.js     # 游戏名映射表
├── README.md               # 项目说明文档
├── 调试脚本/
│   └── get_top_games.py    # API 游戏列表获取脚本
└── .git/                   # Git 版本控制
```

## 🔧 快速开始

直接打开 `ModJumper.html` 即可使用，无需安装或配置。

## 🧪 搜索测试用例

### 中文搜索
- `赛博朋克` → Cyberpunk 2077
- `天际` → 上古卷轴5：天际
- `辐射` → Fallout 系列
- `巫师` → 巫师3：狂猎

### 英文搜索
- `cyberpunk`
- `skyrim`
- `fallout`

### 缩写搜索
- `gta` → Grand Theft Auto V
- `cod` → Call of Duty 系列

## �️ 技术特性

- **模块化设计** - 映射表独立文件，便于维护
- **双环境支持** - 浏览器和 Node.js 兼容
- **安全存储** - API Key 仅本地存储，不发送第三方
- **智能降级** - 多重备选方案确保可用性
- **版本控制** - 缓存版本管理，支持功能升级

## 📚 核心文件说明

- `ModJumper.html` - 主程序文件，包含完整的界面和功能逻辑
- `translations.js` - 游戏名映射表，支持中英文对照和搜索
- `调试脚本/get_top_games.py` - API 游戏列表获取工具，用于数据更新

## 🔄 版本更新

### v1.1 (2024-10-01)
- ✅ 新增 API Key 设置功能
- ✅ 智能中英文搜索系统
- ✅ 游戏映射表模块化
- ✅ 24小时智能缓存机制
- ✅ 现代化界面设计

---

> 💡 **提示**：建议配置 Nexus Mods API Key 以获得最佳体验和完整游戏列表
