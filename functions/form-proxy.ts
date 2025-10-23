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
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  const formData = await request.formData();
  const googleFormUrl = formData.get("_googleFormUrl");
  const turnstileResponse = formData.get("cf-turnstile-response");

  if (!googleFormUrl) {
    return new Response("Google Form URL not provided", {
      status: 400,
      headers: corsHeaders,
    });
  }

  if (!turnstileResponse) {
    return new Response("Turnstile verification failed", {
      status: 400,
      headers: corsHeaders,
    });
  }

  // 環境変数の検証
  if (!context.env.TURNSTILE_SECRET_KEY) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return new Response("Server configuration error", {
      status: 500,
      headers: corsHeaders,
    });
  }

  // Turnstileトークンの検証
  let outcome;
  try {
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

    if (!turnstileResult.ok) {
      throw new Error(`Turnstile API returned ${turnstileResult.status}`);
    }

    outcome = await turnstileResult.json();
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return new Response("Verification service unavailable", {
      status: 503,
      headers: corsHeaders,
    });
  }

  if (!outcome.success) {
    return new Response("Turnstile verification failed", {
      status: 400,
      headers: corsHeaders,
    });
  }

  // 内部フィールドを除外してGoogle Formsに転送
  const cleanFormData = new FormData();
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith("_") && key !== "cf-turnstile-response") {
      cleanFormData.append(key, value);
    }
  }

  // Google FormsへのPOSTリクエスト
  const response = await fetch(googleFormUrl.toString(), {
    method: "POST",
    body: cleanFormData,
  });

  return new Response(null, {
    status: response.ok ? 200 : 500,
    headers: corsHeaders,
  });
}
