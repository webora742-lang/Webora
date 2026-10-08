tailwind.config = {
    theme: {
        extend: {
            colors: {
                darkslate: '#0b0f19',
                carddark: '#111827',
                accentblue: '#3b82f6',
                accentpurple: '#8b5cf6'
            }
        }
    }
};

// Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Navbar blur and shadow on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-xl', 'border-gray-800');
            } else {
                navbar.classList.remove('shadow-xl');
            }
        });

        // Interactive Contact Form Handling with Success Feedback
        const contactForm = document.getElementById('contact-form');
        const successBanner = document.getElementById('success-banner');
        const submitBtn = document.getElementById('submit-btn');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...`;

            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>`;

                // Show success banner
                successBanner.classList.remove('hidden');
                
                // Hide banner after 5 seconds
                setTimeout(() => {
                    successBanner.classList.add('hidden');
                }, 5000);
            }, 1200);
        });
