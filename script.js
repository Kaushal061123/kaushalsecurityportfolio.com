// Professional Loading Screen
class LoadingScreen {
  constructor() {
    this.loadingScreen = document.getElementById("loadingScreen");
    this.progressBar = document.querySelector(".progress-bar");
    this.loadingMessage = document.querySelector(".loading-message");
    this.messages = [
      "Initializing Security Portfolio...",
      "Loading Security Frameworks...",
      "Preparing Threat Intelligence...",
      "Finalizing Security Dashboard...",
    ];
    this.currentMessageIndex = 0;
    this.init();
  }

  init() {
    if (!this.loadingScreen) return;

    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";

    // Start message rotation
    this.rotateMessages();

    // Hide loading screen after content is loaded
    window.addEventListener("load", () => {
      setTimeout(() => this.hideLoadingScreen(), 1000);
    });

    // Fallback: hide after 5 seconds
    setTimeout(() => this.hideLoadingScreen(), 5000);
  }

  rotateMessages() {
    if (!this.loadingMessage) return;

    const interval = setInterval(() => {
      this.currentMessageIndex =
        (this.currentMessageIndex + 1) % this.messages.length;
      this.loadingMessage.textContent = this.messages[this.currentMessageIndex];

      if (this.currentMessageIndex === this.messages.length - 1) {
        clearInterval(interval);
      }
    }, 800);
  }

  hideLoadingScreen() {
    if (!this.loadingScreen) return;

    this.loadingScreen.classList.add("fade-out");
    document.body.style.overflow = "";

    setTimeout(() => {
      if (this.loadingScreen.parentNode) {
        this.loadingScreen.parentNode.removeChild(this.loadingScreen);
      }
    }, 500);
  }
}

// Initialize loading screen
new LoadingScreen();

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --- Mobile Menu ---
const hamburgerSpans = hamburger.querySelectorAll("span");

function toggleHamburgerAnimation(isActive) {
  hamburgerSpans[0].style.transform = isActive
    ? "rotate(45deg) translate(5px, 5px)"
    : "rotate(0) translate(0, 0)";
  hamburgerSpans[1].style.opacity = isActive ? "0" : "1";
  hamburgerSpans[2].style.transform = isActive
    ? "rotate(-45deg) translate(7px, -6px)"
    : "rotate(0) translate(0, 0)";
}

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleHamburgerAnimation(navLinks.classList.contains("active"));
});

// Close mobile menu when clicking a link
navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    toggleHamburgerAnimation(false);
  });
});

// Smooth Scroll with Offset for Fixed Navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Add animation class to elements
const animatedElements = document.querySelectorAll(
  ".about-content, .timeline-item, .skill-category, .project-card, .cert-card, .contact-item"
);

animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  const activeLink = document.querySelector(".nav-links a.active");
  if (activeLink) activeLink.classList.remove("active");

  const newActiveLink = document.querySelector(
    `.nav-links a[href="#${current}"]`
  );
  if (newActiveLink) {
    newActiveLink.classList.add("active");
  }
});

// Add active class style dynamically
const style = document.createElement("style");
style.textContent = `
    .nav-links a.active {
        color: var(--primary-color);
    }
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Typing Effect for Hero Title (Optional Enhancement)
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  heroTitle.style.opacity = "1";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

// Stats Counter Animation
const stats = document.querySelectorAll(".stat h3");
const animateCounter = (element, target) => {
  const numericTarget = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/\d/g, "");
  const duration = 2000;
  const increment = numericTarget / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < numericTarget) {
      element.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target.textContent;
        animateCounter(entry.target, target);
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

stats.forEach((stat) => {
  statsObserver.observe(stat);
});

// Lazy load optimization for images (if you add images later)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        imageObserver.unobserve(img);
      }
    });
  });

  const images = document.querySelectorAll("img[data-src]");
  images.forEach((img) => imageObserver.observe(img));
}

// Add a "Back to Top" button
const backToTopButton = document.createElement("button");
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = "back-to-top";
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
    font-size: 1.2rem;
`;

