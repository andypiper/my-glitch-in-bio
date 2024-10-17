import { html } from "lighterhtml";
import settings from "../settings.json";
import { SVGs } from "./social-svgs";

function renderSocial(platform) {
  // Check that this platform exists
  if (settings.social[platform.name]) {
    return html`
      <a
        aria-label="${settings.name} on ${platform.name}"
        href="${settings.social[platform.name]}"
        tabindex="-1"
        rel=${platform.rel}
        >${SVGs[platform.name]}</a
      >
    `;
  }
}

function renderEmail() {
  if (settings.social.email) {
    return html`
      <a
        aria-label="${settings.name} on email"
        href="mailto:${settings.social.email}"
        tabindex="-1"
        >${SVGs.email}</a
      >
    `;
  }
}

// this array is shuffled before the items are displayed
const socials = [
  { name: "mastodon", altText: "Mastodon", rel: "me" },
  { name: "pixelfed", altText: "Pixelfed" },
  { name: "podcast", altText: "Podcast" },
  { name: "glitch", altText: "Glitch" },
  { name: "threads", altText: "Threads" },
  { name: "applemusic", altText: "Apple Music" },
  { name: "lastfm", altText: "Last.FM" }, 
  { name: "arena", altText: "Arena" },
  { name: "bluesky", altTest: "Bluesky" },
  { name: "bookwyrm", altTest: "Bookwyrm" },
  { name: "buttondown", altText: "Buttondown" },
  { name: "codeberg", altText: "Codeberg" },
  { name: "devTo", altText: "DEV.to" },
  { name: "facebook", altText: "Facebook" },
  { name: "flickr", altText: "Flickr" },
  { name: "flipboard", altText: "Flipboard" },
  { name: "friendica", altText: "Friendica" },
  { name: "github", altText: "GitHub" },
  { name: "gitlab", altText: "GitLab" },
  { name: "hackaday", altText: "Hackaday" },
  { name: "hashnode", altText: "Hashnode" },
  { name: "instagram", altText: "Instagram" },
  { name: "bgg", altText: "BoardGameGeek" },
  { name: "itchio", altText: "Itch.io" },
  { name: "keybase", altText: "Keybase" },
  { name: "kofi", altText: "Ko-fi" },
  { name: "lemmy", altText: "Lemmy" },
  { name: "lexaloffle", altText: "Lexaloffle BBS (PICO-8)" },
  { name: "letterboxd", altText: "Letterboxd" },
  { name: "linkedin", altText: "LinkedIn" },
  { name: "matrix", altText: "Matrix" },
  { name: "medium", altText: "Medium" },
  { name: "onlyfans", altText: "OnlyFans" },
  { name: "patreon", altText: "Patreon" },
  { name: "peertube", altText: "PeerTube" },
  { name: "pinboard", altText: "Pinboard" },
  { name: "pinterest", altText: "Pinterest" },
  { name: "replit", altText: "Replit" },
  { name: "spotify", altText: "Spotify" },
  { name: "soundcloud", altText: "Soundcloud" },
  { name: "stackOverflow", altText: "Stack Overflow" },
  { name: "steam", altText: "Steam" },
  { name: "substack", altText: "Substack" },
  { name: "tiktok", altText: "TikTok" },
  { name: "twitch", altText: "Twitch" }, 
  { name: "tumblr", altText: "Tumblr" },
  { name: "wordpress", altText: "WordPress" },
  { name: "X", altText: "X" },
  { name: "youtube", altText: "YouTube" },
  { name: "bandcamp", altText: "Bandcamp" }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// should move the styling here into a CSS class
export const renderSocialIcons = html.node`
  <p>
    Visit my profiles on other platforms below
  </p>
  <div class="social-icons">
    ${shuffleArray([...socials]).map((platform) => {
      return html.node`${renderSocial(platform)}`;
    })}
    ${renderEmail()}
  </div>
`;