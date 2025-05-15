export default function initSummaryPage() {
    let packItems = [
        {
            id: 1,
            name: "Organic Milk",
            image: `<svg class="w-full h-16 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 5h4v2h-4V5z"></path></svg>`,
            price: 2.99,
            quantity: 2
        },
        {
            id: 3,
            name: "Organic Bananas",
            image: `<svg class="w-full h-16 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8V3M9 11l-7-7M15 11l7-7"></path></svg>`,
            price: 1.99,
            quantity: 1
        },
        {
            id: 7,
            name: "Fresh Croissants",
            image: `<svg class="w-full h-16 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
            price: 5.99,
            quantity: 3
        }
    ];

    // DOM Elements
    const packItemsContainer = document.getElementById('pack-items-container');
    const packItemsList = document.getElementById('pack-items');
    const emptyPackMessage = document.getElementById('empty-pack-message');
    const subtotalElement = document.getElementById('subtotal');
    const weeklyPriceElement = document.getElementById('weekly-price');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const frequencySelect = document.getElementById('frequency');
    const firstDeliveryInput = document.getElementById('first-delivery');

    // Initialize the page
    function initPage() {
        renderPackItems();
        calculateTotals();
        setupEventListeners();
        setupDatePicker();
    }

    // Setup date picker with minimum date as tomorrow
    function setupDatePicker() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate = tomorrow.toISOString().split('T')[0];
        firstDeliveryInput.min = formattedDate;
        firstDeliveryInput.value = formattedDate;
    }

    // Render pack items
    function renderPackItems() {
        if (packItems.length === 0) {
            emptyPackMessage.classList.remove('hidden');
            packItemsList.classList.add('hidden');
        } else {
            emptyPackMessage.classList.add('hidden');
            packItemsList.classList.remove('hidden');

            // Clear existing items
            packItemsList.innerHTML = '';

            // Add each item
            packItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition';
                itemElement.dataset.id = item.id;

                itemElement.innerHTML = `
                        <div class="flex items-center">
                            <div class="w-16 h-16 mr-4">
                                ${item.image}
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">${item.name}</h4>
                                <p class="text-sm text-gray-500">$${item.price.toFixed(2)} each</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center border rounded-lg overflow-hidden mr-4">
                                <button class="quantity-btn minus px-2 py-1 bg-gray-100 hover:bg-gray-200 transition" data-id="${item.id}">-</button>
                                <input type="number" min="1" value="${item.quantity}" class="quantity-input w-10 text-center border-none focus:outline-none" data-id="${item.id}">
                                <button class="quantity-btn plus px-2 py-1 bg-gray-100 hover:bg-gray-200 transition" data-id="${item.id}">+</button>
                            </div>
                            <div class="text-right">
                                <p class="font-semibold text-gray-800">$${(item.price * item.quantity).toFixed(2)}</p>
                                <button class="remove-btn text-sm text-red-500 hover:text-red-700 transition" data-id="${item.id}">Remove</button>
                            </div>
                        </div>
                    `;

                packItemsList.appendChild(itemElement);
            });
        }
    }

    // Calculate subtotal and weekly price
    function calculateTotals() {
        const subtotal = packItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

        // Calculate weekly price based on frequency
        let multiplier = 1;
        switch (frequencySelect.value) {
            case 'daily':
                multiplier = 7;
                break;
            case '3days':
                multiplier = 2.33; // 7/3 days per week
                break;
            case 'weekly':
                multiplier = 1;
                break;
        }

        const weeklyPrice = subtotal * multiplier;
        weeklyPriceElement.textContent = `$${weeklyPrice.toFixed(2)}`;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Quantity buttons and Remove (using event delegation)
        packItemsContainer.addEventListener('click', (e) => {
            // Minus button
            if (e.target.classList.contains('minus')) {
                const productId = parseInt(e.target.dataset.id);
                const inputEl = document.querySelector(`.quantity-input[data-id="${productId}"]`);
                if (inputEl.value > 1) {
                    inputEl.value = parseInt(inputEl.value) - 1;
                    updateItemQuantity(productId, parseInt(inputEl.value));
                }
            }

            // Plus button
            if (e.target.classList.contains('plus')) {
                const productId = parseInt(e.target.dataset.id);
                const inputEl = document.querySelector(`.quantity-input[data-id="${productId}"]`);
                inputEl.value = parseInt(inputEl.value) + 1;
                updateItemQuantity(productId, parseInt(inputEl.value));
            }

            // Remove button
            if (e.target.classList.contains('remove-btn')) {
                const productId = parseInt(e.target.dataset.id);
                removeItem(productId);
            }
        });

        // Quantity input change
        packItemsContainer.addEventListener('change', (e) => {
            if (e.target.classList.contains('quantity-input')) {
                const productId = parseInt(e.target.dataset.id);
                const quantity = parseInt(e.target.value);
                if (quantity > 0) {
                    updateItemQuantity(productId, quantity);
                } else {
                    e.target.value = 1;
                    updateItemQuantity(productId, 1);
                }
            }
        });

        // Frequency change
        frequencySelect.addEventListener('change', () => {
            calculateTotals();
        });

        // Subscribe button
        subscribeBtn.addEventListener('click', () => {
            // Check if user is logged in (simulated)
            const isLoggedIn = true; // This would be determined by your auth system

            if (!isLoggedIn) {
                showLoginModal();
                return;
            }

            // Validate form
            if (validateForm()) {
                saveSubscription();
            }
        });

        // Close modal button
        closeModalBtn.addEventListener('click', () => {
            loginModal.classList.add('hidden');
        });
    }

    // Update item quantity
    function updateItemQuantity(productId, quantity) {
        const itemIndex = packItems.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            packItems[itemIndex].quantity = quantity;
            renderPackItems();
            calculateTotals();
        }
    }

    // Remove item from pack
    function removeItem(productId) {
        packItems = packItems.filter(item => item.id !== productId);
        renderPackItems();
        calculateTotals();
    }

    // Show login modal
    function showLoginModal() {
        loginModal.classList.remove('hidden');
    }

    // Validate form
    function validateForm() {
        const fullName = document.getElementById('full-name').value;
        const phone = document.getElementById('phone').value;
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const zip = document.getElementById('zip').value;

        if (!fullName || !phone || !street || !city || !zip) {
            showToast('Please fill in all required fields', 'error');
            return false;
        }

        if (packItems.length === 0) {
            showToast('Your pack is empty. Please add some products.', 'error');
            return false;
        }

        return true;
    }

    // Save subscription
    function saveSubscription() {
        // This would normally send data to your backend
        const subscriptionData = {
            packItems: packItems,
            packName: document.getElementById('pack-name').value || 'My Weekly Essentials',
            frequency: frequencySelect.value,
            firstDelivery: firstDeliveryInput.value,
            deliveryAddress: {
                fullName: document.getElementById('full-name').value,
                phone: document.getElementById('phone').value,
                street: document.getElementById('street').value,
                apartment: document.getElementById('apartment').value,
                city: document.getElementById('city').value,
                zip: document.getElementById('zip').value,
                saveForFuture: document.getElementById('save-address').checked
            }
        };

        console.log('Subscription data:', subscriptionData);

        // Show success message
        showToast('Your pack is saved and subscription is active!');

        // In a real app, you would redirect after successful API call
        setTimeout(() => {
            // window.location.href = '/dashboard';
        }, 2000);
    }

    // Show toast notification
    function showToast(message, type = 'success') {
        toastMessage.textContent = message;

        if (type === 'error') {
            toast.classList.remove('bg-green-500');
            toast.classList.add('bg-red-500');
        } else {
            toast.classList.remove('bg-red-500');
            toast.classList.add('bg-green-500');
        }

        toast.style.animation = 'none';
        void toast.offsetWidth; // Trigger reflow
        toast.style.animation = 'slideIn 0.3s ease-out forwards, fadeOut 0.5s 3s forwards';
    }

    // Initialize the page
    initPage();
    (function () {
        function c() {
            var b = a.contentDocument || a.contentWindow.document;
            if (b) {
                var d = b.createElement('script');
                d.innerHTML = "window.__CF$cv$params={r:'9405d3355245d4df',t:'MTc0NzM0NTU1NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
