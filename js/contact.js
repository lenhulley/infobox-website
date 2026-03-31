/* ==========================================================================
   Infobox — Contact Form
   Validation, honeypot check, inline success state
   ========================================================================== */

(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var successMessage = document.getElementById('form-success');
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Honeypot check — if filled, silently reject
    var honeypot = form.querySelector('[name="website_url"]');
    if (honeypot && honeypot.value) {
      // Bot detected — show fake success
      showSuccess();
      return;
    }

    // Clear previous errors
    var errors = form.querySelectorAll('.form-error');
    errors.forEach(function (el) { el.remove(); });
    var errorInputs = form.querySelectorAll('.has-error');
    errorInputs.forEach(function (el) { el.classList.remove('has-error'); });

    // Validate required fields
    var valid = true;
    var requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(function (field) {
      if (!field.value.trim()) {
        valid = false;
        showFieldError(field, 'This field is required');
      } else if (field.type === 'email' && !isValidEmail(field.value)) {
        valid = false;
        showFieldError(field, 'Please enter a valid email address');
      }
    });

    if (!valid) {
      // Focus first error field
      var firstError = form.querySelector('.has-error');
      if (firstError) firstError.focus();
      return;
    }

    // Simulate submission (replace with actual endpoint)
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(function () {
      showSuccess();
    }, 800);
  });

  function showFieldError(field, message) {
    field.classList.add('has-error');
    field.style.borderColor = 'var(--color-alert)';
    field.setAttribute('aria-invalid', 'true');
    var errorId = 'error-' + (field.id || field.name);
    var error = document.createElement('div');
    error.className = 'form-error';
    error.id = errorId;
    error.setAttribute('role', 'alert');
    error.textContent = message;
    field.setAttribute('aria-describedby', errorId);
    field.parentNode.appendChild(error);

    // Clear error on input
    field.addEventListener('input', function handler() {
      field.classList.remove('has-error');
      field.style.borderColor = '';
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
      var err = field.parentNode.querySelector('.form-error');
      if (err) err.remove();
      field.removeEventListener('input', handler);
    });
  }

  function showSuccess() {
    form.style.display = 'none';
    if (successMessage) {
      successMessage.style.display = 'block';
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();
