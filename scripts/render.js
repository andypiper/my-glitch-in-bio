// Importing modules and functions
import { html, render } from "lighterhtml";
import { renderMeta } from "../templates/meta.js";
import { renderHeader } from "../templates/header.js";
import { renderStatusLol } from "../templates/status-lol.js";
import { renderLinks } from "../templates/links.js";
import { renderNewsletter } from "../templates/newsletter.js";
import { renderFooter } from "../templates/footer.js";
import { renderSocialIcons } from "../templates/social.js";
import jsonld from "../templates/json-ld.json";

const head = document.getElementsByTagName("head")[0];

// add in any JSON-LD metadata to the head
// moved into index because of static ssr requirement
const scriptNode = document.createElement('script');
scriptNode.type = 'application/ld+json';
scriptNode.textContent = JSON.stringify(jsonld);
head.appendChild(scriptNode);

// add the meta headers from meta.js
head.appendChild(renderMeta);

// Get a reference to the content div
const contentDiv = document.getElementById("content");

// Define an array of sections to be added
const sections = [renderHeader, renderLinks, renderStatusLol, renderNewsletter, renderSocialIcons, renderFooter];

// Iterate over sections and append them to contentDiv
sections.forEach((section) => contentDiv.appendChild(section));
