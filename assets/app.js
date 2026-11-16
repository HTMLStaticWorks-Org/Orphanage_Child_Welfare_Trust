const header = document.getElementById('site-header');
const footer = document.getElementById('site-footer');

const currentPath = window.location.pathname.split('/').pop() || 'index.html';

// Navbar with Theme, RTL, then Sign In button (Issue 1)
const nav = `<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="Little Hearts Child Welfare Trust Home">
      <span class="brand-mark">♡</span>
      <span>Little Hearts<small>CHILD WELFARE TRUST</small></span>
    </a>
    <div class="nav-right-cluster">
      <nav class="main-nav" id="primary-nav">
        <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home1</a>
        <a href="home2.html" class="${currentPath === 'home2.html' ? 'active' : ''}">Home2</a>
        <a href="our-work.html" class="${currentPath === 'our-work.html' ? 'active' : ''}">Our Work</a>
        <a href="donate.html" class="${currentPath === 'donate.html' ? 'active' : ''}">Donate</a>
        <a href="gallery.html" class="${currentPath === 'gallery.html' ? 'active' : ''}">Gallery</a>
        <a href="products.html" class="${currentPath === 'products.html' ? 'active' : ''}">Products</a>
        <a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact</a>
      </nav>
      <div class="nav-tools">
        <button class="tool-btn theme-toggle" id="themeToggle" type="button" aria-label="Toggle dark/light theme" title="Toggle theme">◐</button>
        <button class="tool-btn" id="rtlToggle" type="button" title="Toggle right-to-left layout" aria-label="Toggle RTL">RTL</button>
        <a class="btn btn-primary nav-signin-btn" href="login.html">Sign In</a>
      </div>
      <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">☰</button>
    </div>
  </div>
</header>`;

// Footer with icons in Registered Office section (Issue 5)
const foot = `<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <a class="brand footer-brand" href="index.html">
        <span class="brand-mark">♡</span>
        <span>Little Hearts<small>CHILD WELFARE TRUST</small></span>
      </a>
      <p>Protecting childhood, nurturing potential, and building brighter, dignified futures for orphans and vulnerable children.</p>
      <div class="social-row">
        <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener">f</a>
        <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener">◎</a>
        <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noopener">▶</a>
        <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener">in</a>
      </div>
    </div>
    <div>
      <h4>Explore</h4>
      <a href="our-work.html">Our Work</a>
      <a href="donate.html">Donate</a>
      <a href="gallery.html">Gallery</a>
      <a href="products.html">Products</a>
      <a href="contact.html">Contact</a>
    </div>
    <div>
      <h4>Get Involved</h4>
      <a href="contact.html#volunteer">Volunteer</a>
      <a href="donate.html">Sponsor a Child</a>
      <a href="products.html">Support Crafts</a>
      <a href="login.html">Supporter Sign In</a>
      <a href="signup.html">Create Account</a>
    </div>
    <div class="footer-contact-col">
      <h4>Registered Office</h4>
      <p class="footer-icon-line">
        <svg class="footer-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
        <span>Plot 42, Child Care Haven Road, Anna Nagar, Chennai, Tamil Nadu, 600040, India</span>
      </p>
      <p class="footer-icon-line">
        <svg class="footer-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
        <span>hello@littleheartstrust.org</span>
      </p>
      <p class="footer-icon-line">
        <svg class="footer-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>+91 (044) 2621 4455 / +91 98400 12345</span>
      </p>
      <p class="footer-badge">
        <svg class="badge-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
        <span>Reg: 12A &amp; 80G Certified Trust</span>
      </p>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>© <span id="year"></span> Little Hearts Child Welfare Trust. All rights reserved.</span>
    <span>Dedicated with unconditional love and protection for every child.</span>
  </div>
</footer>
<button id="backToTop" class="back-to-top" type="button" aria-label="Back to top" title="Back to top">↑</button>`;

if (header) header.innerHTML = nav;
if (footer) footer.innerHTML = foot;

const root = document.documentElement;
if (localStorage.getItem('lh-theme') === 'dark') root.dataset.theme = 'dark';
if (localStorage.getItem('lh-rtl') === 'true') root.dir = 'rtl';

document.getElementById('themeToggle')?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('lh-theme', root.dataset.theme);
});

document.getElementById('rtlToggle')?.addEventListener('click', () => {
  root.dir = root.dir === 'rtl' ? 'ltr' : 'rtl';
  localStorage.setItem('lh-rtl', root.dir === 'rtl');
});

document.querySelector('.menu-toggle')?.addEventListener('click', (e) => {
  const n = document.querySelector('.main-nav');
  n.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', n.classList.contains('open'));
});

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  const navWrap = document.querySelector('.nav-wrap');
  const mainNav = document.querySelector('.main-nav');
  if (mainNav && mainNav.classList.contains('open') && !navWrap.contains(e.target)) {
    mainNav.classList.remove('open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
  }
});

// Back to Top button behavior (Issue 6)
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    btt?.classList.add('visible');
  } else {
    btt?.classList.remove('visible');
  }
});
btt?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Password show/hide toggle with Eye Icon (Issue 17)
document.querySelectorAll('.password-toggle, .password-toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const input = targetId ? document.getElementById(targetId) : btn.closest('.password-wrap, .password-input-wrap')?.querySelector('input');
    if (!input) return;
    const eyeOpen = btn.querySelector('.eye-open');
    const eyeClosed = btn.querySelector('.eye-closed');
    if (input.type === 'password') {
      input.type = 'text';
      btn.setAttribute('aria-label', 'Hide password');
      if (eyeOpen) eyeOpen.style.display = 'none';
      if (eyeClosed) eyeClosed.style.display = 'block';
    } else {
      input.type = 'password';
      btn.setAttribute('aria-label', 'Show password');
      if (eyeOpen) eyeOpen.style.display = 'block';
      if (eyeClosed) eyeClosed.style.display = 'none';
    }
  });
});

// Interactive FAQ Accordion (Issue 16)
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasOpen) item.classList.add('active');
  });
});

document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      if (form.id === 'authForm') {
        const pass = form.querySelector('input[name="password"]')?.value;
        const confirm = form.querySelector('input[name="confirm_password"]')?.value;
        if (confirm !== undefined && pass !== confirm) {
          status.textContent = 'Passwords do not match. Please verify.';
          status.style.color = '#e11d48';
          return;
        }
        status.textContent = 'Account authenticated successfully. Welcome to Little Hearts Trust!';
        status.style.color = 'var(--primary)';
      } else if (form.id === 'orderModalForm') {
        status.textContent = 'Thank you for your order inquiry! Our vocational coordinator will contact you shortly.';
        status.style.color = 'var(--primary)';
      } else {
        status.textContent = 'Thank you! Your submission has been received. Our team will get back to you within 24 hours.';
        status.style.color = 'var(--primary)';
      }
    }
    form.reset();
  });
});
