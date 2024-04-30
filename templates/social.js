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

// these will show up in the order listed
// so if you want to re-arrange the icons, 
// move the items around in the list
const socials = [
  { name: "glitch", altText: "Glitch" },
  { name: "arena", altText: "Arena" },
  { name: "bandcamp", altText: "Bandcamp" },
  { name: "bluesky", altTest: "Bluesky" },
  { name: "bookwyrm", altTest: "Bookwyrm" },
  { name: "buttondown", altText: "Buttondown" },
  { name: "codeberg", altText: "Codeberg" },
  { name: "cohost", altText: "Cohost" },
  { name: "devTo", altText: "DEV.to" },
  { name: "facebook", altText: "Facebook" },
  { name: "github", altText: "GitHub" },
  { name: "gitlab", altText: "GitLab" },
  { name: "hackaday", altText: "Hackaday" },
  { name: "hashnode", altText: "Hashnode" },
  { name: "instagram", altText: "Instagram" },
  { name: "keybase", altText: "Keybase" },
  { name: "kofi", altText: "Ko-fi" },
  { name: "lemmy", altText: "Lemmy" },
  { name: "letterboxd", altText: "Letterboxd" },
  { name: "linkedin", altText: "LinkedIn" },
  { name: "mastodon", altText: "Mastodon", rel: "me" },
  { name: "medium", altText: "Medium" },
  { name: "onlyfans", altText: "OnlyFans" },
  { name: "patreon", altText: "Patreon" },
  { name: "peertube", altText: "Peertube" },
  { name: "pinboard", altText: "Pinboard" },
  { name: "pinterest", altText: "Pinterest" },
  { name: "pixelfed", altText: "Pixelfed" },
  { name: "podcast", altText: "Podcast" },
  { name: "replit", altText: "Replit" },
  { name: "spotify", altText: "Spotify" },
  { name: "soundcloud", altText: "Soundcloud" },
  { name: "stackOverflow", altText: "Stack Overflow" },
  { name: "substack", altText: "Substack" },
  { name: "threads", altText: "Threads" },
  { name: "tiktok", altText: "TikTok" },
  { name: "twitch", altText: "Twitch" }, 
  { name: "tumblr", altText: "Tumblr" },
  { name: "X", altText: "X" },
  { name: "youtube", altText: "YouTube" }
];

// should move the styling here into a CSS class
export const renderSocialIcons = html.node`
          <p style="font-size: 0.75rem;">
            Visit my profiles on other platforms below
          </p>
    <div class="social-icons">
      ${socials.map((platform) => {
        return html.node`${renderSocial(platform)}`;
      })}
      ${renderEmail()}
    </div>
  `;
