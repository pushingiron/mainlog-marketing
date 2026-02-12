/* ============================================================
   Aircraft Logs Marketing Site — JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky nav scroll effect ---
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // --- Mobile menu toggle ---
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  // --- Scroll reveal animation ---
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- AI chat typing animation ---
  const typingEl = document.querySelector('.ai-typing');
  if (typingEl) {
    const messages = [
      'Show the last oil change for N9069P',
      'When is the next annual due?',
      'Find maintenance about fuel pump',
      'Add engine oil filter to N12345'
    ];
    let msgIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let pauseTimer = null;

    function typeLoop() {
      const current = messages[msgIndex];
      if (!deleting) {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          pauseTimer = setTimeout(typeLoop, 2200);
          return;
        }
        setTimeout(typeLoop, 55);
      } else {
        typingEl.textContent = current.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          charIndex = 0;
          msgIndex = (msgIndex + 1) % messages.length;
          setTimeout(typeLoop, 400);
          return;
        }
        setTimeout(typeLoop, 30);
      }
    }
    setTimeout(typeLoop, 1000);
  }

});
