const contactRoot = document.documentElement;
const contactThemeToggle = document.querySelector('[data-theme-toggle]');

function setContactTheme(theme) {
  contactRoot.dataset.theme = theme;
  localStorage.setItem('sip-city-theme', theme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  contactThemeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#081f1a' : '#153c35');
}

contactThemeToggle.addEventListener('click', () => {
  setContactTheme(contactRoot.dataset.theme === 'dark' ? 'light' : 'dark');
});

setContactTheme(contactRoot.dataset.theme || 'light');

const contactForm = document.querySelector('#contact-form');
const contactSubmit = document.querySelector('#contact-submit');
const contactStatus = document.querySelector('#contact-form-status');
const contactSuccess = document.querySelector('#contact-success');

contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  contactSubmit.disabled = true;
  contactSubmit.innerHTML = 'Sending…';
  contactStatus.classList.remove('error');
  contactStatus.textContent = 'Sending your message…';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === false || result.success === 'false') {
      throw new Error(result.message || 'Message could not be sent');
    }
    contactForm.reset();
    contactForm.hidden = true;
    contactSuccess.hidden = false;
    contactSuccess.focus();
  } catch (error) {
    console.error(error);
    contactStatus.classList.add('error');
    contactStatus.textContent = 'Your message could not be sent. Please try again.';
    contactSubmit.disabled = false;
    contactSubmit.innerHTML = 'Submit <span aria-hidden="true">→</span>';
  }
});
