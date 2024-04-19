import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderHeader = html.node`<div>
  <!-- Avatar Image -->
  <!-- fades between two images on hover; remove the second img if not wanted -->

  <div class="avatar-container">
    <img src="${settings.avatarImage}" width="200" height="200" class="avatar" alt="${settings.name}" />
    <img src="${settings.avatarImageAlt}" width="200" height="200" class="avatar avatar-hover" alt="${settings.name}" loading="lazy" />
  </div>
  <h1 class="name">${settings.name}</h1>
  <div class="subhead">${settings.bio}</div>
</div>`;
