const header = document.getElementById('site-header');
const footer = document.getElementById('site-footer');

const currentPath = window.location.pathname.split('/').pop() || 'index.html';

const nav = `<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="Little Hearts Child Welfare Trust Home">
      <span class="brand-mark">♡</span>
      <span>Little Hearts<small>CHILD WELFARE TRUST</small></span>
    </a>
    <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">☰</button>
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
      <a class="btn btn-primary nav-signin-btn" href="login.html">Sign In</a>
      <button class="tool-btn" id="rtlToggle" type="button" title="Toggle right-to-left layout" aria-label="Toggle RTL">RTL</button>
      <button class="tool-btn theme-toggle" id="themeToggle" type="button" aria-label="Toggle dark/light theme" title="Toggle theme">◐</button>
    </div>
  </div>
</header>`;

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
    <div>
      <h4>Registered Office</h4>
      <p>Plot 42, Child Care Haven Road, Anna Nagar, Chennai, Tamil Nadu, 600040, India</p>
      <p>hello@littleheartstrust.org</p>
      <p>+91 (044) 2621 4455 / +91 98400 12345</p>
      <p class="footer-badge">Reg: 12A &amp; 80G Certified Trust</p>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>© <span id="year"></span> Little Hearts Child Welfare Trust. All rights reserved.</span>
    <span>Dedicated with unconditional love and protection for every child.</span>
  </div>
</footer>`;

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

document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      if (form.id === 'authForm') {
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
