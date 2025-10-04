// ==================== DUMMY DATA ====================
// EDIT THESE CREDENTIALS FOR LOGIN
const VALID_CREDENTIALS = {
    email: 'user@example.com',
    password: '123456'
};

// EXPANDED PRODUCT DATA - 40+ Products from Top Brands
const productsData = [
    // ELECTRONICS - 15 Products
    {
        id: 1,
        name: 'iPhone 16 Pro Max',
        price: 1199,
        category: 'electronics',
        image: 'https://imgs.search.brave.com/DY2e_X06DBDIoEHTyUc8fFpNqrQFtVuqBB6IhBup3AU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYveGlm/MHEvbW9iaWxlL3gv/di95Ly1vcmlnaW5h/bC1pbWFoNGp6NjZk/bWN3aG1kLmpwZWc_/cT03MCZjcm9wPWZh/bHNl',
        description: 'Latest iPhone with A18 Pro chip, 6.7" display, advanced camera system with 5x optical zoom.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: 1099,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
        description: 'Flagship Android phone with 200MP camera, S Pen, and AI-powered features.'
    },
    {
        id: 3,
        name: 'MacBook Pro M3 16"',
        price: 2499,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
        description: 'Powerful laptop with M3 Pro chip, 16" Liquid Retina display, perfect for professionals.'
    },
    {
        id: 4,
        name: 'Sony WH-1000XM5',
        price: 399,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
        description: 'Industry-leading noise cancellation with exceptional sound quality and 30-hour battery.'
    },
    {
        id: 5,
        name: 'iPad Pro 12.9" M2',
        price: 1099,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
        description: 'Ultimate iPad with M2 chip, Liquid Retina XDR display, and Apple Pencil support.'
    },
    {
        id: 6,
        name: 'OnePlus 12 Pro',
        price: 799,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
        description: 'Fast charging flagship with Hasselblad camera, 120Hz AMOLED display, and 100W charging.'
    },
    {
        id: 7,
        name: 'HP Pavilion Gaming Laptop',
        price: 899,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
        description: 'Gaming laptop with Intel Core i7, NVIDIA RTX 4060, 16GB RAM, and 144Hz display.'
    },
    {
        id: 8,
        name: 'ASUS ROG Zephyrus',
        price: 1799,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
        description: 'Premium gaming laptop with AMD Ryzen 9, RTX 4080, slim design, and RGB keyboard.'
    },
    {
        id: 9,
        name: 'Apple AirPods Pro 3',
        price: 249,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500',
        description: 'Active noise cancellation, Adaptive Audio, and USB-C charging with H2 chip.'
    },
    {
        id: 10,
        name: 'Xiaomi Redmi Note 14 Pro',
        price: 399,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
        description: 'Budget-friendly smartphone with 108MP camera, 120Hz AMOLED, and 67W fast charging.'
    },
    {
        id: 11,
        name: 'Dell XPS 15',
        price: 1699,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
        description: 'Professional laptop with 4K OLED touchscreen, Intel Core i9, and NVIDIA graphics.'
    },
    {
        id: 12,
        name: 'Sony PlayStation 5 Slim',
        price: 499,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500',
        description: 'Next-gen gaming console with 4K gaming, ultra-fast SSD, and DualSense controller.'
    },
    {
        id: 13,
        name: 'Google Pixel 9 Pro',
        price: 899,
        category: 'electronics',
        image: 'https://imgs.search.brave.com/1HNwtdloHJozIEGJrgaRgChHjbZv49XHvjORx9YNIr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92c3By/b2QudmlqYXlzYWxl/cy5jb20vbWVkaWEv/Y2F0YWxvZy9wcm9k/dWN0L2cvby9nb29n/bGUtcGl4ZWwtOS1w/cm8tcG9yY2VsYWlu/XzFfLmpwZz9vcHRp/bWl6ZT1tZWRpdW0m/Zml0PWJvdW5kcyZo/ZWlnaHQ9NTAwJndp/ZHRoPTUwMA',
        description: 'Best Android camera phone with Google AI, Tensor G4 chip, and pure Android experience.'
    },
    {
        id: 14,
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1499,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
        description: 'Business ultrabook with Intel Core i7, 14" 4K display, lightweight carbon fiber design.'
    },
    {
        id: 15,
        name: 'Realme GT 3 Pro',
        price: 549,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500',
        description: 'Performance-focused phone with Snapdragon 8 Gen 3, 240Hz display, and 150W charging.'
    },

    // SHOES - 15 Products
    {
        id: 16,
        name: 'Nike Air Max 270',
        price: 159,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        description: 'Iconic running shoes with large Air unit, comfortable cushioning, and breathable mesh.'
    },
    {
        id: 17,
        name: 'Adidas Ultraboost 22',
        price: 189,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500',
        description: 'Premium running shoes with responsive Boost cushioning and Primeknit upper.'
    },
    {
        id: 18,
        name: 'Puma RS-X Reinvention',
        price: 119,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500',
        description: 'Retro-inspired sneakers with bold colors, comfortable fit, and street-style design.'
    },
    {
        id: 19,
        name: 'Nike Jordan 1 Retro High',
        price: 179,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500',
        description: 'Classic basketball sneakers with iconic design, premium leather, and Air cushioning.'
    },
    {
        id: 20,
        name: 'Adidas Samba OG',
        price: 99,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
        description: 'Timeless indoor soccer shoes with suede upper and gum rubber outsole.'
    },
    {
        id: 21,
        name: 'Converse Chuck Taylor All Star',
        price: 65,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500',
        description: 'Classic canvas sneakers available in multiple colors, versatile and timeless style.'
    },
    {
        id: 22,
        name: 'New Balance 574 Core',
        price: 89,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500',
        description: 'Retro running shoes with ENCAP cushioning, suede/mesh upper, and comfortable fit.'
    },
    {
        id: 23,
        name: 'Reebok Club C 85 Vintage',
        price: 79,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500',
        description: 'Classic tennis-inspired sneakers with soft leather and timeless minimalist design.'
    },
    {
        id: 24,
        name: 'ASICS Gel-Kayano 30',
        price: 169,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
        description: 'Stability running shoes with GEL cushioning, excellent arch support for long runs.'
    },
    {
        id: 25,
        name: 'Vans Old Skool',
        price: 69,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500',
        description: 'Iconic skate shoes with signature side stripe, canvas and suede upper.'
    },
    {
        id: 26,
        name: 'Nike Pegasus 41',
        price: 139,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500',
        description: 'Versatile running shoes with ReactX foam, comfortable for daily training and racing.'
    },
    {
        id: 27,
        name: 'Adidas Campus 00s',
        price: 109,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500',
        description: 'Trendy lifestyle sneakers with Y2K aesthetic, suede upper, and chunky design.'
    },
    {
        id: 28,
        name: 'Puma Deviate Nitro 3',
        price: 149,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500',
        description: 'Carbon-plated racing shoes with NITRO foam for maximum energy return.'
    },
    {
        id: 29,
        name: 'Nike Dunk Low',
        price: 119,
        category: 'shoes',
        image: 'https://imgs.search.brave.com/7jT83uG81y134PphAWPVwWyTVyJtgLQIBlwExEG-QAg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmty/ZHVuay5zMy5hcC1u/b3J0aGVhc3QtMS5h/bWF6b25hd3MuY29t/L2VuL21hZ2F6aW5l/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzExLzIwMTI1ODI2/L05pa2UtRHVuay1M/b3cud2VicA',
        description: 'Popular lifestyle sneakers with retro basketball design and multiple colorways.'
    },
    {
        id: 30,
        name: 'Saucony Endorphin Speed 4',
        price: 169,
        category: 'shoes',
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500',
        description: 'Tempo running shoes with SPEEDROLL technology and PWRRUN PB cushioning.'
    },

    // CLOTHES - 15 Products
    {
        id: 31,
        name: 'Levi\'s 501 Original Jeans',
        price: 79,
        category: 'clothes',
        image: 'https://imgs.search.brave.com/XP1jDLcSFYrDzhQJk3AKBiG_0-uS_IFysHTp39FDavM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qdXN0/amVhbnMuamdsLmNv/bS5hdS9KSi9hdXJv/cmEvaW1hZ2VzL2Vz/cG90L3Nlby9sZXZp/czUwMWVuZHVyaW5n/c3R5bGUvaGVyb0B4/MS5qcGc',
        description: 'Classic straight-fit jeans with button fly, authentic denim, and timeless style.'
    },
    {
        id: 32,
        name: 'Ralph Lauren Polo Shirt',
        price: 89,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500',
        description: 'Classic fit polo shirt with iconic pony logo, 100% cotton piqué fabric.'
    },
    {
        id: 33,
        name: 'Zara Slim Fit Blazer',
        price: 129,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500',
        description: 'Modern tailored blazer with slim fit, perfect for business and formal occasions.'
    },
    {
        id: 34,
        name: 'H&M Oversized T-Shirt',
        price: 19,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
        description: 'Comfortable cotton t-shirt with relaxed oversized fit, available in multiple colors.'
    },
    {
        id: 35,
        name: 'Adidas Originals Hoodie',
        price: 69,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
        description: 'Classic pullover hoodie with trefoil logo, fleece-lined interior for warmth.'
    },
    {
        id: 36,
        name: 'Pepe Jeans Denim Jacket',
        price: 99,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
        description: 'Vintage-style denim jacket with distressed finish and classic trucker design.'
    },
    {
        id: 37,
        name: 'Nike Tech Fleece Joggers',
        price: 89,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500',
        description: 'Premium joggers with thermal fabric, tapered fit, and zippered pockets.'
    },
    {
        id: 38,
        name: 'Uniqlo Ultra Light Down Jacket',
        price: 79,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500',
        description: 'Lightweight packable jacket with premium down insulation for cold weather.'
    },
    {
        id: 39,
        name: 'Tommy Hilfiger Oxford Shirt',
        price: 69,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
        description: 'Classic button-down shirt in oxford fabric, perfect for smart-casual style.'
    },
    {
        id: 40,
        name: 'Zara High-Waist Trousers',
        price: 59,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500',
        description: 'Modern tailored trousers with high waist, straight leg, and professional look.'
    },
    {
        id: 41,
        name: 'Gap Classic Chinos',
        price: 49,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500',
        description: 'Versatile chino pants with straight fit, perfect for casual and business casual.'
    },
    {
        id: 42,
        name: 'Forever 21 Crop Top',
        price: 24,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500',
        description: 'Trendy crop top with modern fit, available in various colors and patterns.'
    },
    {
        id: 43,
        name: 'Levi\'s Sherpa Trucker Jacket',
        price: 119,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
        description: 'Classic denim jacket with cozy sherpa lining, perfect for fall and winter.'
    },
    {
        id: 44,
        name: 'Patagonia Fleece Pullover',
        price: 99,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500',
        description: 'Eco-friendly fleece made from recycled materials with quarter-zip design.'
    },
    {
        id: 45,
        name: 'Mango Knit Sweater',
        price: 54,
        category: 'clothes',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500',
        description: 'Cozy knit sweater with relaxed fit, perfect for layering in cooler weather.'
    }
];

