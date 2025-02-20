export async function onRequest(context) {
  const request = context.request;

  // CORSヘッダーの設定
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://solid.dgdgdgdg.com",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // プリフライトリクエストの処理
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const formData = await request.formData();
  const googleFormUrl = formData.get("_googleFormUrl");
  const turnstileResponse = formData.get("cf-turnstile-response");

  if (!googleFormUrl) {
    return new Response("Google Form URL not provided", { status: 400 });
  }

  if (!turnstileResponse) {
    return new Response("Turnstile verification failed", { status: 400 });
  }

  // Turnstileトークンの検証
  const turnstileResult = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: context.env.TURNSTILE_SECRET_KEY,
        response: turnstileResponse,
      }),
    },
  );

  const outcome = await turnstileResult.json();
  if (!outcome.success) {
    return new Response("Turnstile verification failed", {
      status: 400,
      headers: corsHeaders,
    });
  }

  // Google FormsへのPOSTリクエスト
  const response = await fetch(googleFormUrl.toString(), {
    method: "POST",
    body: formData,
  });

  return new Response(null, {
    status: response.ok ? 200 : 500,
    headers: corsHeaders,
  });
}
