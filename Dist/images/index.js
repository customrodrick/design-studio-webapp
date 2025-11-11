// Theme and mobile menu logic
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = hamburger ? hamburger.querySelector('i') : null;
    const sidebar = document.getElementById('mobile-sidebar');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarLinks = sidebar ? sidebar.querySelectorAll('.nav-link') : [];

    if (hamburger && mobileMenu && hamburgerIcon) {
        // Toggle mobile menu and icon on hamburger click
        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('show');
            // Switch icon
            hamburgerIcon.classList.toggle('fa-bars', !isOpen);
            hamburgerIcon.classList.toggle('fa-times', isOpen);
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-times');
            });
        });
    }

    if (hamburger && sidebar && hamburgerIcon) {
        // Open sidebar
        hamburger.addEventListener('click', () => {
            sidebar.classList.add('active');
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        });

        // Close sidebar on close button
        if (sidebarClose) {
            sidebarClose.addEventListener('click', () => {
                sidebar.classList.remove('active');
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-times');
            });
        }

        // Close sidebar when a nav link is clicked
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-times');
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

    // Optional: highlight active nav-link based on hash
    function highlightActiveLink() {
        const hash = window.location.hash || '#home';
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
    }
    window.addEventListener('hashchange', highlightActiveLink);
    highlightActiveLink();
});

// Component modal logic
const data = {
    tools: {
        title: "Tools & Workshop Equipment",
        content: `
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Hand Tools</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Screwdrivers (Phillips, flat-head)</li>
              <li>Pliers (needle-nose, cutting)</li>
              <li>Wire strippers, hex keys, wrenches</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Power Tools & Machinery</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Drill press, CNC machine, laser cutter</li>
              <li>Soldering stations, vacuum former</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Diagnostic & Testing Tools</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Multimeter, oscilloscope, logic analyzer</li>
              <li>Bench power supply, cable testers</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Safety & Organization</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Safety goggles, fire extinguishers, ESD tools</li>
              <li>Storage bins, ventilation systems</li>
            </ul>
          </details>
        `
    },
    computing: {
        title: "Computing & Core Equipment",
        content: `
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Workstations</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Desktop PCs, laptops, servers</li>
              <li>Monitors for CAD/simulation</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Networking Gear</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Routers, switches, Ethernet cables</li>
              <li>Wireless access points</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Peripherals</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Keyboards, mice, printers, scanners</li>
              <li>VR/AR headsets</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Software</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Operating systems (Windows, Linux)</li>
              <li>CAD, IDEs, and design suites</li>
            </ul>
          </details>
        `
    },
    electronics: {
        title: "Electronic Components & Microcontrollers",
        content: `
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Processing/Control</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Arduino, ESP32, Raspberry Pi</li>
              <li>FPGAs</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Input Components (Sensors)</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Temperature, light, and proximity sensors</li>
              <li>Accelerometers, gyroscopes, pressure sensors</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Output Components (Actuators)</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Motors, LEDs, displays, speakers</li>
              <li>Solenoids and heaters</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Passive & Interfacing</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Resistors, capacitors, diodes</li>
              <li>PCBs, breadboards, jumper wires</li>
            </ul>
          </details>
        `
    },
    materials: {
        title: "Materials & Consumables",
        content: `
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Fabrication/Prototyping</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>3D printer filament, acrylic sheets</li>
              <li>Vinyl, epoxy, wood sheets</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Construction/Fasteners</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Screws, bolts, glue, cable ties</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Office/Design Supplies</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Post-it notes, scissors, markers</li>
            </ul>
          </details>
          <details class="border rounded-lg p-3">
            <summary class="font-semibold cursor-pointer">Chemicals/Cleaning</summary>
            <ul class="list-disc ml-5 mt-2 text-gray-600">
              <li>Isopropyl Alcohol, solder wire, canned air</li>
            </ul>
          </details>
        `
    }
};
