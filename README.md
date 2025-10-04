# Nexus Mods 跳转器 - Node.js 版本

一个基于 Node.js 的 Nexus Mods 跳转工具，支持通过后端 API 获取最新游戏列表。

起因是小黑盒很多人分享mod会给mod编号，需要手动替换网址，有这个就可以快那么一点点。

[![Node.js](https://img.shields.io/badge/Built%20with-Node.js-green.svg)]()
[![Version](https://img.shields.io/badge/Version-v1.2-green.svg)]()
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/llxo/nexusmodjumper&stack=cms&branch=nodejs)

## 🚀 快速部署

### 一键部署到 Netlify（推荐）

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/llxo/nexusmodjumper&stack=cms&branch=nodejs)

点击上方按钮即可一键部署到 Netlify：

1. **连接 GitHub 账户** - 授权 Netlify 访问您的 GitHub
2. **选择仓库名** - 为您的项目选择一个名称
3. **自动部署** - Netlify 会自动从 `nodejs` 分支部署
4. **配置 API Key** - 部署完成后，在 Netlify 控制台设置 `NEXUS_API_KEY` 环境变量

#### 设置 API Key 步骤：
1. 在 [Nexus Mods API 设置页面](https://www.nexusmods.com/users/myaccount?tab=api) 获取您的 Personal API Key
2. 在 Netlify 控制台中，转到 **Site settings > Environment variables**
3. 添加新变量：
   - **Key**: `NEXUS_API_KEY`
   - **Value**: 您的 API Key
4. 保存后会自动重新部署

### 🌐 在线演示

- **演示地址**: [https://nmod.netlify.app](https://nmod.netlify.app)
- **API 健康检查**: [https://nmod.netlify.app/.netlify/functions/health](https://nmod.netlify.app/.netlify/functions/health)

## 💻 本地开发

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 快速开始

1. **克隆项目**：
    ```bash
    git clone -b nodejs --single-branch https://github.com/llxo/nexusmodjumper.git
    cd nexusmodjumper
    ```

2. **安装依赖**:
   ```bash
   npm install
   ```

3. **配置环境变量**:
   ```bash
   # 复制环境变量模板
   cp .env.example .env
   
   # 编辑 .env 文件，添加您的 API Key
   # NEXUS_API_KEY=your_api_key_here
   ```

4. **获取 API Key**:
   - 访问 [Nexus Mods API 设置页面](https://www.nexusmods.com/users/myaccount?tab=api)
   - 生成 Personal API Key
   - 将 API Key 填入 `.env` 文件

5. **启动应用**:
   ```bash
   npm start
   ```

6. **访问应用**:
   - 打开浏览器访问 `http://localhost:3000`

### 开发模式

```bash
npm run dev  # 使用 nodemon 自动重启
```

## 📁 项目结构

```
nexusmodjumper/
├── public/                 # 前端静态文件
│   ├── index.html         # 主页面
│   └── translations.js    # 游戏名翻译
├── netlify/
│   └── functions/         # Netlify Functions
│       ├── games.js       # 游戏列表 API
│       ├── games-backup.js # 备用 API
│       └── health.js      # 健康检查
├── server.js              # Express 服务器（本地开发）
├── package.json           # 项目配置
├── netlify.toml          # Netlify 部署配置
└── README.md             # 项目说明
```

## 🔧 部署选项

### 1. Netlify（推荐）
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署
- ✅ 免费额度充足

### 2. Vercel
```bash
npm install -g vercel
vercel --prod
```

### 3. Railway
```bash
# 连接 GitHub 仓库即可自动部署
```

### 4. 传统服务器
```bash
# 上传代码到服务器
npm install --production
pm2 start server.js
```

## ✨ 功能特性

- 🎮 **智能游戏搜索** - 支持中英文模糊搜索
- 🔄 **实时数据同步** - 通过 Nexus Mods API 获取最新游戏列表
- 💾 **智能缓存** - 24小时本地缓存，减少 API 调用
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🕒 **搜索历史** - 记录最近搜索的游戏
- 🌐 **多平台部署** - 支持 Netlify、Vercel 等平台

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📝 更新日志

### v1.2.0
- ✅ 添加 Netlify Functions 支持
- ✅ 优化错误处理和日志记录
- ✅ 增加备用 API 机制
- ✅ 改进响应式设计

### v1.1.0
- ✅ 添加游戏搜索历史记录
- ✅ 优化搜索算法，支持中英文混合搜索
- ✅ 增加游戏统计信息显示
- ✅ 改进 UI 动画效果

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
