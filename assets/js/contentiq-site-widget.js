/**
 * ContentIQ embeddable chat (symplistic.ai site). Loaded from reusable.js or directly before </body>.
 */
(function () {
  'use strict';
  if (window.__symplisticContentIQWidgetInit) return;
  if (document.querySelector('script[src*="contentiq-widget.pages.dev"]')) return;

  window.__symplisticContentIQWidgetInit = true;

  var agentId = '6b8a4e48-caf6-4351-b399-4dc32350d497';
  var mount = document.createElement('div');
  mount.className = 'contentiq_symplisticai_chat';
  mount.setAttribute('data-agent', agentId);
  document.body.appendChild(mount);

  var s = document.createElement('script');
  s.src = 'https://contentiq-widget.pages.dev/widget.js';
  s.async = true;
  s.setAttribute('data-symplistic-contentiq-widget', '');
  s.setAttribute('data-agent', agentId);
  s.setAttribute('data-token', '631224d4081dbd8054d45d7ff8d47b2173986c764e6416e23333eb433b502421');
  s.setAttribute('data-backend', 'https://backend.contentiq.symplistic.ai');
  document.body.appendChild(s);
})();
