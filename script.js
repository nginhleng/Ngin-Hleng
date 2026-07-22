document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // 1. Gather form input values
  const form = e.target;
  const name = document.getElementById('name').value.trim();
  const contact = form.querySelector('input[type="email"]').value.trim();
  const details = form.querySelector('textarea').value.trim();
  const submitBtn = form.querySelector('button[type="submit"]');

  // 2. Simple validation
  if (!name || !contact || !details) {
    alert('Please fill out all fields before submitting!');
    return;
  }

  // 3. Temporary button loading state
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = 'Baking your order... 🍕';
  submitBtn.style.opacity = '0.8';
  submitBtn.disabled = true;

  // 4. Simulate sending order details (500ms delay for smooth UX)
  setTimeout(() => {
    // Detailed receipt message
    const orderDetails = 
      `🎉 Thank you for your order, ${name}!\n\n` +
      `📋 Order Details Summary:\n` +
      `--------------------------------\n` +
      `👤 Customer: ${name}\n` +
      `📧 Contact: ${contact}\n` +
      `📝 Details / Address: "${details}"\n` +
      `--------------------------------\n\n` +
      `🔥 Your artisan pizza order has been sent to our kitchen!\n` +
      `We'll reach out to you shortly to confirm delivery.`;

    alert(orderDetails);

    // 5. Reset form & restore button state
    form.reset();
    submitBtn.textContent = originalBtnText;
    submitBtn.style.opacity = '1';
    submitBtn.disabled = false;
  }, 500);
});
