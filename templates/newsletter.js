import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderNewsletter = html.node`
          <h2 class="subhead">Newsletter</h2>
          <div style="font-size: 0.75em; padding-top: 0.5em; padding-bottom: 1em;">
            I send out a newsletter every now and then. If you would like to receive it, enter your details below (or, you can <a href="https://buttondown.email/andypiper/archive" target="_blank" style="border-bottom: none; text-decoration: underline">browse the archives</a>).</div>
            <form style="padding-bottom: 1.75em;"
  action="https://buttondown.email/api/emails/embed-subscribe/andypiper"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/andypiper', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <label for="bd-email">Enter your email to subscribe</label>
  <input type="email" name="email" id="bd-email" autocomplete="email"/>
  <input type="hidden" name="tag" value="me-page" />
  <input type="submit" value="Subscribe" />
</form>`;