exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

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

  return {
    statusCode: 200,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      status: 'ok', 
      hasApiKey: !!process.env.NEXUS_API_KEY,
      timestamp: new Date().toISOString()
    })
  };
};
