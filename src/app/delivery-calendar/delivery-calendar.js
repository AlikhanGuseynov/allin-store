export default function deliveryCalendar(){
    // Sample data - this would normally come from the backend
    const deliveries = [
        {
            id: 1,
            date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), // Tomorrow
            status: 'active',
            timeWindow: '5:00 AM – 8:00 AM',
            driverEta: null,
            items: [
                { id: 1, name: 'Organic Milk', quantity: 2, price: 2.99 },
                { id: 3, name: 'Organic Bananas', quantity: 1, price: 1.99 },
                { id: 7, name: 'Fresh Croissants', quantity: 3, price: 5.99 }
            ]
        },
        {
            id: 2,
            date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4), // 4 days from now
            status: 'active',
            timeWindow: '5:00 AM – 8:00 AM',
            driverEta: null,
            items: [
                { id: 1, name: 'Organic Milk', quantity: 2, price: 2.99 },
                { id: 3, name: 'Organic Bananas', quantity: 1, price: 1.99 },
                { id: 4, name: 'Fresh Spinach', quantity: 1, price: 2.49 }
            ]
        },
        {
            id: 3,
            date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7), // 7 days from now
            status: 'active',
            timeWindow: '5:00 AM – 8:00 AM',
            driverEta: null,
            items: [
                { id: 1, name: 'Organic Milk', quantity: 2, price: 2.99 },
                { id: 3, name: 'Organic Bananas', quantity: 1, price: 1.99 },
                { id: 5, name: 'Sparkling Water', quantity: 2, price: 1.29 }
            ]
        },
        {
            id: 4,
            date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 10), // 10 days from now
            status: 'active',
            timeWindow: '5:00 AM – 8:00 AM',
            driverEta: null,
            items: [
                { id: 1, name: 'Organic Milk', quantity: 2, price: 2.99 },
                { id: 3, name: 'Organic Bananas', quantity: 1, price: 1.99 },
                { id: 6, name: 'Granola', quantity: 1, price: 4.99 }
            ]
        }
    ];

    const addOnSuggestions = [
        {
            id: 101,
            name: 'Fresh Croissants',
            description: 'Buttery fresh-baked croissants',
            price: 5.99,
            image: `<svg class="w-full h-24 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
        },
        {
            id: 102,
            name: 'Fresh Orange Juice',
            description: 'Freshly squeezed orange juice',
            price: 3.99,
            image: `<svg class="w-full h-24 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`
        },
        {
            id: 103,
            name: 'Seasonal Berries',
            description: 'Mix of fresh seasonal berries',
            price: 6.99,
            image: `<svg class="w-full h-24 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>`
        }
    ];

    // DOM Elements
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const deliveryDrawer = document.getElementById('delivery-drawer');
    const closeDrawerButton = document.getElementById('close-drawer');
    const drawerDateElement = document.getElementById('drawer-date');
    const deliveryStatusElement = document.getElementById('delivery-status');
    const deliveryTimeElement = document.getElementById('delivery-time');
    const driverEtaElement = document.getElementById('driver-eta');
    const deliveryItemsElement = document.getElementById('delivery-items');
    const deliveryTotalElement = document.getElementById('delivery-total');
    const pauseButton = document.getElementById('pause-btn');
    const rescheduleButton = document.getElementById('reschedule-btn');
    const rescheduleModal = document.getElementById('reschedule-modal');
    const closeRescheduleModalButton = document.getElementById('close-reschedule-modal');
    const rescheduleDateInput = document.getElementById('reschedule-date');
    const cancelRescheduleButton = document.getElementById('cancel-reschedule');
    const confirmRescheduleButton = document.getElementById('confirm-reschedule');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmTitleElement = document.getElementById('confirm-title');
    const confirmMessageElement = document.getElementById('confirm-message');
    const closeConfirmModalButton = document.getElementById('close-confirm-modal');
    const cancelConfirmButton = document.getElementById('cancel-confirm');
    const proceedConfirmButton = document.getElementById('proceed-confirm');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const addonSuggestionsContainer = document.getElementById('addon-suggestions');
    const nextDeliveryDateElement = document.getElementById('next-delivery-date');

    // State
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let selectedDeliveryId = null;
    let confirmAction = null;

    // Initialize the page
    function initPage() {
        renderCalendar();
        renderAddOnSuggestions();
        updateNextDeliveryDate();
        setupEventListeners();
        startCountdown();
    }

    // Render the calendar for the current month
    function renderCalendar() {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

        // Update month display
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;

        // Clear existing calendar
        calendarGrid.innerHTML = '';

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty p-2 text-center text-gray-400';
            calendarGrid.appendChild(emptyDay);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day p-2 text-center border border-gray-100 rounded-lg';

            // Check if this day is today
            const today = new Date();
            if (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()) {
                dayElement.classList.add('today');
            }

            // Check if this day has a delivery
            const delivery = deliveries.find(d =>
                d.date.getDate() === date.getDate() &&
                d.date.getMonth() === date.getMonth() &&
                d.date.getFullYear() === date.getFullYear()
            );

            if (delivery) {
                dayElement.classList.add('has-delivery');
                dayElement.classList.add(`${delivery.status}-delivery`);
                dayElement.dataset.deliveryId = delivery.id;

                // Add a click event to show delivery details
                dayElement.addEventListener('click', () => {
                    showDeliveryDetails(delivery.id);
                });
            }

            dayElement.textContent = day;
            calendarGrid.appendChild(dayElement);
        }
    }

    // Show delivery details in the drawer
    function showDeliveryDetails(deliveryId) {
        const delivery = deliveries.find(d => d.id === deliveryId);
        if (!delivery) return;

        selectedDeliveryId = deliveryId;

        // Format date
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = delivery.date.toLocaleDateString('en-US', options);

        // Update drawer content
        drawerDateElement.textContent = formattedDate;

        // Update status badge
        deliveryStatusElement.textContent = delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1);
        deliveryStatusElement.className = 'px-2 py-1 text-xs font-semibold rounded-full';

        if (delivery.status === 'active') {
            deliveryStatusElement.classList.add('bg-green-100', 'text-green-800');
        } else if (delivery.status === 'paused') {
            deliveryStatusElement.classList.add('bg-red-100', 'text-red-800');
        } else if (delivery.status === 'rescheduled') {
            deliveryStatusElement.classList.add('bg-slate-100', 'text-slate-800');
        }

        deliveryTimeElement.textContent = delivery.timeWindow;
        driverEtaElement.textContent = delivery.driverEta || 'Not available yet';

        // Update items list
        deliveryItemsElement.innerHTML = '';
        delivery.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex justify-between items-center';
            itemElement.innerHTML = `
                    <span>${item.quantity}x ${item.name}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                `;
            deliveryItemsElement.appendChild(itemElement);
        });

        // Update total
        const total = delivery.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        deliveryTotalElement.textContent = `$${total.toFixed(2)}`;

        // Disable buttons for past deliveries
        const isPastDelivery = delivery.date < new Date();
        pauseButton.disabled = isPastDelivery;
        rescheduleButton.disabled = isPastDelivery;

        if (isPastDelivery) {
            pauseButton.classList.add('opacity-50', 'cursor-not-allowed');
            rescheduleButton.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            pauseButton.classList.remove('opacity-50', 'cursor-not-allowed');
            rescheduleButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        // Open drawer
        deliveryDrawer.classList.remove('closed');
        deliveryDrawer.classList.add('open');
    }

    // Render add-on suggestions
    function renderAddOnSuggestions() {
        addonSuggestionsContainer.innerHTML = '';

        addOnSuggestions.forEach(addon => {
            const addonElement = document.createElement('div');
            addonElement.className = 'bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition';

            addonElement.innerHTML = `
                    <div class="p-4">
                        <div class="relative">
                            <div class="absolute top-0 right-0">
                                <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flash-badge">FLASH</span>
                            </div>
                            ${addon.image}
                        </div>
                        <h4 class="font-semibold text-gray-800 mt-2">${addon.name}</h4>
                        <p class="text-sm text-gray-600 mb-2">${addon.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-green-600">$${addon.price.toFixed(2)}</span>
                            <button class="add-addon-btn bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-lg transition" data-id="${addon.id}">
                                Add to Next Delivery
                            </button>
                        </div>
                    </div>
                `;

            addonSuggestionsContainer.appendChild(addonElement);
        });
    }

    // Update next delivery date in the sidebar
    function updateNextDeliveryDate() {
        // Find the next active delivery
        const activeDeliveries = deliveries.filter(d => d.status === 'active');
        const futureDeliveries = activeDeliveries.filter(d => d.date > new Date());

        if (futureDeliveries.length > 0) {
            // Sort by date
            futureDeliveries.sort((a, b) => a.date - b.date);
            const nextDelivery = futureDeliveries[0];

            // Format date
            const options = { weekday: 'short', month: 'short', day: 'numeric' };
            const formattedDate = nextDelivery.date.toLocaleDateString('en-US', options);

            nextDeliveryDateElement.textContent = formattedDate;
        } else {
            nextDeliveryDateElement.textContent = 'No upcoming deliveries';
        }
    }

    // Start countdown timer for add-ons
    function startCountdown() {
        // Set the target time to 10 PM today
        const now = new Date();
        const target = new Date();
        target.setHours(22, 0, 0, 0); // 10 PM

        // If it's already past 10 PM, set target to tomorrow
        if (now > target) {
            target.setDate(target.getDate() + 1);
        }

        function updateCountdown() {
            const now = new Date();
            const diff = target - now;

            if (diff <= 0) {
                // Reset target to next day at 10 PM
                target.setDate(target.getDate() + 1);
                updateCountdown();
                return;
            }

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            const countdownElement = document.getElementById('order-countdown');
            countdownElement.textContent = `Order by 10 PM: ${hours}h ${minutes}m left for tomorrow!`;
        }

        // Update immediately and then every minute
        updateCountdown();
        setInterval(updateCountdown, 60000);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Previous month button
        prevMonthButton.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });

        // Next month button
        nextMonthButton.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });

        // Close drawer button
        closeDrawerButton.addEventListener('click', () => {
            deliveryDrawer.classList.remove('open');
            deliveryDrawer.classList.add('closed');
            selectedDeliveryId = null;
        });

        // Pause button
        pauseButton.addEventListener('click', () => {
            if (!selectedDeliveryId) return;

            confirmTitleElement.textContent = 'Pause Delivery';
            confirmMessageElement.textContent = 'Are you sure you want to pause this delivery? Paused deliveries will be skipped, and your subscription will resume the next scheduled day.';
            confirmAction = 'pause';
            confirmModal.classList.remove('hidden');
        });

        // Reschedule button
        rescheduleButton.addEventListener('click', () => {
            if (!selectedDeliveryId) return;

            const delivery = deliveries.find(d => d.id === selectedDeliveryId);
            if (!delivery) return;

            // Set min date to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const formattedTomorrow = tomorrow.toISOString().split('T')[0];
            rescheduleDateInput.min = formattedTomorrow;

            // Set default value to delivery date
            const formattedDeliveryDate = delivery.date.toISOString().split('T')[0];
            rescheduleDateInput.value = formattedDeliveryDate;

            rescheduleModal.classList.remove('hidden');
        });

        // Close reschedule modal
        closeRescheduleModalButton.addEventListener('click', () => {
            rescheduleModal.classList.add('hidden');
        });

        // Cancel reschedule
        cancelRescheduleButton.addEventListener('click', () => {
            rescheduleModal.classList.add('hidden');
        });

        // Confirm reschedule
        confirmRescheduleButton.addEventListener('click', () => {
            const newDate = new Date(rescheduleDateInput.value);

            if (isNaN(newDate.getTime())) {
                showToast('Please select a valid date', 'error');
                return;
            }

            rescheduleModal.classList.add('hidden');

            confirmTitleElement.textContent = 'Confirm Reschedule';
            confirmMessageElement.textContent = `Are you sure you want to reschedule this delivery to ${newDate.toLocaleDateString()}?`;
            confirmAction = 'reschedule';
            confirmModal.classList.remove('hidden');
        });

        // Close confirm modal
        closeConfirmModalButton.addEventListener('click', () => {
            confirmModal.classList.add('hidden');
        });

        // Cancel confirm
        cancelConfirmButton.addEventListener('click', () => {
            confirmModal.classList.add('hidden');
        });

        // Proceed with confirm
        proceedConfirmButton.addEventListener('click', () => {
            confirmModal.classList.add('hidden');

            if (confirmAction === 'pause') {
                pauseDelivery();
            } else if (confirmAction === 'reschedule') {
                rescheduleDelivery();
            }
        });

        // Add add-on buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-addon-btn')) {
                const addonId = parseInt(e.target.dataset.id);
                addAddonToNextDelivery(addonId);
            }
        });
    }

    // Pause delivery
    function pauseDelivery() {
        if (!selectedDeliveryId) return;

        const deliveryIndex = deliveries.findIndex(d => d.id === selectedDeliveryId);
        if (deliveryIndex === -1) return;

        deliveries[deliveryIndex].status = 'paused';

        // Update UI
        renderCalendar();
        updateNextDeliveryDate();
        showToast('Delivery paused successfully');

        // Close drawer
        deliveryDrawer.classList.remove('open');
        deliveryDrawer.classList.add('closed');
        selectedDeliveryId = null;
    }

    // Reschedule delivery
    function rescheduleDelivery() {
        if (!selectedDeliveryId) return;

        const deliveryIndex = deliveries.findIndex(d => d.id === selectedDeliveryId);
        if (deliveryIndex === -1) return;

        const newDate = new Date(rescheduleDateInput.value);

        if (isNaN(newDate.getTime())) {
            showToast('Please select a valid date', 'error');
            return;
        }

        deliveries[deliveryIndex].date = newDate;
        deliveries[deliveryIndex].status = 'rescheduled';

        // Update UI
        renderCalendar();
        updateNextDeliveryDate();
        showToast('Delivery rescheduled successfully');

        // Close drawer
        deliveryDrawer.classList.remove('open');
        deliveryDrawer.classList.add('closed');
        selectedDeliveryId = null;
    }

    // Add add-on to next delivery
    function addAddonToNextDelivery(addonId) {
        // Find the next active delivery
        const activeDeliveries = deliveries.filter(d => d.status === 'active');
        const futureDeliveries = activeDeliveries.filter(d => d.date > new Date());

        if (futureDeliveries.length === 0) {
            showToast('No upcoming deliveries found', 'error');
            return;
        }

        // Sort by date
        futureDeliveries.sort((a, b) => a.date - b.date);
        const nextDelivery = futureDeliveries[0];

        // Find the add-on
        const addon = addOnSuggestions.find(a => a.id === addonId);
        if (!addon) return;

        // Check if the add-on is already in the delivery
        const existingItemIndex = nextDelivery.items.findIndex(item => item.id === addonId);

        if (existingItemIndex !== -1) {
            // Increment quantity if already exists
            nextDelivery.items[existingItemIndex].quantity++;
        } else {
            // Add new item
            nextDelivery.items.push({
                id: addon.id,
                name: addon.name,
                quantity: 1,
                price: addon.price
            });
        }

        // Show success message
        showToast(`Added ${addon.name} to your next delivery`);
    }

    // Show toast notification
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');

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
}
