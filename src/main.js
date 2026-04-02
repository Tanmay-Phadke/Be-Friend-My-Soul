import './style.css'

// Handle smooth appearance of elements on scroll
const observeElements = () => {
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        // Once visible, we can unobserve if we only want it once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target all elements with common animation class
  const revealElements = document.querySelectorAll('.animate-on-scroll');
  revealElements.forEach(el => observer.observe(el));
};

// Handle Glass Nav transition on scroll
const handleHeaderScroll = () => {
  const header = document.querySelector('#site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '1rem 0';
      header.style.boxShadow = '0 10px 30px rgba(72, 103, 48, 0.05)';
    } else {
      header.style.padding = '1.5rem 0';
      header.style.boxShadow = 'none';
    }
  });
};

// Run on mount
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  handleHeaderScroll();
});

// Simple Form Submission (Mock)
const contactForm = document.querySelector('.soul-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Peace Sent...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      contactForm.reset();
      alert("Namaste! Thank you for reaching out. We will get back to you soon.");
    }, 2000);
  });
}
