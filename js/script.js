document.addEventListener("DOMContentLoaded", () => {
  // Navigation menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Video overlay functionality
  const items = document.querySelectorAll('.project-item');
  const overlay = document.getElementById('project-overlay');
  const overlayVideo = document.getElementById('overlay-video');
  const videoSource = document.getElementById('video-source'); // Reference to the <source> tag

  let hoverTimeout;

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const videoSrc = item.getAttribute('data-video');
        if (videoSource.src !== videoSrc) { // Prevent unnecessary reloads
            videoSource.src = videoSrc;
            overlayVideo.load(); // Load only if the source has changed
        }
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        overlayVideo.play().catch(error => console.error("Playback error:", error)); // Catch potential errors
    });

    item.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            overlayVideo.pause();
            overlayVideo.currentTime = 0;
        }, 500);
    });
});


  // Hide overlay on scroll or click outside
  const hideOverlay = () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.visibility = 'hidden';
      overlayVideo.pause();
      overlayVideo.currentTime = 0;
    }, 500);
  };

  window.addEventListener('scroll', hideOverlay);

  window.addEventListener('click', (e) => {
    if (!overlay.contains(e.target) && !overlayVideo.contains(e.target)) {
      hideOverlay();
    }
  });
});
