/**
 * Stitch design system — small UX helpers.
 *
 *  - Mobile drawer open/close
 *  - Contact form label-floating fallback (in case CSS :focus-within isn't enough)
 *  - Smooth in-page anchors when the link lives on a different page
 */
(function () {
  // Mobile nav toggle
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-mobile-nav-toggle]');
    var closer = e.target.closest('[data-mobile-nav-close]');
    if (trigger || closer) {
      e.preventDefault();
      var drawer = document.querySelector('[data-mobile-drawer]');
      if (drawer) drawer.classList.toggle('open');
    }
  });

  // Sticky "has-value" class on form fields so the label stays floated after blur
  function syncFieldState(el) {
    var wrap = el.closest('.field-wrap');
    if (!wrap) return;
    if (el.value && el.value.trim() !== '') {
      wrap.classList.add('has-value');
    } else {
      wrap.classList.remove('has-value');
    }
  }
  document.addEventListener('input', function (e) {
    if (e.target.matches('.field-wrap input, .field-wrap textarea')) {
      syncFieldState(e.target);
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.field-wrap input, .field-wrap textarea').forEach(syncFieldState);
  });
})();
