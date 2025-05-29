document.addEventListener("DOMContentLoaded", () => {
    // Smooth momentum scrolling system
    let isCustomScrolling = false;
    let scrollTarget = window.scrollY;
    let currentScroll = window.scrollY;
    let scrollVelocity = 0;
    let scrollFrame;
    
    // Scrolling parameters
    const scrollEase = 0.08; // Lower = more momentum, higher = more responsive
    const scrollSpeed = 2; // Scroll sensitivity multiplier
    
    function updateScroll() {
        if (Math.abs(scrollTarget - currentScroll) > 0.5) {
            currentScroll += (scrollTarget - currentScroll) * scrollEase;
            window.scrollTo(0, currentScroll);
            scrollFrame = requestAnimationFrame(updateScroll);
        } else {
            window.scrollTo(0, scrollTarget);
            currentScroll = scrollTarget;
            isCustomScrolling = false;
            if (scrollFrame) {
                cancelAnimationFrame(scrollFrame);
                scrollFrame = null;
            }
        }
    }
    
    function startSmoothScroll() {
        if (!isCustomScrolling) {
            isCustomScrolling = true;
            updateScroll();
        }
    }
    
    // Handle wheel events
    let wheelTimeout;
    function handleWheel(e) {
        e.preventDefault();
        
        // Clear any existing timeout
        clearTimeout(wheelTimeout);
        
        // Calculate new scroll target
        const delta = e.deltaY * scrollSpeed;
        scrollTarget = Math.max(0, Math.min(
            document.documentElement.scrollHeight - window.innerHeight,
            scrollTarget + delta
        ));
        
        // Start smooth scrolling
        startSmoothScroll();
        
        // Set timeout to sync with actual scroll position after momentum
        wheelTimeout = setTimeout(() => {
            currentScroll = window.scrollY;
            scrollTarget = currentScroll;
        }, 100);
    }
    
    // Handle keyboard scrolling
    function handleKeyScroll(e) {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
            // Let the browser handle the scroll, then sync our system
            setTimeout(() => {
                currentScroll = window.scrollY;
                scrollTarget = currentScroll;
                isCustomScrolling = false;
            }, 50);
        }
    }
    
    // Touch handling for mobile
    let touchStart = 0;
    let touchCurrent = 0;
    let isTouching = false;
    let touchVelocity = 0;
    let lastTouchTime = 0;
    
    function handleTouchStart(e) {
        touchStart = e.touches[0].clientY;
        touchCurrent = touchStart;
        isTouching = true;
        lastTouchTime = Date.now();
        
        // Stop any ongoing smooth scroll
        if (scrollFrame) {
            cancelAnimationFrame(scrollFrame);
            scrollFrame = null;
        }
        isCustomScrolling = false;
        currentScroll = window.scrollY;
        scrollTarget = currentScroll;
    }
    
    function handleTouchMove(e) {
        if (!isTouching) return;
        
        const currentTime = Date.now();
        const currentTouch = e.touches[0].clientY;
        const deltaY = touchCurrent - currentTouch;
        const deltaTime = currentTime - lastTouchTime;
        
        // Calculate velocity
        if (deltaTime > 0) {
            touchVelocity = deltaY / deltaTime;
        }
        
        scrollTarget = Math.max(0, Math.min(
            document.documentElement.scrollHeight - window.innerHeight,
            scrollTarget + deltaY * 2
        ));
        
        window.scrollTo(0, scrollTarget);
        currentScroll = scrollTarget;
        
        touchCurrent = currentTouch;
        lastTouchTime = currentTime;
    }
    
    function handleTouchEnd(e) {
        isTouching = false;
        
        // Apply momentum based on velocity
        if (Math.abs(touchVelocity) > 0.1) {
            const momentum = touchVelocity * 300; // Momentum multiplier
            scrollTarget = Math.max(0, Math.min(
                document.documentElement.scrollHeight - window.innerHeight,
                scrollTarget + momentum
            ));
            startSmoothScroll();
        }
    }
    
    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Sync with browser scroll when needed (for scrollbars, etc.)
    let syncTimeout;
    window.addEventListener('scroll', () => {
        if (!isCustomScrolling && !isTouching) {
            clearTimeout(syncTimeout);
            syncTimeout = setTimeout(() => {
                currentScroll = window.scrollY;
                scrollTarget = currentScroll;
            }, 50);
        }
    }, { passive: true });
    
    // Enhanced Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            }
        });
    }, observerOptions);

    // Observe all elements that should animate
    const animatedElements = document.querySelectorAll('.problem-solution-tile, .hidden');
    animatedElements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop;
                scrollTarget = targetPosition;
                startSmoothScroll();
            }
        });
    });

    // Navigation scroll animation with smooth inertia
    let navIsScrolling = false;
    let navScrollTimeout;
    let lastScrollTop = 0;
    let navScrollVelocity = 0;
    let animationFrame;
    const topNav = document.querySelector('.top-nav');
    const bottomNav = document.querySelector('.bottom-nav');

    function hideNavBars() {
        if (topNav) {
            topNav.classList.add('nav-hidden');
        }
        if (bottomNav) {
            bottomNav.classList.add('nav-hidden');
        }
        navIsScrolling = true;
    }

    function showNavBars() {
        if (topNav) {
            topNav.classList.remove('nav-hidden');
        }
        if (bottomNav) {
            bottomNav.classList.remove('nav-hidden');
        }
        navIsScrolling = false;
    }

    // Smooth scroll momentum detection for nav bars
    function updateNavScrollVelocity() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        navScrollVelocity = Math.abs(currentScrollTop - lastScrollTop);
        lastScrollTop = currentScrollTop;

        // Continue checking velocity if we're still scrolling
        if (navScrollVelocity > 0.5 || isCustomScrolling) {
            animationFrame = requestAnimationFrame(updateNavScrollVelocity);
        } else {
            // Velocity has slowed down significantly, show nav bars after a delay
            clearTimeout(navScrollTimeout);
            navScrollTimeout = setTimeout(() => {
                showNavBars();
            }, 300);
        }
    }

    // Modified scroll listener for nav bars
    window.addEventListener('scroll', () => {
        // Hide nav bars when scrolling starts
        if (!navIsScrolling) {
            hideNavBars();
        }

        // Cancel any existing animation frame and timeout
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        clearTimeout(navScrollTimeout);

        // Start velocity tracking
        animationFrame = requestAnimationFrame(updateNavScrollVelocity);
    }, { passive: true });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:tyson.williams95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Thank you! Your email client should open now.', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Add typing effect to hero heading
    const heroHeading = document.querySelector('.main-heading');
    if (heroHeading) {
        const text = heroHeading.textContent;
        heroHeading.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroHeading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
});

