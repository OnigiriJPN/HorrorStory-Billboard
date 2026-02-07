// netlify/functions/admin-check.js

const OFFICIAL_NAME = "HorrorStory-Billboard-official";

export async function handler(event) {
  const { username } = JSON.parse(event.body || "{}");

  return {
    statusCode: 200,
    body: JSON.stringify({
      isAdmin: username === OFFICIAL_NAME
    })
  };
}
