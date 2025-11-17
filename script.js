// Analytics Helper Functions
function trackEvent(eventName, eventParams = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
    }
    
    // Console log for debugging
    console.log('Event tracked:', eventName, eventParams);
}

function trackFormStart(formName) {
    trackEvent('form_start', {
        form_name: formName
    });
}

function trackFormSubmit(formName) {
    trackEvent('form_submit', {
        form_name: formName
    });
}

function trackButtonClick(buttonName) {
    trackEvent('button_click', {
        button_name: buttonName
    });
}

// Navigation Functions
function scrollToWaitlist() {
    trackButtonClick('join_waitlist');
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Focus on email input for accessibility
        setTimeout(() => {
            document.getElementById('email')?.focus();
        }, 500);
    }
}

function openDemo() {
    trackButtonClick('watch_demo');
    // Replace with actual demo video URL or modal
    window.open('https://www.youtube.com/watch?v=demo-video-id', '_blank');
}

function scheduleDemo() {
    trackButtonClick('schedule_demo');
    // Replace with actual Calendly or booking link
    window.open('https://calendly.com/agrisave/demo', '_blank');
}

function downloadOnePager() {
    trackButtonClick('download_onepager');
    trackEvent('file_download', {
        file_name: 'agrisave-onepager.pdf'
    });
    // Replace with actual PDF URL
    window.open('/downloads/agrisave-onepager.pdf', '_blank');
}

function contactTeam() {
    trackButtonClick('contact_team');
    window.location.href = 'mailto:hello@agrisave.com?subject=Inquiry from Website';
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const questionText = question.querySelector('span').textContent;
            
            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                trackEvent('faq_open', {
                    question: questionText
                });
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetName = this.getAttribute('href').substring(1);
                trackEvent('navigation_click', {
                    destination: targetName
                });
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Track all data-event buttons
    document.querySelectorAll('[data-event]').forEach(button => {
        button.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event');
            trackButtonClick(eventName);
        });
    });

    // Waitlist form submission
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
        // Track form start
        const emailInput = waitlistForm.querySelector('input[type="email"]');
        let formStartTracked = false;
        
        emailInput?.addEventListener('focus', function() {
            if (!formStartTracked) {
                trackFormStart('waitlist');
                formStartTracked = true;
            }
        });
        
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const email = formData.get('email');
            const farmSize = formData.get('farm-size');
            const state = formData.get('state');
            
            // Track conversion
            trackFormSubmit('waitlist');
            trackEvent('generate_lead', {
                value: 1,
                currency: 'USD'
            });
            
            // Here you would typically send this to your backend
            // Example: fetch('/api/waitlist', { method: 'POST', body: formData })
            
            console.log('Waitlist signup:', { email, farmSize, state });
            
            // Show success message
            const formContainer = this.parentElement;
            formContainer.innerHTML = `
                <div class="success-message">
                    <h3 style="color: var(--secondary-green); margin-bottom: 1rem;">🎉 You're on the list!</h3>
                    <p>Thank you for joining our waitlist. We'll be in touch soon with early access details.</p>
                    <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--gray-medium);">Check your email for confirmation.</p>
                </div>
            `;
        });
    }

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .problem-card, .testimonial-card, .step');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
