import './Header.scss';
import siteLogo from '../../assets/site-logo.png';

export function siteHeader(): string {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  return /* html */ `
    <header class="site-header container">
      <div class="logo-box">
        <img src="${siteLogo}" alt="site logo" class="logo-img" />
        <h1 class="title">MiniGames</h1>
      </div>

      <nav class="nav">
        <ul class="nav-list">
          <li><a href="/" class="nav-link active">Home</a></li>
          <li><a href="/404" class="nav-link">Library</a></li>
          <li><a href="/404" class="nav-link">Tournaments</a></li>
          <li><a href="/404" class="nav-link">Community</a></li>
        </ul>
      </nav>

      <div class="header-btn-wrap">
      <a href="/login" data-auth-open="login" class="log-in btn ${isLoggedIn ? 'is-hidden' : ''}">Log in</a>
      <a href="/signup" data-auth-open="signup" class="sign-up btn ${isLoggedIn ? 'is-hidden' : ''}">Sign up</a>
      </div>

      <button class="burger-btn" id="burger-btn" aria-label="Open menu">
        <span class="burger-lines">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-header">
          <div class="logo-box">
            <img src="${siteLogo}" alt="site logo" class="logo-img" />
            <h1 class="title title-white">MiniGames</h1>
          </div>
          <button class="close-btn" id="close-btn" aria-label="Close menu">&times;</button>
        </div>

        <ul class="mobile-nav-list">
          <li><a href="/" class="mobile-link active">Home</a></li>
          <li><a href="/404" class="mobile-link">Library</a></li>
          <li><a href="/404" class="mobile-link">Tournaments</a></li>
          <li><a href="/404" class="mobile-link">Community</a></li>
        </ul>

        <div class="mobile-btn-wrap">
         <a href="/login" data-auth-open="login" class="mobile-btn mobile-log-in ${isLoggedIn ? 'is-hidden' : ''}">Log In</a>
         <a href="/signup" data-auth-open="signup" class="mobile-btn mobile-sign-up ${isLoggedIn ? 'is-hidden' : ''}">Sign Up</a>
        </div>
      </div>
    </header>
  `;
}

export function initHeaderEvents(): void {
  const burgerBtn = document.getElementById('burger-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = (isOpen: boolean) => {
    mobileMenu?.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  burgerBtn?.addEventListener('click', () => toggleMenu(true));
  closeBtn?.addEventListener('click', () => toggleMenu(false));
}
