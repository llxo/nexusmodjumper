const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Nexus Mods API 代理路由
app.get('/api/games', async (req, res) => {
    try {
        const apiKey = process.env.NEXUS_API_KEY;
        
        if (!apiKey) {
            return res.status(500).json({ 
                error: 'API Key 未配置，请在环境变量中设置 NEXUS_API_KEY' 
            });
        }

        const fetch = (await import('node-fetch')).default;
        const response = await fetch('https://api.nexusmods.com/v1/games.json', {
            headers: {
                'apikey': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Nexus API Error:', response.status, errorText);
            return res.status(response.status).json({ 
                error: `Nexus API 错误: ${response.status} ${response.statusText}` 
            });
        }

        const games = await response.json();
        res.json(games);
    } catch (error) {
        console.error('API 代理错误:', error);
        res.status(500).json({ 
            error: '获取游戏列表失败，请检查网络连接或 API Key' 
        });
    }
});

// 健康检查端点
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        hasApiKey: !!process.env.NEXUS_API_KEY,
        timestamp: new Date().toISOString()
    });
});

// 主页面路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ModJumper.html'));
});

// 404 处理
app.use((req, res) => {
    res.status(404).json({ error: '页面未找到' });
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error('服务器错误:', err);
    res.status(500).json({ error: '服务器内部错误' });
});

app.listen(PORT, () => {
    console.log(`🚀 Nexus Mods 跳转器服务器已启动`);
    console.log(`📱 访问地址: http://localhost:${PORT}`);
    console.log(`🔑 API Key 状态: ${process.env.NEXUS_API_KEY ? '已配置 ✅' : '未配置 ❌'}`);
    
    if (!process.env.NEXUS_API_KEY) {
        console.log(`⚠️  请设置环境变量 NEXUS_API_KEY`);
        console.log(`   示例: NEXUS_API_KEY=your_api_key_here npm start`);
    }
});
