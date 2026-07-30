/* ═══════════════════════════════════════════════════
   NELSON AI LANDING PAGE — script.js
═══════════════════════════════════════════════════ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

/* ── Mobile menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.textContent = '☰';
}

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObserver.observe(el));

/* ── Hide video placeholder once video file is found ── */
document.querySelectorAll('.video-wrap video').forEach(video => {
  const placeholder = video.nextElementSibling;
  if (!placeholder) return;

  // If video loads metadata, the file exists — hide placeholder
  video.addEventListener('loadedmetadata', () => {
    if (placeholder) placeholder.style.display = 'none';
  });

  // Also try to detect if src loads
  video.addEventListener('canplay', () => {
    if (placeholder) placeholder.style.display = 'none';
  });
});

/* ── Hide song file-path hint once mp3 is found ── */
document.querySelectorAll('.song-player audio').forEach(audio => {
  const hint = audio.parentElement.querySelector('.audio-placeholder');
  if (!hint) return;

  audio.addEventListener('loadedmetadata', () => hint.classList.add('hidden'));
  audio.addEventListener('canplay', () => hint.classList.add('hidden'));
});

/* ── Smooth anchor scroll (fixes offset for fixed navbar) ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 78;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    closeMobile();
  });
});

/* ── Gallery lightbox ── */
const galleryItems = document.querySelectorAll('.gallery-item');

// Build overlay once
const overlay = document.createElement('div');
overlay.style.cssText = `
  display:none; position:fixed; inset:0; z-index:999;
  background:rgba(0,0,0,.92); backdrop-filter:blur(12px);
  align-items:center; justify-content:center; cursor:zoom-out;
`;
const lbImg = document.createElement('img');
lbImg.style.cssText = `
  max-width:90vw; max-height:88vh;
  border-radius:14px; box-shadow:0 30px 80px rgba(0,0,0,.7);
  object-fit:contain;
`;
const lbClose = document.createElement('button');
lbClose.textContent = '✕';
lbClose.style.cssText = `
  position:absolute; top:20px; right:24px;
  background:none; border:none; color:#fff;
  font-size:1.8rem; cursor:pointer; line-height:1;
`;
overlay.appendChild(lbImg);
overlay.appendChild(lbClose);
document.body.appendChild(overlay);

function openLightbox(src, alt) {
  lbImg.src = src;
  lbImg.alt = alt || '';
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

galleryItems.forEach(item => {
  const img = item.querySelector('img');
  if (!img) return;
  item.addEventListener('click', () => {
    if (img.complete && img.naturalWidth > 0) {
      openLightbox(img.src, img.alt);
    }
  });
});
overlay.addEventListener('click', closeLightbox);
lbClose.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
