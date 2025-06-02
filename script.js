document.addEventListener('DOMContentLoaded', function() {

    // Hero Slider - ADD THIS SECTION
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    
    if (heroSlides.length > 0) {
        let currentHeroSlide = 0;
        
        function showHeroSlide(n) {
            // Remove active class from all slides and dots
            heroSlides.forEach(slide => slide.classList.remove('active'));
            heroDots.forEach(dot => dot.classList.remove('active'));
            
            // Calculate current slide
            currentHeroSlide = (n + heroSlides.length) % heroSlides.length;
            
            // Add active class to current slide and dot
            heroSlides[currentHeroSlide].classList.add('active');
            heroDots[currentHeroSlide].classList.add('active');
        }
        
        // Previous button
        if (heroPrev) {
            heroPrev.addEventListener('click', () => showHeroSlide(currentHeroSlide - 1));
        }
        
        // Next button
        if (heroNext) {
            heroNext.addEventListener('click', () => showHeroSlide(currentHeroSlide + 1));
        }
        
        // Dot navigation
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => showHeroSlide(index));
        });
        
        // Auto slide every 5 seconds
        setInterval(() => {
            showHeroSlide(currentHeroSlide + 1);
        }, 5000);
    }
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;
        
        function showSlide(n) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + testimonialSlides.length) % testimonialSlides.length;
            
            testimonialSlides[currentSlide].classList.add('active');
            if (dots.length > 0) {
                dots[currentSlide].classList.add('active');
            }
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
        
        // Auto slide
        setInterval(() => {
            if (nextBtn) {
                showSlide(currentSlide + 1);
            }
        }, 5000);
    }
    
    // Testimonial Carousel
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.indicator');
    
    if (carouselTrack && carouselSlides.length > 0) {
        let currentCarouselSlide = 0;
        
        function showCarouselSlide(n) {
            currentCarouselSlide = (n + carouselSlides.length) % carouselSlides.length;
            
            carouselTrack.style.transform = `translateX(-${currentCarouselSlide * 100}%)`;
            
            indicators.forEach(indicator => indicator.classList.remove('active'));
            indicators[currentCarouselSlide].classList.add('active');
        }
        
        if (carouselPrev) {
            carouselPrev.addEventListener('click', () => showCarouselSlide(currentCarouselSlide - 1));
        }
        
        if (carouselNext) {
            carouselNext.addEventListener('click', () => showCarouselSlide(currentCarouselSlide + 1));
        }
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => showCarouselSlide(index));
        });
        
        // Auto slide
        setInterval(() => {
            if (carouselNext) {
                showCarouselSlide(currentCarouselSlide + 1);
            }
        }, 6000);
    }
    
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Project Database - ADD YOUR PROJECT DETAILS HERE
const projectDatabase = {
    'Cunnadevi Secondary School': {
        category: 'Residential',
        location: 'Nagarkot, Bhaktapur',
        year: '2071-2072',
        size: '2,500 sq.m',
        description: 'A detailed survey and assessment of the school were conducted. Existing infrastructure was documented, and needs were identified through stakeholder consultations. Site analysis and spatial planning were done to propose new classroom blocks, library, science lab, sanitation units, and improved open spaces. A conceptual layout was prepared focusing on safety, accessibility, and future expansion.',
        images: [
            'cunna.jpg',
            'cunna2.jpg',
            'cunna3.jpg',
            'cunna4.jpg',
            'cunna5.jpg'
        ]
    },
    'Water supply and sanitation Project': {
        category: 'Commercial',
        location: 'Kulau VDC Baitadi',
        year: '2071-2072',
        size: '11.609 km',
        description: 'Survey and detailed engineering design were completed for a 11.609 km water supply and sanitation project. The report includes source development, pipeline layout, reservoirs, tap stands, and sanitation units to ensure safe water and hygiene.',
        images: [
            'Baitadi.jpg',
            'Baitadi.jpg',
            'Baitadi.jpg',
            'Baitadi.jpg',
            'Baitadi.jpg'
        ]
    },
    'Physical Development Plan': {
        category: 'urban',
        location: 'Mane Bhajyang, Okhaldhunga',
        year: '2071-2072',
        size: '3,200 sq.m',
        description: 'A physical development plan was prepared for Mane Bhajyang under the integrated development framework. It includes land use zoning, road network planning, public service infrastructure, and environmental management. The plan aims to guide sustainable growth and improve living standards in the area.',
        images: [
            'Manebhanjyang.jpg',
            'Manebhanjyang.jpg',
            'Manebhanjyang.jpg',
            'Manebhanjyang.jpg',
            'Manebhanjyang.jpg'
        ]
    },
    'Residential Bungalow Design': {
        category: 'Residential',
        location: 'Sinamangal, Nepal',
        year: '2072',
        size: '1000 sq.m',
        description: 'A modern residential bungalow was designed in Sinamangal for Mr. Umesh Niraula. The design features spacious interiors, natural lighting, proper ventilation, and a functional layout, ensuring comfort and aesthetic appeal in an urban setting.',
        images: [
            '3.jpg',
            '3.jpg',
            '3.jpg',
            '3.jpg',
            '3.jpg'
        ]
    },
    'Residential Building Extension': {
        category: 'Residential',
        location: 'Belaspur, Nepalgunj',
        year: '2073',
        size: '1500 sq.m',
        description: 'The project involved extension and modification of an existing residential building in Belaspur, Nepalgunj. The design focused on optimizing space, enhancing functionality, and updating the structure with modern features while blending with the original architecture.',
        images: [
            '7.jpg',
            '7.jpg',
            '7.jpg',
            '7.jpg',
            '7.jpg'
        ]
    },
    'Palthani Kamla Pokhari Park': {
        category: 'commercial',
        location: 'Kathmandu Nepal',
        year: '2073',
        size: '11,400 sq.m',
        description: 'A comprehensive master plan was prepared for Palthani Kamla Pokhari Park, focusing on environmental conservation, recreation, and community use. The design includes walking trails, green spaces, seating areas, a pond revitalization, and childrens play zones to enhance public utility and natural beauty.',
        images: [
            'Kamal.jpg',
            'Kamal2.jpg',
            'Kamal-Pokhari.jpg',
            'kamal-pokhari-1.jpg',
            'Kamla1.jpg'
        ]
    },
    'Design of Automobile Showroom': {
        category: 'commercial',
        location: 'Satobato, Nepal',
        year: 'Ongoing',
        size: '900 sq.m',
        description: 'A modern automobile showroom was designed at Satdobato for Mr. Khim Bahadur Purji. The design features a spacious vehicle display area, customer lounge, service zone, and office space, with a sleek façade, large glass panels, and efficient circulation for both vehicles and visitors.',
        images: [
            'automobile.jpg',
            'automobile.jpg',
            'automobile.jpg',
            'automobile.jpg',
            'automobile.jpg'
        ]
    },
    'Park Design in Chitwan': {
        category: 'commercial',
        location: 'Chitwan, Nepal',
        year: '2073-2074',
        size: '11000 sq.m',
        description: 'A park was designed in Chitwan focusing on green spaces, walking paths, seating areas, and recreational zones. The plan promotes community engagement, environmental sustainability, and provides a peaceful natural environment for visitors.',
        images: [
            'chitwan1.jpg',
            'chitwan.jpg',
            'chitwan2.jpg',
            'chitwan3.jpg',
            'chitwan1.jpg'
        ]
    },
    'Nepal Water Supply Corporation': {
        category: 'urban',
        location: 'Birgunj, Nepal',
        year: '2073-2074',
        size: '450 cu.m',
        description: 'Detailed soil and irrigation works were carried out for a 450 cu.m overhead water tank at Birgunj. The project ensured proper foundation support and site preparation, with a total project cost of Rs. 2,97,500.',
        images: [
            'water.jpeg',
            'water.jpeg',
            'water.jpeg',
            'water.jpeg',
            'water.jpeg'
        ]
    },
    'Model Integrated Governmental Building': {
        category: 'commercial',
        location: 'Madhyapur Thimi, Nepal',
        year: '2074',
        size: '1800 sq.m',
        description: 'A proposed design was prepared for a model integrated governmental building, focusing on functionality, accessibility, and sustainability. The plan includes office spaces for multiple departments, common service areas, meeting halls, and green zones, ensuring efficient public service delivery in a single facility.',
        images: [
            '6.jpg',
            '6.jpg',
            '6.jpg',
            '6.jpg',
            '6.jpg'
        ]
    },
    'Preparation of Irrigation Regulation Amendment': {
        category: 'urban',
        location: 'Kathmandu, Nepal',
        year: '2071/2072',
        size: '*',
        description: 'The amendment of irrigation regulations was prepared to update and improve existing policies in 2071/2072. The focus was on efficient water use, equitable distribution, user participation, and sustainable irrigation management practices to support agricultural development.',
        images: [
            'nepal.jpg'
            
        ]
    },
    'Nepal Water Supply Corporation': {
        category: 'commercial',
        location: 'Dhangadhi, Nepal',
        year: '2073/2074',
        size: '1250 sq.m',
        description: 'A project was undertaken for the planning and development of the Nepal Water Supply Corporation branch office in Dhangadhi. It focused on office infrastructure, service efficiency, and improved facilities to enhance water supply management in the region.',
        images: [
            'dhangadi.jpg'
            
        ]
    },
    'Design of Residential Building Balkot': {
        category: 'residential',
        location: 'Bode, Nepal',
        year: '2079',
        size: '1250 sq.m',
        description: 'A residential building was designed for Mr. Suraj Acharya at Balkot in 2069, emphasizing functional layout, natural lighting, and ventilation. The design ensured comfortable living spaces with a modern yet practical architectural approach.',
        images: [
            '5.jpg'
            
        ]
    },


    'Residential Bungalow': {
        category: 'Educational',
        location: 'Biratnagar, Nepal',
        year: '2068',
        size: '1,500 sq.m',
        description: 'A modern residential bungalow was designed for Mr. Yagya Prasad Sudedi at Biratnagar, emphasizing comfort, functionality, and aesthetics. It includes spacious rooms, a modular kitchen, and well-ventilated interiors. The layout ensures privacy, natural lighting, and a landscaped exterior.',
        images: [
            '4.jpg',
            'images/school1-2.jpg',
            'images/school1-3.jpg',
            'images/school1-4.jpg',
            'images/school1-5.jpg'
        ]
    }
};

