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
  
