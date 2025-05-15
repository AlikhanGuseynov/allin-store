export default function initProductsPage() {
    // Sample product data
    const products = [
        {
            id: 1,
            name: "Organic Milk",
            category: "dairy",
            image: `<svg class="w-full h-32 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 5h4v2h-4V5z"></path></svg>`,
            description: "Fresh organic whole milk",
            price: 2.99,
            stock: 50,
            isFlashAddOn: false,
            rating: 4.8,
            isBestseller: true,
            isOrganic: true
        },
        {
            id: 2,
            name: "Whole Wheat Bread",
            category: "bakery",
            image: `<svg class="w-full h-32 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 10h16M4 14h16"></path></svg>`,
            description: "Freshly baked whole wheat bread",
            price: 3.49,
            stock: 30,
            isFlashAddOn: false,
            rating: 4.5,
            isBestseller: false,
            isOrganic: false
        },
        {
            id: 3,
            name: "Organic Bananas",
            category: "fruits",
            image: `<svg class="w-full h-32 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8V3M9 11l-7-7M15 11l7-7"></path></svg>`,
            description: "Bunch of organic bananas",
            price: 1.99,
            stock: 40,
            isFlashAddOn: false,
            rating: 4.7,
            isBestseller: true,
            isOrganic: true
        },
        {
            id: 4,
            name: "Fresh Spinach",
            category: "vegetables",
            image: `<svg class="w-full h-32 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
            description: "Fresh organic spinach leaves",
            price: 2.49,
            stock: 25,
            isFlashAddOn: false,
            rating: 4.3,
            isBestseller: false,
            isOrganic: true
        },
        {
            id: 5,
            name: "Sparkling Water",
            category: "beverages",
            image: `<svg class="w-full h-32 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
            description: "Refreshing sparkling water",
            price: 1.29,
            stock: 60,
            isFlashAddOn: false,
            rating: 4.2,
            isBestseller: false,
            isOrganic: false
        },
        {
            id: 6,
            name: "Granola",
            category: "others",
            image: `<svg class="w-full h-32 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,
            description: "Crunchy homemade granola",
            price: 4.99,
            stock: 20,
            isFlashAddOn: false,
            rating: 4.6,
            isBestseller: true,
            isOrganic: false
        },
        {
            id: 7,
            name: "Fresh Croissants",
            category: "bakery",
            image: `<svg class="w-full h-32 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
            description: "Buttery fresh-baked croissants",
            price: 5.99,
            stock: 15,
            isFlashAddOn: true,
            flashEndsIn: 3600, // seconds
            rating: 4.9,
            isBestseller: true,
            isOrganic: false
        },
        {
            id: 8,
            name: "Fresh Orange Juice",
            category: "beverages",
            image: `<svg class="w-full h-32 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
            description: "Freshly squeezed orange juice",
            price: 3.99,
            stock: 25,
            isFlashAddOn: true,
            flashEndsIn: 7200, // seconds
            rating: 4.7,
            isBestseller: false,
            isOrganic: true
        },
        {
            id: 9,
            name: "Seasonal Berries",
            category: "fruits",
            image: `<svg class="w-full h-32 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>`,
            description: "Mix of fresh seasonal berries",
            price: 6.99,
            stock: 10,
            isFlashAddOn: true,
            flashEndsIn: 5400, // seconds
            rating: 4.8,
            isBestseller: true,
            isOrganic: true
        }
    ];

// State management
    let packItems = [];
    let currentCategory = 'all';
    let searchTerm = '';

// DOM Elements
    const productGrid = document.getElementById('product-grid');
    const flashProductsSection = document.getElementById('flash-products');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const packCountElement = document.getElementById('pack-count');

// Initialize the page
    function initPage() {
        renderProducts();
        setupEventListeners();
        startFlashTimers();
    }

// Render products based on filters
    function renderProducts() {
        // Clear existing products
        productGrid.innerHTML = '';
        flashProductsSection.innerHTML = '';

        // Filter products
        const filteredProducts = products.filter(product => {
            const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
            const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            return categoryMatch && searchMatch;
        });

        // Separate flash add-ons and regular products
        const flashProducts = filteredProducts.filter(product => product.isFlashAddOn);
        const regularProducts = filteredProducts.filter(product => !product.isFlashAddOn);

        // Render flash products
        flashProducts.forEach(product => {
            const productCard = createProductCard(product, true);
            flashProductsSection.appendChild(productCard);
        });

        // Hide flash section if no flash products
        const flashSection = document.querySelector('section:first-of-type');
        flashSection.style.display = flashProducts.length > 0 ? 'block' : 'none';

        // Render regular products
        regularProducts.forEach(product => {
            const productCard = createProductCard(product, false);
            productGrid.appendChild(productCard);
        });
    }

// Create a product card element
    function createProductCard(product, isFlash) {
        const card = document.createElement('div');
        card.className = 'product-card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300';
        card.dataset.id = product.id;

        // Check if product is in pack
        const inPack = packItems.some(item => item.id === product.id);

        let badgeHTML = '';
        if (isFlash) {
            badgeHTML = `
                    <div class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flash-badge flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                        </svg>
                        FLASH
                    </div>
                    <div class="absolute top-10 right-3 bg-white bg-opacity-80 text-xs font-bold px-2 py-1 rounded-full timer" data-ends-in="${product.flashEndsIn}">
                        ${formatTime(product.flashEndsIn)}
                    </div>
                `;
        } else {
            if (product.isBestseller) {
                badgeHTML += `
                        <div class="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Bestseller
                        </div>
                    `;
            }
        }

        if (product.isOrganic) {
            badgeHTML += `
                    <div class="absolute top-${product.isBestseller ? '10' : '3'} ${product.isBestseller ? 'right-3' : 'left-3'} bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Organic
                    </div>
                `;
        }

        card.innerHTML = `
                <div class="relative p-4">
                    ${badgeHTML}
                    <div class="mb-4">
                        ${product.image}
                    </div>
                    <h3 class="font-bold text-gray-800">${product.name}</h3>
                    <p class="text-sm text-gray-600 mb-2">${product.description}</p>
                    <div class="flex items-center mb-2">
                        ${renderStars(product.rating)}
                        <span class="text-xs text-gray-500 ml-1">(${product.rating})</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-green-600">$${product.price.toFixed(2)}</span>
                        <div class="flex items-center">
                            <div class="flex items-center border rounded-l-lg overflow-hidden">
                                <button class="quantity-btn minus px-2 py-1 bg-gray-100 hover:bg-gray-200 transition" data-id="${product.id}">-</button>
                                <input type="number" min="1" max="${product.stock}" value="${getQuantityInPack(product.id) || 1}" class="quantity-input w-10 text-center border-none focus:outline-none" data-id="${product.id}">
                                <button class="quantity-btn plus px-2 py-1 bg-gray-100 hover:bg-gray-200 transition" data-id="${product.id}">+</button>
                            </div>
                            <button class="add-to-pack-btn ml-2 px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg transition text-sm" data-id="${product.id}">
                                ${inPack ? 'Update Pack' : 'Add to Pack'}
                            </button>
                        </div>
                    </div>
                </div>
            `;

        return card;
    }

// Render star ratings
    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        let starsHTML = '';

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += `<svg class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        }

        // Half star
        if (halfStar) {
            starsHTML += `<svg class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clip-path="inset(0 50% 0 0)"></path></svg>`;
        }

        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += `<svg class="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        }

        return starsHTML;
    }

