const https = require('https');

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
    
    console.log('Backup function started, API Key exists:', !!apiKey);
    
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

    // 使用原生 Node.js https 模块
    const games = await makeHttpsRequest(apiKey);
    
    console.log('Successfully fetched', games.length, 'games using https module');
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(games)
    };
    
  } catch (error) {
    console.error('Backup function error:', error.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '获取游戏列表失败: ' + error.message
      })
    };
  }
};

function makeHttpsRequest(apiKey) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.nexusmods.com',
      port: 443,
      path: '/v1/games.json',
      method: 'GET',
      headers: {
        'apikey': apiKey,
        'Content-Type': 'application/json',
        'User-Agent': 'NexusModsJumper/1.1.0'
      },
      timeout: 25000
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            const games = JSON.parse(data);
            resolve(games);
          } else {
            reject(new Error(`API 错误: ${res.statusCode} ${res.statusMessage}`));
          }
        } catch (parseError) {
          reject(new Error('JSON 解析错误: ' + parseError.message));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error('请求错误: ' + error.message));
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('请求超时'));
    });

    req.end();
  });
}
