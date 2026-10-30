// nav.js — puts the nav and footer into every page
//
// Over http:// (VS Code "Live Server") this fetches nav.html / footer.html.
// If you just double-click index.html, the browser blocks fetch on file://,
// so the same markup is used from the copies below instead.

const NAV_HTML = `
<nav>
  <a class="logo" href="index.html">◆ Hannove</a>

  <ul class="links">
    <li><a href="index.html">Home</a></li>
    <li><a href="quote.html">Quotes</a></li>
    <li><a href="project.html">Project ideas</a></li>
    <li><a href="about.html">About</a></li>
  </ul>

  <a class="action" href="about.html#contact">Contact</a>
</nav>
`;

const FOOTER_HTML = `
<p>Built by Hannove · Web Technologies 2026</p>

<address>
  <a href="mailto:hannove@qq.com">hannove@qq.com</a>
</address>
`;

function load(file, target, fallback) {
  fetch(file)
    .then(r => r.text())
    .then(html => {
      document.getElementById(target).innerHTML = html;
    })
    .catch(() => {
      document.getElementById(target).innerHTML = fallback;
    });
}

load('nav.html', 'site-header', NAV_HTML);
load('footer.html', 'site-footer', FOOTER_HTML);
