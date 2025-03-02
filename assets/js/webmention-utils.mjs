export function renderMentions(mentions, rootSelector, ignoreAuthorUrls = []) {
  const webMentionsSection = document.querySelector(rootSelector);
  const engagementTypes = ["like-of", "repost-of", "bookmark-of"];

  mentions = mentions.filter(
    (m) =>
      m["wm-private"] !== true &&
      !(
        ignoreAuthorUrls.includes(m.author.url) &&
        engagementTypes.includes(m["wm-property"])
      ),
  );

  if (mentions.length) {
    webMentionsSection.innerHTML =
      "<h2 id='webmentions'>From Across the Web</h2>";

    const heading = {
      "like-of": "👍 {x} Likes",
      "repost-of": "🔁 {x} Reposts",
      "bookmark-of": "🔖 {x} Bookmarks",
      "mention-of": "💬 {x} Mentions",
      "in-reply-to": "💬 {x} Replies",
    };

    engagementTypes.forEach((type) => {
      const mentionsOfType = mentions.filter((m) => m["wm-property"] === type);

      if (mentionsOfType.length) {
        const avatarBlock = createAvatarBlock(mentionsOfType, heading[type]);
        webMentionsSection.append(avatarBlock);
      }
    });

    ["in-reply-to", "mention-of"].forEach((type) => {
      const replies = mentions.filter((m) => m["wm-property"] === type);

      if (replies.length) {
        // render on webmentions section
        const repliesWrapper = createRepliesBlock(replies, heading[type]);
        webMentionsSection.append(repliesWrapper);
      }
    });
  }
}

function createRepliesBlock(replies, heading) {
  const repliesWrapper = document.createElement("div");
  const clearReplies = document.createElement("div");
  clearReplies.style.clear = "both";
  repliesWrapper.append(clearReplies);
  const repliesHeader = document.createElement("h3");
  repliesHeader.innerHTML = heading.replace("{x}", replies.length);
  repliesWrapper.append(repliesHeader);

  const frag = document.createDocumentFragment();
  replies.forEach((reply) => {
    const author = document.createElement("p");
    author.className = "author-wrapper";
    author.innerHTML = `
    <a href="${reply.author.url}">
      <minidenticon-svg username="${reply.author.url}" alt="Avatar for ${
        reply.author.name
      }" class="reply-photo" src="${reply.author.photo}">
      </minidenticon-svg>
    </a>

    <span class="reply-name">${reply.author.name}</span>
    
    <a href="${reply.url}" class="reply-date">${new Date(
      reply.published,
    ).toLocaleDateString()}</a>
    
    <div class="clear-both"></div>`;

    const card = document.createElement("div");
    card.className = "reply-card";
    if (typeof Sanitizer !== "undefined") {
      const sanitizer = new Sanitizer();
      card.setHTML(reply.content.html, { sanitizer });
    } else {
      // todo sanitize manually
      card.innerHTML = reply.content.html;
    }
    card.insertBefore(author, card.firstChild);
    frag.appendChild(card);
  });
  repliesWrapper.append(frag);
  return repliesWrapper;
}

function createAvatarBlock(mentions, headingText) {
  const clearDiv = document.createElement("div");
  clearDiv.style.clear = "both";

  const avatarBlock = document.createElement("div");
  avatarBlock.className = "avatar-block-wrapper";
  avatarBlock.append(clearDiv);

  const heading = document.createElement("h3");
  heading.innerHTML = headingText.replace("{x}", mentions.length);
  avatarBlock.append(heading);

  const avatars = document.createElement("div");
  avatars.className = "avatar-block";

  mentions.forEach((mention) => {
    const identicon = document.createElement("minidenticon-svg");
    identicon.setAttribute("username", mention.author.url);

    const link = document.createElement("a");
    link.href = mention.author.url;
    link.append(identicon);
    avatars.append(link);
  });

  avatarBlock.append(avatars);

  return avatarBlock;
}

export async function getMentions(url) {
  let mentions = [];
  let page = 0;
  let perPage = 100;

  // strip search params
  url = url.split(/[?#]/)[0];

  while (true) {
    const results = await fetch(
      `https://webmention.io/api/mentions.jf2?target=${url}&per-page=${perPage}&page=${page}`,
    ).then((r) => r.json());

    // dedupe depending on URL

    mentions = mentions.concat(results.children).filter((obj, index, array) => {
      const found = array.find((item) => item.url === obj.url);
      const foundIndex = array.indexOf(found);
      return foundIndex === index;
    });
    console.log(mentions.map((a) => a.url));

    if (results.children.length < perPage) {
      break;
    }

    page++;
  }

  return mentions.sort((a, b) =>
    (a.published || a["wm-received"]) < (b.published || b["wm-received"])
      ? -1
      : 1,
  );
}
