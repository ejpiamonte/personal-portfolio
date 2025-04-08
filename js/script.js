document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  const items = document.querySelectorAll('.project-item');
  const overlay = document.getElementById('project-overlay');
  const overlayImg = document.getElementById('overlay-img');

  menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
  });

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imgSrc = item.getAttribute('data-image');
      overlayImg.src = imgSrc;
      overlay.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
      overlay.style.display = 'none';
    });
  });

  // Optional: Hide overlay on scroll or click outside
  window.addEventListener('scroll', () => overlay.style.display = 'none');
  window.addEventListener('click', (e) => {
    if (!overlay.contains(e.target)) {
      overlay.style.display = 'none';
    }
  });
});
