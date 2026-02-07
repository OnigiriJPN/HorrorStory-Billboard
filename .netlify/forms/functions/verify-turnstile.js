// netlify/functions/verify-turnstile.js

export async function handler(event) {
  const { token } = JSON.parse(event.body || "{}");

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false })
    };
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`
    }
  );

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ success: data.success === true })
  };
}
