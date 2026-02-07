// assets/js/main.js

const OFFICIAL_NAME = "HorrorStory-Billboard-official";

/**
 * 投稿カード生成
 */
export function createPostCard(post) {
  const article = document.createElement("article");
  article.className = "post-card";

  if (post.author === OFFICIAL_NAME) {
    article.classList.add("official-card");
  }

  article.innerHTML = `
    <header>
      ${post.author === OFFICIAL_NAME ? `<span class="badge-official">✔ OFFICIAL</span>` : ""}
      <h3>${escapeHTML(post.title)}</h3>
    </header>

    <p class="meta">
      投稿者：${escapeHTML(post.author)} /
      ジャンル：${escapeHTML(post.genre)}
    </p>

    <p class="content">
      ${escapeHTML(post.content)}
    </p>

    ${
      needsNotice(post.genre)
        ? `<p class="notice">※この話はフィクションです。</p>`
        : ``
    }
  `;

  return article;
}

/**
 * フィクション注意書きが必要なジャンル
 */
function needsNotice(genre) {
  return [
    "怖い話",
    "意味が分かると怖い話",
    "自作怖い話",
    "自作意味が分かると怖い話"
  ].includes(genre);
}

/**
 * XSS最低限対策
 */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
