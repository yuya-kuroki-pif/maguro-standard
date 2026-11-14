/* マグロスタンダード 門前仲町店 - 共通スクリプト
   - スマホ用ハンバーガーメニューの開閉
   - ページトップボタン
   - 現在ページのナビ強調 */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('global-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // メニュー内リンクを押したら閉じる（ページ内アンカー対応）
    nav.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });

    // PC幅に戻ったらリセット
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1180 && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // 現在ページのナビを強調
  function navTarget(a) {
    var raw = a.getAttribute('href') || '';
    if (!raw || raw.indexOf('#') !== -1 || /^(https?:|mailto:|tel:)/.test(raw)) return null;
    return { p: new URL(raw, location.href).pathname.replace(/index\.html$/, ''), home: /^(\.\.?\/)*$/.test(raw) };
  }
  var path = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.nav-list a[href]').forEach(function (a) {
    var t = navTarget(a);
    if (t && t.p === path) {
      var li = a.closest('.nav-list > li');
      if (li) li.classList.add('is-current');
    }
  });

  // ページトップ
  var pagetop = document.querySelector('.pagetop');
  if (pagetop) {
    var onScroll = function () {
      if (window.scrollY > 400) {
        pagetop.classList.add('is-visible');
      } else {
        pagetop.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    pagetop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
