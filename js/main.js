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
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.9)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
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
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Будь ласка, заповніть всі поля форми');
        return;
      }
      
      // Here you would normally send the form data to a server
      // Since this is a simple demo, we'll just show a success message
      alert(`Дякуємо за повідомлення, ${name}! Ми зв'яжемося з вами найближчим часом.`);
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // // Gallery lightbox (simple version)
  // const galleryItems = document.querySelectorAll('.gallery-item img');
  
  // galleryItems.forEach(item => {
  //   item.addEventListener('click', function() {
  //     const lightbox = document.createElement('div');
  //     lightbox.classList.add('lightbox');
      
  //     const imgClone = this.cloneNode();
  //     imgClone.classList.add('lightbox-img');
      
  //     const closeBtn = document.createElement('span');
  //     closeBtn.classList.add('lightbox-close');
  //     closeBtn.textContent = '×';
      
  //     lightbox.appendChild(imgClone);
  //     lightbox.appendChild(closeBtn);
  //     document.body.appendChild(lightbox);
      
  //     setTimeout(() => {
  //       lightbox.classList.add('active');
  //     }, 10);
      
  //     closeBtn.addEventListener('click', function() {
  //       lightbox.classList.remove('active');
  //       setTimeout(() => {
  //         document.body.removeChild(lightbox);
  //       }, 300);
  //     });
  //   });
  // });
});
