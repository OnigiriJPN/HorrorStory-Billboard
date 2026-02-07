// assets/js/admin.js

const OFFICIAL_NAME = "HorrorStory-Billboard-official";

/**
 * 管理者かどうかをFunctionsに問い合わせる
 */
export async function checkAdmin(username) {
  const res = await fetch("/.netlify/functions/admin-check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username })
  });

  const data = await res.json();
  return data.isAdmin === true;
}

/**
 * 管理者メニュー（三点リーダー）
 */
export function createAdminMenu(onDelete, onRestrict, onOfficial) {
  const menu = document.createElement("div");
  menu.className = "admin-menu";

  menu.innerHTML = `
    <button data-action="delete">削除</button>
    <button data-action="restrict">利用制限対応</button>
    <button data-action="official">公式マーク付与</button>
  `;

  menu.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (!action) return;

    if (action === "delete") onDelete();
    if (action === "restrict") onRestrict();
    if (action === "official") onOfficial();
  });

  return menu;
}
