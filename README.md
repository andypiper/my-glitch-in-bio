# Glitch in Bio!

Your links, your way. A link-in-bio app you can customize any way you want.

🚀 **TL;DR Remix and edit `settings.json` to add your own links!** 🚀


### Working with Glitch in Bio

To get started, open `settings.json` and add your name, avatar, social accounts, and links. Your changes will all be reflected instantly. 

To help you make the site your own we've included some themes. In `settings.json` you can choose `glitch` or `gallery`. Choose any theme you want, add a new one, or start with one and edit it to make it your own. _If you don't have a valid theme selected, the site will default to the styles outlined in `style.css`._

* The images you add in `settings.json` as the `img` property for each link will display if you select the `gallery` theme. Upload yours in `assets` and copy the link from there if they aren't already online.

In `index.html` you'll see where the theme is applied to the page at the first comment, which starts with `<!--- THEMES:`. We've also included a few `<!--- NEXT STEPS: ` comments in the HTML that show things like adding a bio paragraph or embedding a YouTube video. **For more HTML learning try out [Hello Website](https://glitch.com/~glitch-hello-website).**

___The images in the default settings.json file are from a remix of [Generative Placeholders](https://glitch.com/~generative-placeholders) by [@stefan](https://glitch.com/@stefan).___ 🖼️🪅✨


## What's in this project?

← `README.md`: That’s this file. You can delete it, or keep it handy so you don't lose the instructions.

← `index.html`: This is the main page template vite uses to build your site. You'll find the handlebars syntax for importing the data you specify in `settings.json` using the structures in `layout/` in here. You'll also find some tips on configuring the page in the HTML comments.

← `settings.json`: Settings for your name, image, and links. The `index.html` page includes the data in the structures defined in `layout/`.

← `layout/`: Markup templates — you can edit every line of HTML or never even look at any of it. The data you specify in `settings.json` will be built into the page using the HTML in here using handlebars syntax (e.g. `{{settings.name}}`).

← `public/styles/`: Stylesheets for Glitch in Bio, including alternate themes. Change your theme in `settings.json`. You can create a new theme by adding a CSS file to this folder and selecting it using its name in the settings (e.g. `glitch`, `gallery`, or whatever yours is called!)

← `public/manifest.json` and `public/sw.js`: These set your site up to function as a Progressive Web App (PWA).

← `assets`: Add images here and copy the links into `settings.json` to show them in your site.

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