// ==================== GLOBAL VARIABLES ====================
let currentCategory = 'all';
let currentProducts = [...productsData];
let cart = [];
let currentSlide = 0;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    initializeEventListeners();
    loadCart();
    initializeSlider();
});

// ==================== LOGIN FUNCTIONALITY ====================
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginPage = document.getElementById('loginPage');
    const mainSite = document.getElementById('mainSite');
    
    if (isLoggedIn === 'true') {
        loginPage.classList.add('hidden');
        mainSite.classList.remove('hidden');
        displayProducts(currentProducts);
    } else {
        loginPage.classList.remove('hidden');
        mainSite.classList.add('hidden');
    }
}

function initializeEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Category links
    const categoryLinks = document.querySelectorAll('[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterCategory(category);
            
            // Update active state
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Search functionality - FIXED FOR REAL-TIME SEARCH
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    // Cart link
    const cartLink = document.getElementById('cartLink');
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }
    
    // Modal close
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', closeProductModal);
    }
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('loginError');
    
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
        localStorage.setItem('isLoggedIn', 'true');
        errorMessage.textContent = '';
        checkLoginStatus();
    } else {
        errorMessage.textContent = 'Invalid email or password. Please use the demo credentials shown above.';
    }
}

function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    checkLoginStatus();
}

