export function renderMentions(mentions, className) {
  const webMentionsSection = document.querySelector(className);
  const likes = mentions
    .filter((m) => m.author.name !== "Ayo Ayco")
    .filter((m) => m["wm-property"] === "like-of");
  const reposts = mentions
    .filter((m) => m.author.name !== "Ayo Ayco")
    .filter((m) => m["wm-property"] === "repost-of");
  const replies = mentions.filter((m) => m["wm-property"] === "in-reply-to");

  if (likes.length) {
    // render on meta header
    document.getElementById("page-likes").innerHTML = `• 👍 ${likes.length}`;

    // render on webmentions section
    const clearLikes = document.createElement("div");
    clearLikes.style.clear = "both";
    const likesWrapper = document.createElement("div");
    likesWrapper.append(clearLikes);
    const likesHeader = document.createElement("h2");
    likesHeader.innerHTML = `👍 ${likes.length} Likes`;
    likesWrapper.append(likesHeader);
    const likesAvatars = document.createElement("div");
    likesAvatars.className = "avatar-block";
    likes.forEach((like) => {
      const image = document.createElement("img");
      image.src = like.author.photo;
      image.alt = `Avatar for ${like.author.name}`;
      const link = document.createElement("a");
      link.href = like.author.url;
      link.append(image);
      likesAvatars.append(link);
    });
    likesWrapper.append(likesAvatars);

    webMentionsSection.append(likesWrapper);
  }

  if (reposts.length) {
    // render on meta header
    document.getElementById(
      "page-reposts"
    ).innerHTML = `• 🔁 ${reposts.length}`;

    // render on webmentions section
    const repostsWrapper = document.createElement("div");
    const clearReposts = document.createElement("div");
    clearReposts.style.clear = "both";
    repostsWrapper.append(clearReposts);
    const repostsHeader = document.createElement("h2");
    repostsHeader.innerHTML = `🔁 ${reposts.length} Reposts`;
    repostsWrapper.append(repostsHeader);

    const repostsAvatars = document.createElement("div");
    repostsAvatars.className = "avatar-block";
    reposts.forEach((repost) => {
      const image = document.createElement("img");
      const link = document.createElement("a");
      link.href = repost.author.url;
      image.src = repost.author.photo;
      image.alt = `Avatar for ${repost.author.name}`;
      link.append(image);
      repostsAvatars.append(link);
    });
    repostsWrapper.append(repostsAvatars);

    webMentionsSection.append(repostsWrapper);
  }

  if (replies.length) {
    // render on meta header
    document.getElementById(
      "page-replies"
    ).innerHTML = `• 💬 ${replies.length}`;

    // render on webmentions section
    const repliesWrapper = document.createElement("div");
    const clearReplies = document.createElement("div");
    clearReplies.style.clear = "both";
    repliesWrapper.append(clearReplies);
    const repliesHeader = document.createElement("h2");
    repliesHeader.innerHTML = `💬 ${replies.length} Replies`;
    repliesWrapper.append(repliesHeader);

    const repliesTable = document.createElement("table");
    replies.forEach((reply) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      row.append(cell);
      const author = document.createElement("p");
      author.className = "author-wrapper";
      author.innerHTML = `<a href="${reply.author.url}"><img alt="Avatar for ${
        reply.author.name
      }" class="reply-photo" src="${
        reply.author.photo
      }" /></a> <span class="reply-name">${reply.author.name}</span><a href="${
        reply.url
      }" class="reply-date">${new Date(
        reply.published
      ).toLocaleDateString()}</a><div class="clear-both"></div>`;
      const card = document.createElement("div");
      card.className = "reply-card";
      card.innerHTML = reply.content.html;
      card.insertBefore(author, card.firstChild);
      cell.appendChild(card);
      repliesTable.append(row);
    });
    repliesWrapper.append(repliesTable);
    webMentionsSection.append(repliesWrapper);
  }
}

export async function getMentions(url) {
  let mentions = [];
  let page = 0;
  let perPage = 100;

  while (true) {
    const results = await fetch(
      `https://webmention.io/api/mentions.jf2?target=${url}&per-page=${perPage}&page=${page}`
    ).then((r) => r.json());

    mentions = mentions.concat(results.children);

    if (results.children.length < perPage) {
      break;
    }

    page++;
  }

  return mentions.sort((a, b) =>
    (a.published || a["wm-received"]) < (b.published || b["wm-received"])
      ? -1
      : 1
  );
}
