const privacyRoot = document.documentElement;
const privacyThemeToggle = document.querySelector('[data-theme-toggle]');

function setPrivacyTheme(theme) {
  privacyRoot.dataset.theme = theme;
  localStorage.setItem('sip-city-theme', theme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  privacyThemeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#081f1a' : '#153c35');
}

privacyThemeToggle.addEventListener('click', () => {
  setPrivacyTheme(privacyRoot.dataset.theme === 'dark' ? 'light' : 'dark');
});

setPrivacyTheme(privacyRoot.dataset.theme || 'light');
