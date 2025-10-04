> 一个小玩具，可以用来跳转到nexus mod页面

# Nexus Mods 跳转器

起因是小黑盒很多人分享mod会给mod编号，需要手动替换网址，有这个就可以快那么一点点。

使用了nexus的api，可以实时获取最新的游戏列表

[![HTML](https://img.shields.io/badge/Built%20with-HTML%2FJS-orange.svg)]()
[![Version](https://img.shields.io/badge/Version-v1.2-green.svg)]()

## API Key 设置

### 获取 API Key
1. 访问 [Nexus Mods 账户设置](https://www.nexusmods.com/users/myaccount?tab=api)
2. 创建并复制 "Personal API Key"
3. 在网页中点击 ⚙️ 图标配置

### 配置效果
- **已配置** - 获取完整游戏列表（3900+ 游戏）
- **未配置** - 使用备用列表 (200热门游戏)

## 快速开始

直接打开 `index.html` 即可使用，无需安装或配置。

或者用[我的网页](https://loym.dev)

## 版本更新

### v1.2 (2025-10-03)
- ✅ 网页默认配置API Key
- ✅ 新增[nodejs分支](https://github.com/llxo/nexusmodjumper/tree/nodejs)

### v1.1 (2025-10-02)
- ✅ 新增 API Key 设置功能
- ✅ 智能中英文搜索系统
- ✅ 游戏映射表模块化
- ✅ 24小时智能缓存机制
- ✅ 现代化界面设计

---

后续计划：
- 制作一个分支将HTML文件和JS文件合并
- 换个网页图标，优化css
- 考虑部署到Github Pages上