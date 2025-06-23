// Main functionality for Lypivka Village website

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Toggle the hamburger menu animation
      const bars = mobileMenu.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.toggle('change'));
    });
  }
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
      
      const bars = mobileMenu.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.remove('change'));
    });
  });
  
  
  // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTop');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  

 
});