// Format time for countdown
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

// Get quantity of product in pack
    function getQuantityInPack(productId) {
        const packItem = packItems.find(item => item.id === productId);
        return packItem ? packItem.quantity : 0;
    }

// Setup event listeners
    function setupEventListeners() {
        // Category filter buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentCategory = button.dataset.category;
                renderProducts();
            });
        });

        // Search input
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderProducts();
        });

        // Quantity buttons and Add to Pack (using event delegation)
        document.addEventListener('click', (e) => {
            // Minus button
            if (e.target.classList.contains('minus')) {
                const productId = parseInt(e.target.dataset.id);
                const inputEl = document.querySelector(`.quantity-input[data-id="${productId}"]`);
                if (inputEl.value > 1) {
                    inputEl.value = parseInt(inputEl.value) - 1;
                }
            }

            // Plus button
            if (e.target.classList.contains('plus')) {
                const productId = parseInt(e.target.dataset.id);
                const inputEl = document.querySelector(`.quantity-input[data-id="${productId}"]`);
                const product = products.find(p => p.id === productId);
                if (parseInt(inputEl.value) < product.stock) {
                    inputEl.value = parseInt(inputEl.value) + 1;
                }
            }

            // Add to Pack button
            if (e.target.classList.contains('add-to-pack-btn')) {
                const productId = parseInt(e.target.dataset.id);
                const product = products.find(p => p.id === productId);
                const quantityInput = document.querySelector(`.quantity-input[data-id="${productId}"]`);
                const quantity = parseInt(quantityInput.value);

                addToMyPack(product, quantity);
            }
        });
    }

