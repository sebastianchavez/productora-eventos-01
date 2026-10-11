// ============================================
// CONTACTO - Validación de formulario
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', handleSubmit);

  // Validación en tiempo real
  form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const fields = form.querySelectorAll('.form-input, .form-textarea, .form-select');
  
  let isValid = true;
  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (!isValid) {
    return;
  }

  // Simular envío
  const submitBtn = form.querySelector('[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span> Enviando...';

  setTimeout(() => {
    // Mostrar mensaje de éxito
    const successMsg = document.getElementById('form-success');
    if (successMsg) {
      successMsg.classList.add('visible');
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    // Ocultar mensaje después de 6 segundos
    setTimeout(() => {
      successMsg?.classList.remove('visible');
    }, 6000);
  }, 1500);
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  const required = field.hasAttribute('required');
  const errorEl = field.parentElement.querySelector('.form-error');
  
  let error = '';

  if (required && !value) {
    error = 'Este campo es obligatorio';
  } else if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      error = 'Por favor, introduce un email válido';
    }
  } else if (type === 'tel' && value) {
    const phoneRegex = /^[\d\s+\-()]{9,}$/;
    if (!phoneRegex.test(value)) {
      error = 'Por favor, introduce un teléfono válido';
    }
  }

  if (error) {
    field.classList.add('error');
    if (errorEl) {
      errorEl.textContent = error;
      errorEl.classList.add('visible');
    }
    return false;
  } else {
    field.classList.remove('error');
    if (errorEl) {
      errorEl.classList.remove('visible');
    }
    return true;
  }
}
