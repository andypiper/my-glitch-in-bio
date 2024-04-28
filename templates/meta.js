import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderMeta = html.node`
  <title>${settings.metaTitle}</title>
  
  <!-- Web Monetization -->
  <meta name="monetization" content="$ilp.uphold.com/xkwmiyHi47Rw">
  
  <!-- analytics -->
  <!-- Google tag (gtag.js) -->
  <!-- should be configurable in settings.json -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GKZGDYRC6J"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GKZGDYRC6J');
  </script>
  
  <!-- OpenGraph/Social sharing -->
  <!-- moved into index for now -->

  <!-- Load our custom theme -->
  <link rel="stylesheet" type="text/css" href="/styles/themes/${settings.theme}.css" />
`;
