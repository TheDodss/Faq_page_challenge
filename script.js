function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains('active');

 
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  
  if (!isActive) {
    faqItem.classList.add('active');
  }
}
