// netlify/functions/ban-check.js

export async function handler(event) {
  // 今はダミー実装（後でIP・期間対応に拡張）
  return {
    statusCode: 200,
    body: JSON.stringify({
      restricted: false,
      message: ""
    })
  };
}
