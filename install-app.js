(() => {
  const triggers = [...document.querySelectorAll('[data-open-install]')];
  if (!triggers.length) return;
  const runningStandalone = typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches;
  if (runningStandalone || navigator.standalone === true) {
    triggers.forEach(trigger => { trigger.hidden = true; });
    return;
  }

  document.body.insertAdjacentHTML('beforeend', `
    <dialog class="modal install-app-modal" id="install-app-modal" aria-labelledby="install-app-title">
      <div class="modal-card install-app-card">
        <button class="modal-close install-app-close" type="button" data-close-install aria-label="Close install instructions">×</button>
        <div class="install-app-heading">
          <span class="install-app-phone" aria-hidden="true">
            <svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2"/><path d="M10 5h4M11.5 18.5h1"/></svg>
          </span>
          <div>
            <span class="kicker">One-tap happy hours</span>
            <h2 id="install-app-title">Add Pour Happy to your Home Screen</h2>
            <p>Keep Orlando’s best happy hours one tap away.</p>
          </div>
        </div>

        <div class="install-device-tabs" role="tablist" aria-label="Choose your phone">
          <button class="install-device-tab" id="install-ios-tab" type="button" role="tab" aria-controls="install-ios-panel" aria-selected="false" data-install-tab="ios"><span aria-hidden="true">●</span> iPhone</button>
          <button class="install-device-tab" id="install-android-tab" type="button" role="tab" aria-controls="install-android-panel" aria-selected="true" data-install-tab="android"><span aria-hidden="true">◆</span> Android</button>
        </div>

        <section class="install-device-panel" id="install-ios-panel" role="tabpanel" aria-labelledby="install-ios-tab" data-install-panel="ios" hidden>
          <div class="install-tip"><span aria-hidden="true">💡</span><strong>Open Pour Happy in Safari for the smoothest iPhone setup.</strong></div>
          <ol class="install-steps">
            <li><span>1</span><p>Tap the <strong>Share</strong> button at the bottom of Safari.</p></li>
            <li><span>2</span><p>Scroll down and choose <strong>Add to Home Screen</strong>.</p></li>
            <li><span>3</span><p>Tap <strong>Add</strong> in the top-right corner.</p></li>
          </ol>
        </section>

        <section class="install-device-panel" id="install-android-panel" role="tabpanel" aria-labelledby="install-android-tab" data-install-panel="android">
          <div class="install-tip"><span aria-hidden="true">💡</span><strong>Open Pour Happy in Chrome for the fastest Android setup.</strong></div>
          <button class="button button-citrus install-native-button" id="install-native-button" type="button" hidden>Install Pour Happy now</button>
          <ol class="install-steps">
            <li><span>1</span><p>Tap the Chrome <strong>Menu</strong> button with three dots.</p></li>
            <li><span>2</span><p>Choose <strong>Add to Home screen</strong> or <strong>Install app</strong>.</p></li>
            <li><span>3</span><p>Confirm by tapping <strong>Install</strong> or <strong>Add</strong>.</p></li>
          </ol>
        </section>

        <button class="install-got-it" type="button" data-close-install>Got it</button>
      </div>
    </dialog>
  `);

  const dialog = document.querySelector('#install-app-modal');
  const tabs = [...dialog.querySelectorAll('[data-install-tab]')];
  const panels = [...dialog.querySelectorAll('[data-install-panel]')];
  const nativeInstallButton = dialog.querySelector('#install-native-button');
  let deferredInstallPrompt = null;

  const isIosDevice = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  function selectDevice(device) {
    tabs.forEach(tab => {
      const selected = tab.dataset.installTab === device;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.dataset.installPanel !== device; });
  }

  function openInstallGuide() {
    selectDevice(isIosDevice() ? 'ios' : 'android');
    dialog.showModal();
  }

  triggers.forEach(trigger => trigger.addEventListener('click', openInstallGuide));
  dialog.querySelectorAll('[data-close-install]').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  tabs.forEach(tab => tab.addEventListener('click', () => selectDevice(tab.dataset.installTab)));
  tabs.forEach(tab => tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const nextTab = tabs[(tabs.indexOf(tab) + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    selectDevice(nextTab.dataset.installTab);
    nextTab.focus();
  }));

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    nativeInstallButton.hidden = false;
  });

  nativeInstallButton.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    await deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    nativeInstallButton.hidden = true;
    dialog.close();
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    nativeInstallButton.hidden = true;
    triggers.forEach(trigger => {
      trigger.classList.add('is-installed');
      const label = trigger.querySelector('[data-install-label]');
      if (label) label.textContent = 'App installed';
    });
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js').catch(() => {}));
  }
})();
