document.addEventListener('DOMContentLoaded', () => {

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            // Toggle clicked
            if (!isOpen) item.classList.add('open');
        });
    });

    // Pricing Toggle
    const toggle = document.getElementById('pricing-toggle');
    const labels = document.querySelectorAll('.toggle-label');

    toggle.addEventListener('change', () => {
        const isYearly = toggle.checked;
        labels.forEach(l => l.classList.remove('active'));
        labels[isYearly ? 1 : 0].classList.add('active');

        document.querySelectorAll('.price span').forEach(el => {
            const monthly = el.getAttribute('data-monthly');
            const yearly = el.getAttribute('data-yearly');
            if (monthly && yearly) {
                el.textContent = isYearly ? yearly : monthly;
            }
        });
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '64px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#fff';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '16px 24px';
        navLinks.style.gap = '16px';
        navLinks.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
});
