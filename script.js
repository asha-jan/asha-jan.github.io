/* =========================================================
   ASHRITHA JANYAVULA — Portfolio Script
   Handles: sticky nav, mobile menu, scroll reveal
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- STICKY NAV SHADOW ON SCROLL ----- */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ----- MOBILE NAV TOGGLE ----- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  /* ----- SCROLL REVEAL ANIMATION ----- */
  // Add .reveal class to elements we want to animate in
  const revealTargets = [
    '.timeline-card',
    '.info-card',
    '.project-card',
    '.skill-group',
    '.contact-card',
    '.about-bio p',
    '.section-heading',
  ];

  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      // Stagger children slightly
      el.style.transitionDelay = `${i * 0.06}s`;
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  /* ----- ACTIVE NAV LINK HIGHLIGHT ON SCROLL ----- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === `#${id}`) {
            a.style.color = 'var(--teal)';
          }
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -50% 0px'
  });

  sections.forEach(sec => sectionObserver.observe(sec));

});
