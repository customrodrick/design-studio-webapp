import './styles/indexStyles.css';
import { initMobileNav } from './scripts/mobile-nav.js';
import home from './pages/home.js';
import benefits from './pages/benefits.js';
import services from './pages/services.js';
import membership from './pages/membership.js';
import portfolio from './pages/portfolio.js';
import components from './pages/components.js';
import support from './pages/support.js';
import team from './pages/team.js';
import affiliations from './pages/affiliations.js';
import about from './pages/about.js';
import { membershipCard } from './modules/membership-card.js';

const navbar = `
  <nav class="navbar">
    <div class="container navbar-container">
      <div class="navbar-left">
        <a href="#home" class="navbar-logo-link">
          <img src="/src/images/omni.png" alt="mubas Logo" class="navbar-logo-img" />
          <span class="navbar-title">Design<span class="highlight">Studio</span></span>
        </a>
      </div>
      <div class="nav-links">
        <a href="#benefits" class="nav-link">Benefits</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#membership" class="nav-link">Membership</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#components" class="nav-link">Components</a>
        <a href="#team" class="nav-link">Team</a>
      </div>
      <div class="auth-buttons">
        <a href="Authentication/investor/login.html" class="auth-button login">Register</a>
        <a href="intro/disclaimer.html" class="auth-button signup"><i class="fas fa-sign-in"></i></a>
        <div class="hamburger" id="hamburger">
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <div class="mobile-sidebar" id="mobile-sidebar">
        <div class="sidebar-content">
          <button class="sidebar-close" id="sidebar-close" aria-label="Close navigation">
            <i class="fas fa-times"></i>
          </button>
          <nav class="sidebar-nav">
            <a href="#benefits" class="nav-link">Benefits</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#membership" class="nav-link">Membership</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#components" class="nav-link">Components</a>
            <a href="#team" class="nav-link">Team</a>
          </nav>
        </div>
      </div>
    </div>
  </nav>
`;

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML =
    navbar +
    home +
    benefits +
    services +
    membership +
    portfolio +
    components +
    support +
    // team +
    // affiliations +
    about;

  // Run benefit-card logic for the benefits section
  import('./modules/benefit-card.js');
  import('./modules/service-card.js');

  // initialise membership card function
  membershipCard();

  // Initialize mobile nav after DOM is updated
  initMobileNav();
});