// Project Modal
const viewProjectBtns = document.querySelectorAll('.view-project');
const projectModal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close-modal');

if (viewProjectBtns.length > 0 && projectModal) {
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get project title from the clicked project
            const projectTitle = this.closest('.project-info').querySelector('h3').textContent;
            
            // Get project data from database
            const projectData = projectDatabase[projectTitle];
            
            if (projectData) {
                // Set modal content from database
                document.getElementById('modal-title').textContent = projectTitle;
                document.getElementById('modal-category').textContent = projectData.category;
                document.getElementById('modal-location').textContent = projectData.location;
                document.getElementById('modal-year').textContent = projectData.year;
                document.getElementById('modal-size').textContent = projectData.size;
                document.getElementById('modal-description').textContent = projectData.description;
                
                // Set main image
                document.getElementById('modal-main-image').setAttribute('src', projectData.images[0]);
                
                // Create thumbnails from project images
                const thumbnailGallery = document.querySelector('.thumbnail-gallery');
                thumbnailGallery.innerHTML = '';
                
                projectData.images.forEach((imageSrc, index) => {
                    const thumbnail = document.createElement('div');
                    thumbnail.className = 'thumbnail';
                    if (index === 0) thumbnail.classList.add('active');
                    
                    const img = document.createElement('img');
                    img.setAttribute('src', imageSrc);
                    img.setAttribute('alt', `${projectTitle} Image ${index + 1}`);
                    
                    thumbnail.appendChild(img);
                    thumbnailGallery.appendChild(thumbnail);
                    
                    // Add click event to thumbnails
                    thumbnail.addEventListener('click', function() {
                        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                        this.classList.add('active');
                        document.getElementById('modal-main-image').setAttribute('src', imageSrc);
                    });
                });
            } else {
                // Fallback for projects not in database
                document.getElementById('modal-title').textContent = projectTitle;
                document.getElementById('modal-category').textContent = 'Architecture';
                document.getElementById('modal-location').textContent = 'Location TBD';
                document.getElementById('modal-year').textContent = '2023';
                document.getElementById('modal-size').textContent = 'Size TBD';
                document.getElementById('modal-description').textContent = 'Project details will be updated soon.';
                
                // Set placeholder image
                const projectImage = this.closest('.project-overlay').previousElementSibling.getAttribute('src');
                document.getElementById('modal-main-image').setAttribute('src', projectImage);
                
                // Create placeholder thumbnails
                const thumbnailGallery = document.querySelector('.thumbnail-gallery');
                thumbnailGallery.innerHTML = '';
                
                for (let i = 0; i < 3; i++) {
                    const thumbnail = document.createElement('div');
                    thumbnail.className = 'thumbnail';
                    if (i === 0) thumbnail.classList.add('active');
                    
                    const img = document.createElement('img');
                    img.setAttribute('src', projectImage);
                    img.setAttribute('alt', 'Project Thumbnail');
                    
                    thumbnail.appendChild(img);
                    thumbnailGallery.appendChild(thumbnail);
                    
                    thumbnail.addEventListener('click', function() {
                        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                        this.classList.add('active');
                        document.getElementById('modal-main-image').setAttribute('src', this.querySelector('img').getAttribute('src'));
                    });
                }
            }
            
            // Show modal
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}
    
    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordionItem = this.parentElement;
                accordionItem.classList.toggle('active');
            });
        });
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Send form data to Formspree (in a real project)
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    contactForm.innerHTML = `
                        <div class="success-message">
                            <i class="fas fa-check-circle"></i>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. We'll get back to you soon.</p>
                        </div>
                    `;
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error(error);
                // Show error message
                const formGroup = contactForm.querySelector('.form-group:last-child');
                const errorMessage = document.createElement('p');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'There was a problem submitting your form. Please try again.';
                formGroup.appendChild(errorMessage);
            });
        });
    }
    
    // Scroll Animation
    // Scroll Animation
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.classList.add('fade-in');
        }
    });
    
    // Check for stats animation
    checkStatsAnimation();
}

// Stats Animation Function
function checkStatsAnimation() {
    const statsSection = document.querySelector('.client-stats');
    const statItems = document.querySelectorAll('.stat-item');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statsSection) {
        const triggerBottom = window.innerHeight * 0.8;
        const sectionTop = statsSection.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            // Animate stat items
            statItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate-stats');
                }, index * 200);
            });
            
            // Animate numbers
            statNumbers.forEach(numberElement => {
                if (!numberElement.classList.contains('animated')) {
                    numberElement.classList.add('animated');
                    animateNumber(numberElement);
                }
            });
        }
    }
}

// Number Animation Function
function animateNumber(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Update the display
        element.textContent = Math.floor(current) + suffix;
        
        // Add some visual effects during animation
        if (current < target) {
            element.style.transform = 'scale(1.05)';
        } else {
            element.style.transform = 'scale(1)';
        }
    }, 16);
}

// Check elements on load
checkScroll();

// Check elements on scroll
window.addEventListener('scroll', checkScroll);
    // Video Testimonials
    const playButtons = document.querySelectorAll('.play-button');
    
    if (playButtons.length > 0) {
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                // In a real project, this would open a video modal or play the video
                alert('Video would play here in a real implementation.');
            });
        });
    }
});