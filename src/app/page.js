document.addEventListener('DOMContentLoaded', function () {
    // Logo animation
    const logoLetters = document.querySelectorAll('.logo-letter');
    logoLetters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
            letter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 100 * index);
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-cream-white', 'bg-opacity-80', 'shadow-md');
        } else {
            header.classList.remove('bg-cream-white', 'bg-opacity-80', 'shadow-md');
        }
    });

    // Parallax effect
    const parallaxItems = document.querySelectorAll('.parallax-item');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        parallaxItems.forEach(item => {
            const speed = 20;
            const xPos = (x - 0.5) * speed;
            const yPos = (y - 0.5) * speed;
            item.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });

    // Countdown timer
    function updateCountdown() {
        const countdownEl = document.getElementById('countdown');
        let [hours, minutes, seconds] = countdownEl.textContent.split(':').map(Number);

        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 2;
                    minutes = 43;
                    seconds = 21;
                }
            }
        }

        countdownEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    setInterval(updateCountdown, 1000);

    // Modal functionality
    const packModal = document.getElementById('packModal');
    const milkModal = document.getElementById('milkModal');
    const buildPackBtn = document.getElementById('buildPackBtn');
    const buildFirstPackBtn = document.getElementById('buildFirstPackBtn');
    const closeModal = document.getElementById('closeModal');
    const closeMilkModalBtns = document.querySelectorAll('.close-milk-modal');

    function openPackModal() {
        packModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePackModal() {
        packModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMilkModal() {
        milkModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMilkModal() {
        milkModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    buildPackBtn.addEventListener('click', openPackModal);
    buildFirstPackBtn.addEventListener('click', openPackModal);
    closeModal.addEventListener('click', closePackModal);

    closeMilkModalBtns.forEach(btn => {
        btn.addEventListener('click', closeMilkModal);
    });

    // Pack card buttons
    const packButtons = document.querySelectorAll('[data-pack]');
    packButtons.forEach(btn => {
        btn.addEventListener('click', openPackModal);
    });

    // Milk click event
    const milkIcons = document.querySelectorAll('.header-icon:nth-child(3)');
    milkIcons.forEach(icon => {
        icon.addEventListener('click', openMilkModal);
    });

    // Burger menu
    const burgerMenu = document.getElementById('burgerMenu');
    const closeMenu = document.getElementById('closeMenu');
    const radialMenu = document.getElementById('radialMenu');

    burgerMenu.addEventListener('click', () => {
        radialMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        radialMenu.classList.remove('open');
    });

    // Legal links toggle
    const legalToggle = document.getElementById('legalToggle');
    const legalLinks = document.getElementById('legalLinks');

    legalToggle.addEventListener('click', () => {
        legalLinks.classList.toggle('hidden');
    });

    // Clock animation
    function animateClock() {
        const hourHand = document.getElementById('hourHand');
        const minuteHand = document.getElementById('minuteHand');

        if (hourHand && minuteHand) {
            let hour = 0;
            let minute = 0;

            setInterval(() => {
                minute = (minute + 6) % 360;
                if (minute === 0) {
                    hour = (hour + 30) % 360;
                }

                hourHand.setAttribute('x2', 50 + 15 * Math.sin(hour * Math.PI / 180));
                hourHand.setAttribute('y2', 50 - 15 * Math.cos(hour * Math.PI / 180));

                minuteHand.setAttribute('x2', 50 + 25 * Math.sin(minute * Math.PI / 180));
                minuteHand.setAttribute('y2', 50 - 25 * Math.cos(minute * Math.PI / 180));
            }, 1000);
        }
    }

    animateClock();

    // Mini-cart follow cursor (desktop only)
    const miniCart = document.querySelector('.fixed-cta');
    if (window.innerWidth > 768 && miniCart) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // Add some delay and smoothing
            setTimeout(() => {
                miniCart.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(0.7)`;
            }, 100);
        });
    }
});
(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'94057b0974f9e3a6',t:'MTc0NzM0MTk0My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
