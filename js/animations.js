// Animations for Lypivka Village website

document.addEventListener('DOMContentLoaded', function() {
  // Activate initial animations
  setTimeout(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      element.classList.add('active');
    });
  }, 300);
  
  // Scroll animations
  const animateOnScroll = function() {
    // Select elements to animate
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // If element is in viewport
      if (elementPosition < windowHeight * 0.9) {
        element.classList.add('active');
      }
    });
    
    // Animate on scroll for gallery and attractions with delay
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (itemPosition < windowHeight * 0.9) {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 100); // Staggered delay based on index
      }
    });
    
    // Attraction cards animation
    const attractionCards = document.querySelectorAll('.attraction-card');
    attractionCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardPosition < windowHeight * 0.9) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 150); // Staggered delay based on index
      }
    });
    
    // Event cards animation
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardPosition < windowHeight * 0.9) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, index * 150); // Staggered delay based on index
      }
    });
  };
  
  // Set initial states for animations
  function initAnimations() {
    // Gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Attraction cards
    const attractionCards = document.querySelectorAll('.attraction-card');
    attractionCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  }
  
  // Initialize animations
  initAnimations();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once on load to animate initial visible elements
  animateOnScroll();
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
  }
  
  // Smooth section transitions
  const navLinks = document.querySelectorAll('header nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        
        window.scrollTo({
          top: offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add CSS class to section elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Add specific animations based on section
        if (entry.target.id === 'about') {
          const aboutImage = entry.target.querySelector('.about-image');
          const aboutText = entry.target.querySelector('.about-text');
          
          if (aboutImage) {
            aboutImage.classList.add('slide-in-left');
            aboutImage.classList.add('active');
          }
          
          if (aboutText) {
            aboutText.classList.add('slide-in-right');
            aboutText.classList.add('active');
          }
        }
        
        // Stop observing after animation is applied
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
    
    // Add base animation class
    section.classList.add('animated-section');
  });
});
