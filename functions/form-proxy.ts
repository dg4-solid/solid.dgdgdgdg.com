export async function onRequest(context) {
  const request = context.request;
  
  // CORSヘッダーの設定
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://solid.dgdgdgdg.com',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // プリフライトリクエストの処理
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const formData = await request.formData();
  const googleFormUrl = formData.get('_googleFormUrl');
  
  if (!googleFormUrl) {
    return new Response('Google Form URL not provided', { status: 400 });
  }
  
  // Google FormsへのPOSTリクエスト
  const response = await fetch(googleFormUrl.toString(), {
    method: 'POST',
    body: formData,
  });

  return new Response(null, {
    status: response.ok ? 200 : 500,
    headers: corsHeaders,
  });
} 