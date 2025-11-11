// Mobile sidebar menu and SPA navigation logic
export function initMobileNav() {
    let hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('mobile-sidebar');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarLinks = sidebar ? sidebar.querySelectorAll('.nav-link') : [];

    if (hamburger && sidebar) {
        // Remove previous event listeners by cloning (prevents stacking)
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        hamburger = newHamburger;
        let hamburgerIcon = hamburger.querySelector('i');

        hamburger.addEventListener('click', () => {
            sidebar.classList.add('active');
            if (hamburgerIcon) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-times');
            }
            document.body.classList.add('sidebar-open');
        });

        // Close sidebar on close button
        if (sidebarClose) {
            sidebarClose.addEventListener('click', () => {
                sidebar.classList.remove('active');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.add('fa-bars');
                    hamburgerIcon.classList.remove('fa-times');
                }
                document.body.classList.remove('sidebar-open');
            });
        }

        // Close sidebar when a nav link is clicked
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.add('fa-bars');
                    hamburgerIcon.classList.remove('fa-times');
                }
                document.body.classList.remove('sidebar-open');
            });
        });
    }

    // SPA-like smooth scroll and section highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.location.hash = href;
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    function highlightActiveLink() {
        const hash = window.location.hash || '#home';
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
    }
    window.addEventListener('hashchange', highlightActiveLink);
    highlightActiveLink();
}