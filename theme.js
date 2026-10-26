(function () {
  var DARK_META = '#0e1116';
  var LIGHT_META = '#ffffff';

  function theme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function urlTheme() {
    var q = new URLSearchParams(location.search).get('theme');
    return q === 'dark' || q === 'light' ? q : null;
  }

  function sync(next) {
    document.documentElement.setAttribute('data-theme', next);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? DARK_META : LIGHT_META);
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    var dark = next === 'dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  var btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = theme() === 'dark' ? 'light' : 'dark';
      var url = new URL(location.href);
      url.searchParams.set('theme', next);
      history.replaceState(null, '', url);
      sync(next);
    });
  }

  sync(theme());

  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (urlTheme()) return;
      sync(e.matches ? 'dark' : 'light');
    });
  } catch (e) {}
})();
