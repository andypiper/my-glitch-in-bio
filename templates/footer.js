import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderFooter = html.node`<footer class="footer" role="contentinfo">
  <div class="tagline">
  <a
      href="https://glitch.com/glitch-in-bio"
      style="border-bottom: none; text-decoration: underline"
      >
    <strong>Glitch in Bio</strong></a><br />
    Your links, your way.
  </div>
  <a
    class="btn--remix"
    target="_top"
    href="https://glitch.com/edit/#!/remix/andypiper"
  >
    <img
      src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
      alt="Create a new Glitch project based on this one"
    />
    Remix on Glitch
  </a>
  <a href="https://andypiper.org" rel="me"/>
</footer>
`;
