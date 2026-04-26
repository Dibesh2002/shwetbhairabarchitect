/* ============================================================
   SHWET BHAIRAB ARCHITECT & ASSOCIATION
   Enhanced JavaScript — Smooth animations & interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ── Page Loader ─────────────────────────────────────── */
    injectLoader();
    window.addEventListener('load', function () {
        setTimeout(() => {
            const loader = document.getElementById('page-loader');
            if (loader) loader.classList.add('hidden');
        }, 1200);
    });

    function injectLoader() {
        const logo = document.querySelector('.logo-img');
        const logoSrc = logo ? logo.getAttribute('src') : '';
        const loaderHTML = `
        <div id="page-loader" class="page-loader">
            <img src="${logoSrc}" alt="Loading" class="loader-logo">
            <div class="loader-bar"><div class="loader-bar-fill"></div></div>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    }

    /* ── Header Scroll Effect ────────────────────────────── */
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    /* ── Mobile Menu ─────────────────────────────────────── */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            // toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.menu-toggle')) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = menuToggle && menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    });

    /* ── Hero Slider ─────────────────────────────────────── */
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots   = document.querySelectorAll('.hero-dot');
    const heroPrev   = document.querySelector('.hero-prev');
    const heroNext   = document.querySelector('.hero-next');

    if (heroSlides.length > 0) {
        let currentHero = 0;
        let heroTimer = null;

        function showHeroSlide(n) {
            heroSlides[currentHero].classList.remove('active');
            heroDots[currentHero] && heroDots[currentHero].classList.remove('active');

            currentHero = (n + heroSlides.length) % heroSlides.length;

            heroSlides[currentHero].classList.add('active');
            heroDots[currentHero] && heroDots[currentHero].classList.add('active');
        }

        function startHeroAuto() {
            heroTimer = setInterval(() => showHeroSlide(currentHero + 1), 5000);
        }
        function resetHeroAuto() {
            clearInterval(heroTimer);
            startHeroAuto();
        }

        heroPrev && heroPrev.addEventListener('click', () => { showHeroSlide(currentHero - 1); resetHeroAuto(); });
        heroNext && heroNext.addEventListener('click', () => { showHeroSlide(currentHero + 1); resetHeroAuto(); });
        heroDots.forEach((dot, i) => dot.addEventListener('click', () => { showHeroSlide(i); resetHeroAuto(); }));
        startHeroAuto();
    }

    /* ── Testimonial Slider (home) ───────────────────────── */
    const testSlides = document.querySelectorAll('.testimonial-slide');
    const dots       = document.querySelectorAll('.dot');
    const prevBtn    = document.querySelector('.prev-testimonial');
    const nextBtn    = document.querySelector('.next-testimonial');

    if (testSlides.length > 0) {
        let cur = 0;

        function showSlide(n) {
            testSlides[cur].classList.remove('active');
            dots[cur] && dots[cur].classList.remove('active');
            cur = (n + testSlides.length) % testSlides.length;
            testSlides[cur].classList.add('active');
            dots[cur] && dots[cur].classList.add('active');
        }

        prevBtn && prevBtn.addEventListener('click', () => showSlide(cur - 1));
        nextBtn && nextBtn.addEventListener('click', () => showSlide(cur + 1));
        dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
        setInterval(() => showSlide(cur + 1), 5500);
    }

    /* ── Carousel (testimonials page) ───────────────────── */
    const carouselTrack  = document.querySelector('.carousel-track');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselPrev   = document.querySelector('.carousel-prev');
    const carouselNext   = document.querySelector('.carousel-next');
    const indicators     = document.querySelectorAll('.indicator');

    if (carouselTrack && carouselSlides.length > 0) {
        let curCar = 0;

        function showCarSlide(n) {
            curCar = (n + carouselSlides.length) % carouselSlides.length;
            carouselTrack.style.transform = `translateX(-${curCar * 100}%)`;
            indicators.forEach(ind => ind.classList.remove('active'));
            indicators[curCar] && indicators[curCar].classList.add('active');
        }

        carouselPrev && carouselPrev.addEventListener('click', () => showCarSlide(curCar - 1));
        carouselNext && carouselNext.addEventListener('click', () => showCarSlide(curCar + 1));
        indicators.forEach((ind, i) => ind.addEventListener('click', () => showCarSlide(i)));
        setInterval(() => showCarSlide(curCar + 1), 6000);
    }

    /* ── Project Filter ──────────────────────────────────── */
    const filterBtns   = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');
                galleryItems.forEach(item => {
                    const match = filter === 'all' || item.getAttribute('data-category') === filter;
                    item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                    if (match) {
                        item.style.display = 'block';
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        });
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.96)';
                        setTimeout(() => { item.style.display = 'none'; }, 350);
                    }
                });
            });
        });
    }

    /* ── Project Modal ───────────────────────────────────── */
    const projectDatabase = {
        'Cunnadevi Secondary School': {
            category: 'Residential',
            location: 'Nagarkot, Bhaktapur',
            year: '2071-2072',
            size: '2,500 sq.m',
            description: 'A detailed survey and assessment of the school were conducted. Existing infrastructure was documented, and needs were identified through stakeholder consultations. Site analysis and spatial planning were done to propose new classroom blocks, library, science lab, sanitation units, and improved open spaces. A conceptual layout was prepared focusing on safety, accessibility, and future expansion.',
            images: ['cunna.jpg','cunna2.jpg','cunna3.jpg','cunna4.jpg','cunna5.jpg']
        },
        'Water supply and sanitation Project': {
            category: 'Commercial',
            location: 'Kulau VDC Baitadi',
            year: '2071-2072',
            size: '11.609 km',
            description: 'Survey and detailed engineering design were completed for a 11.609 km water supply and sanitation project. The report includes source development, pipeline layout, reservoirs, tap stands, and sanitation units to ensure safe water and hygiene.',
            images: ['Baitadi.jpg','Baitadi.jpg','Baitadi.jpg','Baitadi.jpg','Baitadi.jpg']
        },
        'Physical Development Plan': {
            category: 'urban',
            location: 'Mane Bhajyang, Okhaldhunga',
            year: '2071-2072',
            size: '3,200 sq.m',
            description: 'A physical development plan was prepared for Mane Bhajyang under the integrated development framework. It includes land use zoning, road network planning, public service infrastructure, and environmental management. The plan aims to guide sustainable growth and improve living standards in the area.',
            images: ['okhaldhunga.jpg','okhaldhunga.jpg','okhaldhunga.jpg','okhaldhunga.jpg','okhaldhunga.jpg']
        },
        'Bhairab Secondary School': {
            category: 'Institutional',
            location: 'Bhaktapur',
            year: '2072-2073',
            size: '3,000 sq.m',
            description: 'Comprehensive architectural services were provided for Bhairab Secondary School including site analysis, master planning, structural design, and construction supervision. The design prioritizes natural light, ventilation, and a safe learning environment.',
            images: ['bhairab.jpg','bhairab2.jpg','bhairab3.jpg','bhairab4.jpg','bhairab5.jpg']
        }
    };

    const viewProjectBtns = document.querySelectorAll('.view-project');
    const projectModal    = document.getElementById('projectModal');
    const closeModal      = document.querySelector('.modal-close');

    if (projectModal) {
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const projectName = this.getAttribute('data-project');
                const project = projectDatabase[projectName];

                if (project) {
                    document.getElementById('modal-title').textContent       = projectName;
                    document.getElementById('modal-category').textContent    = project.category;
                    document.getElementById('modal-location').textContent    = project.location;
                    document.getElementById('modal-year').textContent        = project.year;
                    document.getElementById('modal-size').textContent        = project.size;
                    document.getElementById('modal-description').textContent = project.description;
                    document.getElementById('modal-main-image').setAttribute('src', project.images[0]);

                    const thumbGallery = document.querySelector('.thumbnail-gallery');
                    thumbGallery.innerHTML = '';
                    project.images.forEach((img, idx) => {
                        const div = document.createElement('div');
                        div.className = 'thumbnail' + (idx === 0 ? ' active' : '');
                        div.innerHTML = `<img src="${img}" alt="Project Image">`;
                        div.addEventListener('click', function () {
                            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                            this.classList.add('active');
                            document.getElementById('modal-main-image').setAttribute('src', img);
                        });
                        thumbGallery.appendChild(div);
                    });
                } else {
                    const imgSrc = this.closest('.project-overlay').previousElementSibling.querySelector('img')?.getAttribute('src') || '';
                    document.getElementById('modal-title').textContent    = projectName || 'Project Details';
                    document.getElementById('modal-category').textContent = 'Architecture';
                    document.getElementById('modal-location').textContent = 'Nepal';
                    document.getElementById('modal-year').textContent     = '2023';
                    document.getElementById('modal-size').textContent     = 'TBD';
                    document.getElementById('modal-description').textContent = 'Project details coming soon.';
                    document.getElementById('modal-main-image').setAttribute('src', imgSrc);

                    const thumbGallery = document.querySelector('.thumbnail-gallery');
                    thumbGallery.innerHTML = '';
                    const div = document.createElement('div');
                    div.className = 'thumbnail active';
                    div.innerHTML = `<img src="${imgSrc}" alt="Project Image">`;
                    thumbGallery.appendChild(div);
                }

                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeModal && closeModal.addEventListener('click', () => {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        projectModal.addEventListener('click', function (e) {
            if (e.target === projectModal) {
                projectModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                projectModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /* ── Accordion ───────────────────────────────────────── */
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const wasActive = item.classList.contains('active');
            // close all
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            // open clicked if it wasn't active
            if (!wasActive) item.classList.add('active');
        });
    });

    /* ── Contact Form ────────────────────────────────────── */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            })
            .then(res => {
                if (res.ok) {
                    contactForm.innerHTML = `
                        <div class="success-message">
                            <i class="fas fa-check-circle"></i>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                        </div>`;
                } else throw new Error('Submission failed');
            })
            .catch(() => {
                if (btn) { btn.textContent = 'Send Message'; btn.disabled = false; }
                const err = document.createElement('p');
                err.className = 'error-message';
                err.textContent = 'There was a problem. Please try again or email us directly.';
                contactForm.appendChild(err);
            });
        });
    }

    /* ── Scroll Animations ───────────────────────────────── */
    const animatedEls = document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right');

    function checkScroll() {
        const trigger = window.innerHeight * 0.88;
        animatedEls.forEach(el => {
            if (el.getBoundingClientRect().top < trigger) {
                el.classList.add('fade-in');
            }
        });
        checkStats();
    }

    /* ── Stats Counter ───────────────────────────────────── */
    function checkStats() {
        const statsSection = document.querySelector('.client-stats');
        if (!statsSection) return;
        if (statsSection.getBoundingClientRect().top < window.innerHeight * 0.88) {
            document.querySelectorAll('.stat-item').forEach((item, i) => {
                setTimeout(() => item.classList.add('animate-stats'), i * 180);
            });
            document.querySelectorAll('.stat-number').forEach(el => {
                if (el.dataset.animated) return;
                el.dataset.animated = '1';
                animateNumber(el);
            });
        }
    }

    function animateNumber(el) {
        const target   = parseInt(el.getAttribute('data-target')) || 0;
        const suffix   = el.getAttribute('data-suffix') || '';
        const duration = 2200;
        const fps      = 60;
        const steps    = Math.ceil(duration / (1000 / fps));
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            el.textContent = Math.floor(eased * target) + suffix;
            if (step >= steps) {
                el.textContent = target + suffix;
                clearInterval(timer);
            }
        }, 1000 / fps);
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });

    /* ── Video Play Buttons ──────────────────────────────── */
    document.querySelectorAll('.play-button').forEach(btn => {
        btn.addEventListener('click', function () {
            alert('Video playback coming soon.');
        });
    });

    /* ── Smooth anchor scroll ────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