// Add product to My Pack
    function addToMyPack(product, quantity) {
        // Check if product is already in pack
        const existingItemIndex = packItems.findIndex(item => item.id === product.id);

        if (existingItemIndex >= 0) {
            // Update quantity if already in pack
            packItems[existingItemIndex].quantity = quantity;
            showToast(`Updated ${product.name} quantity in your pack!`);
        } else {
            // Add new item to pack
            packItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
            showToast(`Added ${product.name} to your pack!`);
        }

        // Update pack count
        updatePackCount();

        // Update button text
        const addButton = document.querySelector(`.add-to-pack-btn[data-id="${product.id}"]`);
        if (addButton) {
            addButton.textContent = 'Update Pack';
        }
    }

// Show toast notification
    function showToast(message) {
        toastMessage.textContent = message;
        toast.style.animation = 'none';
        void toast.offsetWidth; // Trigger reflow
        toast.style.animation = 'slideIn 0.3s ease-out forwards, fadeOut 0.5s 2s forwards';
    }

// Update pack count
    function updatePackCount() {
        const totalItems = packItems.reduce((sum, item) => sum + item.quantity, 0);
        packCountElement.textContent = totalItems;
    }

// Start countdown timers for flash products
    function startFlashTimers() {
        setInterval(() => {
            const timerElements = document.querySelectorAll('.timer');
            timerElements.forEach(timer => {
                let timeLeft = parseInt(timer.dataset.endsIn);
                if (timeLeft > 0) {
                    timeLeft--;
                    timer.dataset.endsIn = timeLeft;
                    timer.textContent = formatTime(timeLeft);
                } else {
                    timer.textContent = "Expired!";
                    timer.classList.add('bg-red-500', 'text-white');
                }
            });
        }, 1000);
    }

// Initialize the page
    initPage();
    (function () {
        function c() {
            var b = a.contentDocument || a.contentWindow.document;
            if (b) {
                var d = b.createElement('script');
                d.innerHTML = "window.__CF$cv$params={r:'9405bdf69254d91d',t:'MTc0NzM0NDY4NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
                b.getElementsByTagName('head')[0].appendChild(d)
            }
        }

        if (document.body) {
            var a = document.createElement('iframe');
            a.height = 1;
            a.width = 1;
            a.style.position = 'absolute';
            a.style.top = 0;
            a.style.left = 0;
            a.style.border = 'none';
            a.style.visibility = 'hidden';
            document.body.appendChild(a);
            if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else {
                var e = document.onreadystatechange || function () {
                };
                document.onreadystatechange = function (b) {
                    e(b);
                    'loading' !== document.readyState && (document.onreadystatechange = e, c())
                }
            }
        }
    })();

}