// ==================== PRODUCT DISPLAY ====================
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #666;">No products found matching your search.</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <p class="product-description">${product.description.substring(0, 80)}...</p>
            <div class="product-buttons">
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn-secondary" onclick="viewProductDetails(${product.id})">View Details</button>
            </div>
        </div>
    `;
    return card;
}

// ==================== CATEGORY FILTERING ====================
function filterCategory(category) {
    currentCategory = category;
    
    // Clear search input when changing category
    document.getElementById('searchInput').value = '';
    
    if (category === 'all') {
        currentProducts = [...productsData];
    } else {
        currentProducts = productsData.filter(product => product.category === category);
    }
    
    displayProducts(currentProducts);
    
    // Scroll to products section
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

// ==================== IMPROVED SEARCH FUNCTIONALITY ====================
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // If search is empty, show products based on current category
        currentProducts = currentCategory === 'all' 
            ? [...productsData] 
            : productsData.filter(p => p.category === currentCategory);
    } else {
        // Search across all products or within current category
        const baseProducts = currentCategory === 'all' 
            ? productsData 
            : productsData.filter(p => p.category === currentCategory);
        
        currentProducts = baseProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(currentProducts);
    
    // Show message if searching
    if (searchTerm !== '' && currentProducts.length > 0) {
        console.log(`Found ${currentProducts.length} product(s) matching "${searchTerm}"`);
    }
}

// ==================== PRODUCT DETAILS MODAL ====================
function viewProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalDescription').textContent = product.description;
    
    // Set up modal buttons
    const modalAddToCart = document.getElementById('modalAddToCart');
    const modalBuyNow = document.getElementById('modalBuyNow');
    
    modalAddToCart.onclick = function() {
        addToCart(productId);
        closeProductModal();
    };
    
    modalBuyNow.onclick = function() {
        buyNow(product);
    };
    
    modal.style.display = 'block';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function buyNow(product) {
    alert(`Thank you for your interest in ${product.name}!\n\nThis is a demo version. In a real application, you would proceed to checkout and payment.\n\nPrice: $${product.price}`);
    closeProductModal();
}

// ==================== CART FUNCTIONALITY ====================
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        displayCart();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function openCart() {
    document.getElementById('productsSection').classList.add('hidden');
    document.getElementById('heroSection').classList.add('hidden');
    document.getElementById('cartSection').classList.remove('hidden');
    displayCart();
}

function closeCart() {
    document.getElementById('cartSection').classList.add('hidden');
    document.getElementById('productsSection').classList.remove('hidden');
    document.getElementById('heroSection').classList.remove('hidden');
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        updateCartSummary(0, 0, 0);
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">$${item.price}</p>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>Quantity: ${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <div>
                <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 10px;">$${(item.price * item.quantity).toFixed(2)}</p>
                <button class="btn-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    calculateCartTotal();
}

function calculateCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    
    updateCartSummary(subtotal, tax, total);
}

function updateCartSummary(subtotal, tax, total) {
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalWithTax = (total * 1.1).toFixed(2);
    
    alert(`Order Summary:\n\nItems: ${cart.length}\nTotal: $${totalWithTax}\n\nThank you for your order!\n\nThis is a demo version. In a real application, you would proceed to payment processing.`);
    
    // Clear cart after checkout
    cart = [];
    saveCart();
    displayCart();
}

// ==================== HERO SLIDER ====================
function initializeSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('sliderDots');
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    // Auto-play slider
    setInterval(() => changeSlide(1), 5000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// ==================== HELPER FUNCTIONS ====================
function scrollToProducts() {
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeProductModal();
    }
};
