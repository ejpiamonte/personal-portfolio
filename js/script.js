document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  const items = document.querySelectorAll('.project-item');
  const overlay = document.getElementById('project-overlay');
  const videoCache = {}; // Store preloaded videos
  let activeVideoSrc = null; // Store the currently active video source

  const themeToggle = document.getElementById('theme-toggle-link');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  const icon = document.getElementById('messageIcon');
  const popup = document.getElementById('contactPopup');

  let isPopupVisible = false;

icon.addEventListener('click', () => {
  const isMobile = window.innerWidth <= 768; // adjust if needed

  if (isMobile) {
    isPopupVisible = !isPopupVisible;

    if (isPopupVisible) {
      popup.style.display = 'block';
      requestAnimationFrame(() => popup.classList.add('show'));
    } else {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.style.display = 'none';
      }, 300); // wait for animation
    }
  }
});

// Optional: click outside to close (only on mobile)
document.addEventListener('click', function (e) {
  const isMobile = window.innerWidth <= 768;

  if (
    isMobile &&
    isPopupVisible &&
    !icon.contains(e.target) &&
    !popup.contains(e.target)
  ) {
    popup.classList.remove('show');
    isPopupVisible = false;
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300);
  }
});

  icon.addEventListener('mouseenter', () => {
    popup.style.display = 'block';
  });

  icon.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });

  popup.addEventListener('mouseenter', () => {
    popup.style.display = 'block';
  });

  popup.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Swap icon
    if (body.classList.contains('dark-mode')) {
      themeIcon.src = "assets/moon.png"; // Replace with your sun icon image path
      themeIcon.alt = "Switch to Light Theme";
    } else {
      themeIcon.src = "assets/sun.png"; // Replace with your moon icon image path
      themeIcon.alt = "Switch to Dark Theme";
    }
  });

  // 🔵 **Preload all videos upfront**
  items.forEach(item => {
    const videoSrc = item.getAttribute('data-video');
    const preloadedVideo = document.createElement("video");
    preloadedVideo.src = videoSrc;
    preloadedVideo.preload = "auto";
    preloadedVideo.muted = true;
    preloadedVideo.loop = true;
    preloadedVideo.style.maxWidth = "90vw"; 
    preloadedVideo.style.maxHeight = "80vh";
    preloadedVideo.style.borderRadius = "25px";
    preloadedVideo.style.boxShadow = "0 0 30px rgba(0, 0, 0, 0.5)";
    videoCache[videoSrc] = preloadedVideo;
  });

  items.forEach(item => {
    let hoverTimeout;
    item.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout); // Reset any previous timeout
        activeVideoSrc = item.getAttribute('data-video');

        if (videoCache[activeVideoSrc]) {
            overlay.innerHTML = ''; 
            overlay.appendChild(videoCache[activeVideoSrc]); 
            videoCache[activeVideoSrc].play();

            // ✅ Remove dynamic sizing so it stays centered
            overlay.style.width = ""; 
            overlay.style.height = "";

            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
            overlay.style.display = "flex"; 
            overlay.style.borderRadius = "25px";
        }
    });

    item.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            if (videoCache[activeVideoSrc]) {
                videoCache[activeVideoSrc].pause();
                videoCache[activeVideoSrc].currentTime = 0;
            }
        }, 1);
    });
});

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// ✅ Track mouse position properly
document.addEventListener('pointermove', (event) => {
  requestAnimationFrame(() => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
});

window.addEventListener('scroll', () => {
    // Find the element under the current cursor position
    const hoveredItem = document.elementFromPoint(mouseX, mouseY);

    if (hoveredItem && hoveredItem.classList.contains('project-item')) {
        hoveredItem.dispatchEvent(new Event('mouseenter')); // Trigger hover effect manually
    }
});

  console.log("Video Cache Loaded:", videoCache);
});
