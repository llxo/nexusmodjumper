# Nexus Mods 跳转器 - Node.js 版本

一个基于 Node.js 的 Nexus Mods 跳转工具，支持通过后端 API 获取最新游戏列表。

起因是小黑盒很多人分享mod会给mod编号，需要手动替换网址，有这个就可以快那么一点点。

[![Node.js](https://img.shields.io/badge/Built%20with-Node.js-green.svg)]()
[![Version](https://img.shields.io/badge/Version-v1.2-green.svg)]()

## 安装和使用

### 快速开始

1. **克隆项目**：
    ```
    git clone -b nodejs --single-branch https://github.com/llxo/nexusmodjumper.git
    ```

2. **启动**:
   ```bash
   npm install
   npm start
   ```

3. **配置 API Key**:
   - 编辑 `.env` 文件
   - 在 [Nexus Mods API 设置页面](https://www.nexusmods.com/users/myaccount?tab=api) 获取您的 Personal API Key
   - 将 API Key 填入 `.env` 文件中的 `NEXUS_API_KEY=` 后面

4. **访问应用**:
   - 打开浏览器访问 `http://localhost:3000`

## 许可证

MIT License
