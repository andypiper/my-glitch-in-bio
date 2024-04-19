import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderStatusLol = html.node`<div>
  <h2 class="subhead">
     <a href="https://status.lol/andypiper" style="border-bottom: none; text-decoration: underline" target="_blank">Currently</a>
  </h2>

  <script src="https://status.lol/andypiper.js?time&fluent&pretty" defer></script>

</div>`;