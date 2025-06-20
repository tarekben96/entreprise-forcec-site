// ================================
// Tabs Saison (Hiver/Été)
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Saison tabs
    const winterTab = document.querySelector('label[for="winter"]');
    const summerTab = document.querySelector('label[for="summer"]');
    const winterServices = document.getElementById('winterServices');
    const summerServices = document.getElementById('summerServices');
    document.getElementById('winter').addEventListener('change', function() {
        winterServices.classList.add('active');
        summerServices.classList.remove('active');
    });
    document.getElementById('summer').addEventListener('change', function() {
        summerServices.classList.add('active');
        winterServices.classList.remove('active');
    });

    // Menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Skip to main content accessibility
    const skipLink = document.querySelector('.skip-link');
    if(skipLink){
        skipLink.addEventListener('click', function(){
            document.getElementById('maincontent').focus();
        });
    }

    // FAQ Toggle
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // ================================
    // Tabs Galerie (Tous/Hiver/Été)
    // ================================
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const winterImgs = document.querySelectorAll('.winter-img');
    const summerImgs = document.querySelectorAll('.summer-img');
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            galleryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            if (this.dataset.tab === 'all') {
                winterImgs.forEach(i => i.style.display = '');
                summerImgs.forEach(i => i.style.display = '');
            } else if (this.dataset.tab === 'winter') {
                winterImgs.forEach(i => i.style.display = '');
                summerImgs.forEach(i => i.style.display = 'none');
            } else if (this.dataset.tab === 'summer') {
                winterImgs.forEach(i => i.style.display = 'none');
                summerImgs.forEach(i => i.style.display = '');
            }
        });
    });

    // ================================
    // Fenêtre témoignage
    // ================================
    const addTestimonialBtn = document.getElementById('addTestimonialBtn');
    const testimonialModal = document.getElementById('testimonialModal');
    const closeTestimonialModal = document.getElementById('closeTestimonialModal');
    if (addTestimonialBtn && testimonialModal) {
        addTestimonialBtn.addEventListener('click', () => {
            testimonialModal.classList.remove('hidden');
        });
        closeTestimonialModal.addEventListener('click', () => {
            testimonialModal.classList.add('hidden');
        });
    }

    // Notation étoiles pour témoignages
    const ratingStars = document.querySelectorAll('.rating-star');
    const testimonialRating = document.getElementById('testimonialRating');
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(star.getAttribute('data-rating'));
            testimonialRating.value = rating;
            ratingStars.forEach(s => {
                s.classList.toggle('text-yellow-400', parseInt(s.getAttribute('data-rating')) <= rating);
                s.classList.toggle('text-gray-400', parseInt(s.getAttribute('data-rating')) > rating);
            });
        });
    });

    // Progress Bar
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const scrollTotal = document.body.scrollHeight - window.innerHeight;
        const scroll = (window.scrollY / scrollTotal) * 100;
        progressBar.style.width = scroll + '%';
    });

    // ================================
    // Formulaire de contact (EmailJS)
    // ================================
    const contactForm = document.querySelector('section#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Renseignez vos propres identifiants EmailJS ici
            const serviceID = 'service_9uax7pi';
            const templateID = 'template_x4u5x8g';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    if (!document.getElementById('contact-success')) {
                        const successMsg = document.createElement('div');
                        successMsg.id = 'contact-success';
                        successMsg.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center mt-8';
                        successMsg.textContent = 'Votre message a bien été envoyé ! Nous vous répondrons prochainement.';
                        contactForm.parentNode.insertBefore(successMsg, contactForm.nextSibling);
                        setTimeout(() => { successMsg.remove(); }, 5000);
                    }
                    contactForm.reset();
                }, (error) => {
                    alert('Une erreur s\'est produite lors de l\'envoi du message ! Veuillez réessayer.');
                });
        });
    }

    // ================================
    // Back to Top Button
    // ================================
    window.addEventListener("scroll", function() {
        let btn = document.getElementById("backToTop");
        if (!btn) return;
        if (window.scrollY > 300) {
            btn.classList.remove("hidden");
            btn.classList.add("show");
        } else {
            btn.classList.add("hidden");
            btn.classList.remove("show");
        }
    });
    let backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        backToTopBtn.onclick = () => window.scrollTo({top:0,behavior:"smooth"});
    }

    // ================================
    // Newsletter Form Submission (dummy - you can connect to Mailchimp/EmailJS)
    // ================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!document.getElementById('newsletter-success')) {
                const msg = document.createElement('div');
                msg.id = 'newsletter-success';
                msg.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4 text-center';
                msg.textContent = "Merci pour votre inscription à l'infolettre !";
                newsletterForm.parentNode.appendChild(msg);
                setTimeout(() => { msg.remove(); }, 4000);
            }
            newsletterForm.reset();
        });
    }

    // ================================
    // Images Lazy Loading (if not native, fallback)
    // ================================
    if ('loading' in HTMLImageElement.prototype === false) {
        // Polyfill: load images as they enter viewport (optional)
        const images = document.querySelectorAll('img[loading="lazy"]');
        const config = {
            rootMargin: '200px 0px',
            threshold: 0.01
        };
        let observer;
        if ('IntersectionObserver' in window) {
            observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        obs.unobserve(img);
                    }
                });
            }, config);
            images.forEach(img => {
                observer.observe(img);
            });
        } else {
            // fallback: load all images
            images.forEach(img => { img.src = img.dataset.src; });
        }
    }

    // ================================
    // Accessibility: focus outline on keyboard only
    // ================================
    function handleFirstTab(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    }
    function handleMouseDownOnce() {
        document.body.classList.remove('user-is-tabbing');
        window.removeEventListener('mousedown', handleMouseDownOnce);
        window.addEventListener('keydown', handleFirstTab);
    }
    window.addEventListener('keydown', handleFirstTab);

    // ================================
    // Dark Mode Toggle (simple)
    // ================================
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        // Set initial icon state
        if(document.body.classList.contains('dark')) {
            darkToggle.querySelector('.fa-moon').classList.add('hidden');
            darkToggle.querySelector('.fa-sun').classList.remove('hidden');
        }
        darkToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            // Toggle icons
            darkToggle.querySelector('.fa-moon').classList.toggle('hidden');
            darkToggle.querySelector('.fa-sun').classList.toggle('hidden');
            // Save mode in localStorage
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
        // On load, set dark if needed
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
            darkToggle.querySelector('.fa-moon').classList.add('hidden');
            darkToggle.querySelector('.fa-sun').classList.remove('hidden');
        }
    }

    // ================================
    // Add loading="lazy" to images if missing (SEO/perf)
    // ================================
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    });

    // Accessibility: focus main content when skip-link is clicked
    const maincontent = document.getElementById('maincontent');
    if(maincontent){
        maincontent.setAttribute('tabindex', '-1');
    }
});
