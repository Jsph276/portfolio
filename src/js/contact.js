export function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const submitButton = document.getElementById('submitBtn');
  if (!form || !success || !submitButton) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const recipient = 'josephemmanuelassiman@gmail.com';
    const mailBody = [
      `Nom : ${name}`,
      `Email : ${email}`,
      '',
      'Message :',
      message
    ].join('\n');
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Envoi...';
    submitButton.disabled = true;

    window.location.href = mailtoUrl;
    submitButton.innerHTML = '<i class="bi bi-envelope-check me-2"></i>Client mail ouvert';
    submitButton.disabled = false;
    success.textContent = 'Votre client mail a été ouvert avec les informations du formulaire.';
    success.classList.add('show');
    form.classList.remove('was-validated');
  });
}
