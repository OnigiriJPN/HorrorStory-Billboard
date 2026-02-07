// netlify/functions/log-action.js

export async function handler(event) {
  const log = JSON.parse(event.body || "{}");

  // 今はconsole出力のみ（将来DB・JSON保存）
  console.log("ACTION LOG:", {
    time: new Date().toISOString(),
    ...log
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
}
