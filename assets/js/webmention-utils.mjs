export function renderMentions(mentions, className) {
  const webMentionsSection = document.querySelector(className);
  mentions = mentions.filter((m) => m["wm-private"] !== true);

  if (mentions.length)
    webMentionsSection.innerHTML =
      "<h2>Mentions Across the World Wide Web</h2>";

  const heading = {
    "like-of": "👍 {x} Likes",
    "repost-of": "🔁 {x} Reposts",
    "bookmark-of": "🔖 {x} Bookmarks",
    "mention-of": "💬 {x} Mentions",
    "in-reply-to": "💬 {x} Replies",
  };

  ["like-of", "repost-of", "bookmark-of", "mention-of"].forEach((type) => {
    const mentionsOfType = mentions
      .filter((m) => m.author.name !== "Ayo Ayco")
      .filter((m) => m["wm-property"] === type);

    if (mentionsOfType.length) {
      const avatarBlock = createAvatarBlock(mentionsOfType, heading[type]);
      webMentionsSection.append(avatarBlock);
    }
  });

  const replies = mentions.filter((m) => m["wm-property"] === "in-reply-to");
  if (replies.length) {
    // render on webmentions section
    const repliesWrapper = document.createElement("div");
    const clearReplies = document.createElement("div");
    clearReplies.style.clear = "both";
    repliesWrapper.append(clearReplies);
    const repliesHeader = document.createElement("h3");
    repliesHeader.innerHTML = heading["in-reply-to"].replace(
      "{x}",
      replies.length
    );
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

function createAvatarBlock(mentions, heading) {
  const clearDiv = document.createElement("div");
  clearDiv.style.clear = "both";

  const avatarBlock = document.createElement("div");
  avatarBlock.append(clearDiv);

  const heading = document.createElement("h3");
  heading.innerHTML = heading.replace("{x}", mentions.length);
  avatarBlock.append(heading);

  const avatars = document.createElement("div");
  avatars.className = "avatar-block";

  mentions.forEach((mention) => {
    const image = document.createElement("img");
    image.src = mention.author.photo;
    image.alt = `Avatar for ${mention.author.name}`;
    const link = document.createElement("a");
    link.href = mention.author.url;
    link.append(image);
    avatars.append(link);
  });

  avatarBlock.append(avatars);

  return avatarBlock;
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
