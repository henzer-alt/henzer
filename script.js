const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
// Native HTML validation and POST allow submission even without JavaScript.
// Netlify detects the form in index.html during deployment and strips data-netlify, so select by name.
const form = document.querySelector('form[name="founding-performance-partners"]');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const error = form.querySelector('.form-error');
    const original = button.innerHTML;
    button.disabled = true;
    button.textContent = 'Submitting…';
    error.hidden = true;
    try {
      // Local static servers cannot collect applications. Do not show false success.
      if (['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
        throw new Error('This is a local preview. Applications can be submitted after the site is deployed to Netlify with form detection enabled.');
      }
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error('We couldn’t send your application. Please try again in a moment.');
      location.assign(form.getAttribute('action'));
    } catch (failure) {
      error.textContent = failure.message || 'Something went wrong. Please try again.';
      error.hidden = false;
      button.disabled = false;
      button.innerHTML = original;
    }
  });
}
