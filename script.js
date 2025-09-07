// Sample car data with reliable image sources
const carsData = [
    {
        id: 1,
        name: "BMW M8 Competition",
        brand: "bmw",
        price: 120000,
        type: "sports",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "5,000",
        fuel: "Gasoline",
        transmission: "Automatic",
        badge: "New"
    },
    {
        id: 2,
        name: "Mercedes-AMG GT 63S",
        brand: "mercedes",
        price: 145000,
        type: "sports",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "8,500",
        fuel: "Gasoline",
        transmission: "Automatic",
        badge: "Hot"
    },
    {
        id: 3,
        name: "Tesla Model S Plaid",
        brand: "tesla",
        price: 110000,
        type: "electric",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "12,000",
        fuel: "Electric",
        transmission: "Automatic",
        badge: "Eco"
    },
    {
        id: 4,
        name: "Audi RS6 Avant",
        brand: "audi",
        price: 115000,
        type: "sports",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "6,200",
        fuel: "Gasoline",
        transmission: "Automatic",
        badge: "New"
    },
    {
        id: 5,
        name: "Porsche 911 Turbo S",
        brand: "porsche",
        price: 200000,
        type: "sports",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "3,500",
        fuel: "Gasoline",
        transmission: "Automatic",
        badge: "Premium"
    },
    {
        id: 8,
        name: "Audi Q8 RS",
        brand: "audi",
        price: 105000,
        type: "suv",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "9,100",
        fuel: "Gasoline",
        transmission: "Automatic",
        badge: "Sport"
    },
    {
        id: 9,
        name: "Tesla Model X Plaid",
        brand: "tesla",
        price: 130000,
        type: "electric",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "6,500",
        fuel: "Electric",
        transmission: "Automatic",
        badge: "Futuristic"
    },
    {
        id: 10,
        name: "Porsche Macan GTS",
        brand: "porsche",
        price: 85000,
        type: "suv",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "11,200",
        fuel: "Gasoline",
        transmission: "Automatic",
        badge: "Adventure"
    },
    {
        id: 11,
        name: "BMW i4 M50",
        brand: "bmw",
        price: 75000,
        type: "electric",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "8,900",
        fuel: "Electric",
        transmission: "Automatic",
        badge: "Innovation"
    },
    {
        id: 12,
        name: "Mercedes C63 AMG",
        brand: "mercedes",
        price: 85000,
        type: "sedan",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&auto=format",
        year: 2023,
        mileage: "5,600",
        fuel: "Gasoline",
        transmission: "Automatic",        badge: "Performance"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const carsGrid = document.getElementById('carsGrid');
const brandFilter = document.getElementById('brandFilter');
const priceFilter = document.getElementById('priceFilter');
const typeFilter = document.getElementById('typeFilter');
const searchBtn = document.querySelector('.search-btn');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(price);
}

// Create car card HTML
function createCarCard(car) {
    const fallbackImage = `data:image/svg+xml;base64,${btoa(`
        <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#333"/>
            <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#fff" text-anchor="middle" dy=".3em">${car.name}</text>
        </svg>
    `)}`;
    
    return `
        <div class="car-item" data-brand="${car.brand}" data-price="${car.price}" data-type="${car.type}">
            <div class="car-item-image">
                <img src="${car.image}" alt="${car.name}" loading="lazy" onerror="this.src='${fallbackImage}'">
                <div class="car-badge">${car.badge}</div>
            </div>
            <div class="car-item-content">
                <h3>${car.name}</h3>
                <div class="price">${formatPrice(car.price)}</div>
                <div class="car-specs">
                    <div class="car-spec">
                        <i class="fas fa-calendar"></i>
                        <span>${car.year}</span>
                    </div>
                    <div class="car-spec">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${car.mileage} mi</span>
                    </div>
                    <div class="car-spec">
                        <i class="fas fa-gas-pump"></i>
                        <span>${car.fuel}</span>
                    </div>
                    <div class="car-spec">
                        <i class="fas fa-cog"></i>
                        <span>${car.transmission}</span>
                    </div>
                </div>
                <div class="car-actions">
                    <button onclick="viewCar(${car.id})">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                    <button onclick="contactAboutCar(${car.id})">
                        <i class="fas fa-phone"></i>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Display cars
function displayCars(cars) {
    if (cars.length === 0) {
        carsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>No cars found matching your criteria</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    
    carsGrid.innerHTML = cars.map(car => createCarCard(car)).join('');
    
    // Add intersection observer for animations
    const carItems = document.querySelectorAll('.car-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    carItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Filter cars based on selected criteria
function filterCars() {
    const selectedBrand = brandFilter.value;
    const selectedPrice = priceFilter.value;
    const selectedType = typeFilter.value;
    
    let filteredCars = carsData.filter(car => {
        const brandMatch = !selectedBrand || car.brand === selectedBrand;
        const typeMatch = !selectedType || car.type === selectedType;
        
        let priceMatch = true;
        if (selectedPrice) {
            const [min, max] = selectedPrice.split('-').map(p => p.replace(/[$,]/g, ''));
            if (max === '+') {
                priceMatch = car.price >= parseInt(min);
            } else {
                priceMatch = car.price >= parseInt(min) && car.price <= parseInt(max);
            }
        }
        
        return brandMatch && typeMatch && priceMatch;
    });
    
    displayCars(filteredCars);
}

// Search functionality
searchBtn.addEventListener('click', filterCars);

// Filter change events
brandFilter.addEventListener('change', filterCars);
priceFilter.addEventListener('change', filterCars);
typeFilter.addEventListener('change', filterCars);

// Car detail functions
function viewCar(carId) {
    const car = carsData.find(c => c.id === carId);
    if (car) {
        // Create modal or redirect to detail page
        alert(`Viewing details for ${car.name}\nPrice: ${formatPrice(car.price)}\nYear: ${car.year}\nMileage: ${car.mileage} miles\nFuel: ${car.fuel}\nTransmission: ${car.transmission}`);
    }
}

function contactAboutCar(carId) {
    const car = carsData.find(c => c.id === carId);
    if (car) {
        // Scroll to contact section or open contact modal
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill contact form with car info
        setTimeout(() => {
            const messageTextarea = document.querySelector('.contact-form textarea');
            if (messageTextarea) {
                messageTextarea.value = `Hi, I'm interested in the ${car.name} (${formatPrice(car.price)}). Please contact me with more information.`;
            }
        }, 500);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Hero button interactions
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`);
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Newsletter subscription
document.querySelector('.newsletter button').addEventListener('click', function(e) {
    e.preventDefault();
    const email = this.parentElement.querySelector('input').value;
    
    if (email) {
        this.innerHTML = '<i class="fas fa-check"></i>';
        this.style.background = 'var(--neon-green)';
        
        setTimeout(() => {
            alert('Thank you for subscribing to our newsletter!');
            this.parentElement.querySelector('input').value = '';
            this.innerHTML = '<i class="fas fa-paper-plane"></i>';
            this.style.background = 'var(--accent-gradient)';
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .stat, .contact-item');
    animateElements.forEach(el => observer.observe(el));
    
    // Initial car display
    displayCars(carsData);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading states and error handling
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function showError(element, message) {
    element.innerHTML = `<div class="error">${message}</div>`;
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        carsData,
        formatPrice,
        createCarCard,
        displayCars,
        filterCars
    };
}
