# Working notes

## Changes from the default Glitch in Bio template

- custom style (`dusky-lory.css`)
  - used [coolors.co](https://coolors.co) to make a palette
  - imported a Google Fonts resource
- using [Gravatar](https://gravatar.com) to get my profile image
- fixed `head.html` to correctly include `og` and `twitter` meta tags
  - NOTE: need a minimum of (either `og:` or `twitter:`) `title` and `image` to work; looks best with `description` as well
- added a short bio link to `settings.json` -> para markup in `index.html`
- added Stack Overflow and Ko-fi icons to `social.html` footer
  - used SVGs from [Iconify](https://iconify.design/)
- borrowed [Tweet links](https://glitch.com/~tweet-links) template, updated to use timelines as well as Tweets and customised params to match theme
- I decided I wanted a different image for the favicon/homescreen icon than on the page itself, so I added `avatarImageAlt` to settings
- excluded `.md` files from restart/install in `watch.json`

## TODO / ideas

- ~~add Tweet timeline~~
  - make this fold up?
- add Revue social link (edit social template)
- refactor the SVGs out from the `social` template to make it cleaner
- twemoji plugin (scratchpad below, but as this is, it messes with alignment)
  - nice to have because it means you have the same emoji on all platforms
  - could also just put them in as images in the list items _shrug_
  - also twemoji are CC BY-4.0 -> attribution req'd if used
- podcast / audio player plugin to unfold from the Podcast button? listed in page?
  - could point to latest episode in podcast RSS
- make the `avatarImageAlt` a mouseover effect?

(thought, as I continue to poke... this is addictive... need to think about curating a list like this to keep it fresh, relevant, and useful)

I was thinking about embedding YT content etc but want to keep it simple

## Code scratchpad

```
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
