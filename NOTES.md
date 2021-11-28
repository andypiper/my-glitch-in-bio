# Working notes / dev diary

- [Blog post on DEV.to](https://dev.to/andypiper/a-quick-glitch-bio-break-1c6a)

## Changes from the default Glitch in Bio template

- custom theme/style (`dusky-lory.css`)
  - used [coolors.co](https://coolors.co) to make a palette
  - imported a Google Fonts resource
- using [Gravatar](https://gravatar.com) to get my profile image
  - convenient, as it also lets me get resized versions with `?s=` URL params
- fixed `head.html` to _correctly_ include `og` and `twitter` meta tags
  - Twitter Card Validator fails on the default template as-is
  - NOTE: need a minimum of (either `og:` or `twitter:`) `title` and `image` to work; looks best with `description` as well
- added a short bio blurb to `settings.json` -> para markup in `index.html`
- added Stack Overflow and Ko-fi icons to `social.html` footer
  - used SVGs from [Iconify](https://iconify.design/)
- borrowed [Tweet links](https://glitch.com/~tweet-links) template, updated to use timelines as well as Tweets and customised params to match theme
- I decided I wanted a different image for the favicon/homescreen icon than on the page itself, so I added `avatarImageAlt` to settings
  - and, then added a CSS opacity mouseover effect to fade between them (in `avatar.html` and `style.css` so this is independent of theme)
- excluded `.md` files from restart in `watch.json`
- added a custom domain (andypiper.me) using the [support article](https://help.glitch.com/kb/article/9-how-do-i-add-a-custom-domain-to-my-glitch-project/)
  - also, took the opportunity to update the security on my registrar login with 2FA, and to let some old/unneeded domains expire! #cleanup

## TODO / ideas

- ~~add Tweet timeline~~
  - make it collapsible?
- change favicon to match site
- add Revue social link (edit social template)
- refactor the SVGs out from the `social` template to make it cleaner
- twemoji plugin (scratchpad below, but as this is, it messes with alignment)
  - nice to have because it means you have the same emoji on all platforms
  - could also just put them in as images in the list items _shrug_
  - also twemoji are CC-BY-4.0 -> attribution req'd if used
- podcast / audio player plugin to unfold from the Podcast button? listed in page?
  - could point to latest episode, using the podcast RSS
- ~~make the `avatarImageAlt` a mouseover effect?~~
- I'd quite like some stats of some kind to gauge vists / what content gets attention
- check WCAG stuff for a11y
- Gravatar improvement: if the user adds an email address to settings, generate the Gravatar URL (it is the MD5 hash of an email address)

### docs

- update the `README.md` file so it reflects this remix project, not only the general Glitch in Bio template
- I don't really need that `CHANGELOG.md` file since it is from pre-remix
- the `LICENSE` looks like it is specific to vite-plugin-react... (hmm, wonder how best to handle licenses in the context of remixes etc)
- Glitch "Add CoC" button in editor does not add a useful (to my project) CoC, but I would like to apply something relevant

(thought, as I continue to poke... this is addictive... need to think about curating a list like this to keep it fresh, relevant, and useful)

I was thinking about embedding YT content etc but want to keep it simple

~~Digging around in Vite, looks like Vite 2.7 will enable `server.fs.deny` so that the markdown and other files can avoid being served.~~

^^^ this was probably my mistake in thinking those files were being served from the app in 2.5/2.6, seems to only let me hit the index page now, which is what I want.

## Code scratchpad

```text
<!-- twemoji -->
<script
  src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
  crossorigin="anonymous"
></script>
<!-- render emojis as Twemoji -->
<script>
  window.onload = function() {
    // Parses the document body and
    // inserts <img> tags in place of Unicode Emojis
    twemoji.parse(
      document.body,
      { folder: "svg", ext: ".svg" } // This is to specify to Twemoji to use SVGs and not PNGs
    );
  };
</script>

<!-- CSS configurations to tweak how the Twemojis are displayed -->
<style>
img.emoji {
   transform: scale(0.5);
   height: 0.5em;
   width: 0.5em;
   margin: 0 .05em 0 .1em;
   vertical-align: -0.5em;
   pointer-events: none;
  }
</style>
```

## Original ideas

![Sketchnotes](https://cdn.glitch.me/844643de-894b-49ce-8757-32fad8afa3c9%2Fideas-sketch.jpeg?v=1638029223822)
