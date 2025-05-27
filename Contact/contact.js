function sendEmail() {
  const form = document.getElementById('contact-form');
  const first = form.first_name.value;
  const last = form.last_name.value;
  const email = form.email.value;
  const phone = form.number.value;
  const message = form.message.value;

  const subject = encodeURIComponent("New Contact Message from " + first + " " + last);
  const body = encodeURIComponent(
    `You have received a new message from your website contact form:\n\n` +
    `───────────────────────────────\n` +
    `👤 Name: ${first} ${last}\n` +
    `📧 Email: ${email}\n` +
    `📞 Phone: ${phone}\n` +
    `───────────────────────────────\n\n` +
    `📝 Message:\n${message}\n\n` +
    `───────────────────────────────`
  );

  const mailtoLink = `mailto:info.website@ask.serviceplanet.nl?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
  return false; // evitar envío real del formulario
}