document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.opacity = "1";
    backToTopButton.style.visibility = "visible";
  } else {
    backToTopButton.style.opacity = "0";
    backToTopButton.style.visibility = "hidden";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

backToTopButton.addEventListener("mouseenter", () => {
  backToTopButton.style.transform = "scale(1.1)";
});

backToTopButton.addEventListener("mouseleave", () => {
  backToTopButton.style.transform = "scale(1)";
});

// Console message for developers
console.log(
  "%c👋 Hello, Developer!",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cThis portfolio was built with ❤️",
  "color: #6b7280; font-size: 14px;"
);
console.log(
  "%cInterested in the code? Check out the GitHub repo!",
  "color: #6b7280; font-size: 14px;"
);

// SOC Metrics Counter Animation
const metricValues = document.querySelectorAll(".metric-value");
const animateMetric = (element) => {
  const target = parseInt(element.getAttribute("data-target"));
  const hasPercent = element.textContent.includes("%");
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current) + (hasPercent ? "%" : "");
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + (hasPercent ? "%" : "");
    }
  };

  updateCounter();
};

const metricsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateMetric(entry.target);
        metricsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

metricValues.forEach((metric) => {
  metricsObserver.observe(metric);
});

// Framework Badges Animation
const frameworkBadges = document.querySelectorAll(".framework-badge");
const frameworkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const badges =
          entry.target.parentElement.querySelectorAll(".framework-badge");
        badges.forEach((badge, index) => {
          badge.style.opacity = "0";
          badge.style.transform = "translateY(20px)";
          badge.style.transition = "opacity 0.5s ease, transform 0.5s ease";

          setTimeout(() => {
            badge.style.opacity = "1";
            badge.style.transform = "translateY(0)";
          }, index * 100);
        });
        frameworkObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const frameworkGrid = document.querySelector(".framework-grid");
if (frameworkGrid) {
  frameworkObserver.observe(frameworkGrid);
}

// Matrix Rain Effect for Hero Section
function createMatrixEffect() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.opacity = "0.1";
  canvas.style.pointerEvents = "none";
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext("2d");
  canvas.width = hero.offsetWidth;
  canvas.height = hero.offsetHeight;

  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);
}

// Initialize matrix effect on desktop
if (window.innerWidth > 768) {
  createMatrixEffect();
}

// Enhanced console message
console.log(
  "%c🔒 Security Operations Analyst",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%c👋 Welcome, Security Professional!",
  "color: #2563eb; font-size: 16px; font-weight: bold;"
);
console.log(
  "%cThis portfolio showcases enterprise security expertise and SOC operations",
  "color: #6b7280; font-size: 14px;"
);
console.log(
  "%c🛡️ Threat Detection | 🔍 Incident Response | 🎯 SOC Operations",
  "color: #16a34a; font-size: 12px;"
);

// Enhanced Parallax Effect for Hero Section
const heroContent = document.querySelector(".hero-content");
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
      }
      ticking = false;
    });
    ticking = true;
  }
});

// Enhanced Card Entrance Animations with Stagger Effect
const observeCardsWithDelay = () => {
  const cards = document.querySelectorAll(
    ".project-card, .cert-card, .skill-category"
  );
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
};

// Call on page load
window.addEventListener("DOMContentLoaded", observeCardsWithDelay);

// Add ripple effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Enhanced smooth reveal for elements
const revealOnScroll = () => {
  const reveals = document.querySelectorAll(
    ".timeline-item, .project-card, .stat, .cert-card"
  );

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Icon hover animations
document
  .querySelectorAll(".project-icon, .contact-icon i, .cert-card i")
  .forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.animation = "float 1s ease-in-out infinite";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.animation = "";
    });
  });

