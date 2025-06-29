document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;
    
    // Simulate adding items to cart
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', function(e) {
            if (e.target.tagName !== 'P' && e.target.tagName !== 'H2') {
                cartItems++;
                cartCount.textContent = cartItems;
                
                // Animation for cart
                cartCount.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    searchIcon.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });
    
    // Voice search simulation
    const voiceSearch = document.querySelector('.voice-search');
    voiceSearch.addEventListener('click', function() {
        alert('Voice search activated. Speak now...');
        // In a real app, you would integrate with Web Speech API
    });
    
    // Newsletter subscription
    const newsletterBtn = document.querySelector('.newsletter-form button');
    const newsletterInput = document.querySelector('.newsletter-form input');
    
    newsletterBtn.addEventListener('click', function() {
        if (newsletterInput.value.trim() !== '' && newsletterInput.value.includes('@')) {
            alert(`Thank you for subscribing with ${newsletterInput.value}`);
            newsletterInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
    
    // Prime button
    const primeBtn = document.querySelector('.prime-btn');
    primeBtn.addEventListener('click', function() {
        alert('Redirecting to Amazon Prime signup...');
    });
    
    // Panel deals hover effect
    const panelDeals = document.querySelector('.panel-deals');
    panelDeals.addEventListener('mouseenter', function() {
        this.style.color = '#febd69';
    });
    panelDeals.addEventListener('mouseleave', function() {
        this.style.color = 'white';
    });
    
    // Current year in footer
    document.querySelector('.copyright').textContent = `© 2025-${new Date().getFullYear()} Amazon.com, Inc. or its affiliates`;
    
    // Simulate loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Dark mode toggle (bonus feature)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // You would need to add dark mode styles in your CSS
}

// For a real implementation, you would add more interactive features:
// - Product carousels
// - Account dropdown
// - More sophisticated cart system
// - API integration for real products
// - Payment processing