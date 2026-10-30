# my-site · Hannove

The learning website for Web Technologies 2026 — built lesson by lesson in class, one page at a time.

## What's here

| Page | What it is |
| --- | --- |
| `index.html` | Home: a hero image and an overview of the site |
| `quotes.html` | Fifteen quotes, each with who said it and where; the hero shows a random one on every load |
| `project.html` | Project ideas — what I might build, and who each one is for |
| `machine.html` | The useless machine: a switch it refuses to leave on, and a 10-second challenge around it |
| `about.html` | Who I am and how to reach me |

The navigation is written once in `nav.html` and injected into every page by `nav.js`,
so a change to the menu changes every page at once.

## How to open it

**VS Code + Live Server (recommended)**

1. VS Code → File → Open Folder, pick the whole `my-site` folder
2. Click **Go Live** in the status bar (install the Live Server extension if it's missing)
3. The site opens at `http://127.0.0.1:5500/index.html`

**Double-click `index.html`**

Also works: the browser blocks `fetch` on `file://`, so `nav.js` falls back to
copies of the nav and footer baked into the script. Changes to `nav.html` /
`footer.html` are only picked up through Live Server.

## Online

Live at <https://hht2006722.github.io/my-site/>, deployed from this repository
with GitHub Pages.
