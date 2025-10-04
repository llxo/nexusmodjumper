const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // 启用 CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // 处理预检请求
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: '方法不允许' })
    };
  }

  try {
    const apiKey = process.env.NEXUS_API_KEY;
    
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'API Key 未配置，请在环境变量中设置 NEXUS_API_KEY' 
        })
      };
    }

    const response = await fetch('https://api.nexusmods.com/v1/games.json', {
      headers: {
        'apikey': apiKey,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Nexus API Error:', response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: `Nexus API 错误: ${response.status} ${response.statusText}` 
        })
      };
    }

    const games = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(games)
    };
    
  } catch (error) {
    console.error('API 代理错误:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '获取游戏列表失败，请检查网络连接或 API Key' 
      })
    };
  }
};
