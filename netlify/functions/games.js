exports.handler = async (event, context) => {
  // 设置超时
  context.callbackWaitsForEmptyEventLoop = false;
  
  // 启用 CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
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
    
    console.log('Function started, API Key exists:', !!apiKey);
    
    if (!apiKey) {
      console.error('NEXUS_API_KEY not found in environment variables');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'API Key 未配置，请在环境变量中设置 NEXUS_API_KEY' 
        })
      };
    }

    console.log('Making request to Nexus API...');
    
    // 使用动态导入 node-fetch（兼容性更好）
    const fetch = (await import('node-fetch')).default;
    
    const response = await fetch('https://api.nexusmods.com/v1/games.json', {
      method: 'GET',
      headers: {
        'apikey': apiKey,
        'Content-Type': 'application/json',
        'User-Agent': 'NexusModsJumper/1.1.0'
      },
      timeout: 25000
    });

    console.log('API Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Nexus API Error:', response.status, response.statusText, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: `Nexus API 错误: ${response.status} ${response.statusText}`,
          details: errorText
        })
      };
    }

    const games = await response.json();
    console.log('Successfully fetched', games.length, 'games');
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(games)
    };
    
  } catch (error) {
    console.error('Function error:', error.message, error.stack);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '获取游戏列表失败: ' + error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