// Professional Contact Form Validation and Handling
class ContactForm {
  constructor() {
    this.form = document.getElementById("contactForm");
    this.submitBtn = this.form?.querySelector(".submit-btn");
    this.btnText = this.submitBtn?.querySelector(".btn-text");
    this.btnLoading = this.submitBtn?.querySelector(".btn-loading");

    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));

    // Real-time validation
    const inputs = this.form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input));
      input.addEventListener("input", () => this.clearError(input));
    });
  }

  validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = "";

    switch (fieldName) {
      case "name":
        if (!value) {
          errorMessage = "Full name is required";
          isValid = false;
        } else if (value.length < 2) {
          errorMessage = "Name must be at least 2 characters";
          isValid = false;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          errorMessage = "Email address is required";
          isValid = false;
        } else if (!emailRegex.test(value)) {
          errorMessage = "Please enter a valid email address";
          isValid = false;
        }
        break;

      case "subject":
        if (!value) {
          errorMessage = "Please select a subject";
          isValid = false;
        }
        break;

      case "message":
        if (!value) {
          errorMessage = "Message is required";
          isValid = false;
        } else if (value.length < 10) {
          errorMessage = "Message must be at least 10 characters";
          isValid = false;
        }
        break;

      case "privacy":
        if (!field.checked) {
          errorMessage = "You must agree to the privacy policy";
          isValid = false;
        }
        break;
    }

    this.showError(field, errorMessage, !isValid);
    return isValid;
  }

  showError(field, message, hasError) {
    const formGroup = field.closest(".form-group");
    const errorElement = formGroup.querySelector(".error-message");

    if (hasError) {
      formGroup.classList.add("error");
      errorElement.textContent = message;
      errorElement.classList.add("show");
    } else {
      formGroup.classList.remove("error");
      errorElement.classList.remove("show");
    }
  }

  clearError(field) {
    const formGroup = field.closest(".form-group");
    formGroup.classList.remove("error");
    formGroup.querySelector(".error-message").classList.remove("show");
  }

  validateForm() {
    const requiredFields = this.form.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      this.showNotification("Please correct the errors above", "error");
      return;
    }

    this.setLoading(true);

    try {
      // Simulate form submission (replace with actual endpoint)
      await this.simulateSubmission();

      this.showNotification(
        "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
        "success"
      );
      this.form.reset();
    } catch (error) {
      this.showNotification(
        "Sorry, there was an error sending your message. Please try again or contact me directly.",
        "error"
      );
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(loading) {
    if (loading) {
      this.submitBtn.disabled = true;
      this.btnText.style.display = "none";
      this.btnLoading.style.display = "inline-flex";
    } else {
      this.submitBtn.disabled = false;
      this.btnText.style.display = "inline";
      this.btnLoading.style.display = "none";
    }
  }

  async simulateSubmission() {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas ${
          type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
        }"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      max-width: 400px;
      padding: 1rem;
      background: ${type === "success" ? "#10b981" : "#ef4444"};
      color: white;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
      this.removeNotification(notification);
    }, 5000);

    // Close button functionality
    notification
      .querySelector(".notification-close")
      .addEventListener("click", () => {
        this.removeNotification(notification);
      });
  }

  removeNotification(notification) {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }
}

// Initialize contact form
document.addEventListener("DOMContentLoaded", () => {
  new ContactForm();
});

// Dark/Light Theme Toggle
class ThemeToggle {
  constructor() {
    this.currentTheme = localStorage.getItem("theme") || "light";
    this.init();
  }

  init() {
    this.createToggleButton();
    this.applyTheme(this.currentTheme);
  }

  createToggleButton() {
    const toggleButton = document.createElement("button");
    toggleButton.className = "theme-toggle";
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    toggleButton.setAttribute("aria-label", "Toggle dark mode");

    toggleButton.style.cssText = `
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      background: var(--bg-card);
      border: 2px solid var(--border-color);
      border-radius: 50%;
      cursor: pointer;
      z-index: 999;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: var(--text-primary);
    `;

    toggleButton.addEventListener("click", () => this.toggleTheme());
    document.body.appendChild(toggleButton);

    this.toggleButton = toggleButton;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    this.applyTheme(this.currentTheme);
    localStorage.setItem("theme", this.currentTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = this.toggleButton?.querySelector("i");
    if (icon) {
      icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
    }
  }
}

// Initialize theme toggle
document.addEventListener("DOMContentLoaded", () => {
  new ThemeToggle();
});
