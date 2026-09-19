import './Footer.scss';
import siteLogo from '../../assets/site-logo.png';
import rsShoolsLogo from '../../assets/rs-logo-container.png';
import devLogo from '../../assets/github-icon.png';
import chatIcon from '../../assets/chat.png';
import rsFeedIcon from '../../assets/rss_feed.png';
import shareIcon from '../../assets/share.png';

export function footer(): string {
  return /*html */ `
    <footer class="site-footer">
      <div class="container">
       <div class="footer-top-wrap">
         <div class="site-logo-container">
      <div class="site-logo">
        <span><img src="${siteLogo}" alt="site logo"></span>
  <h2>MiniGames</h2>
      </div>
  
      <p>Take a short break and have fun. Hundreds of curated casual mini-games right in your web browser. No download required.</p>
    
    </div>
    <div class="footer-lists-wrap">
      <div class="footer-list-wrap">
      <h3>Explore</h3>
      <ul>
        <li>Home</li>
        <li>Library</li>
        <li>Category</li>
        <li>Tournament</li>
      </ul>
    </div>
       <div class="footer-list-wrap">
      <h3>Company</h3>
      <ul>
        <li>About us</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>Team of Service</li>
      </ul>
      
    </div>
    <div class="footer-list-wrap">
      <h3>Community</h3>
      <ul class="footer-icon-list">
        <li><a href=""><img src="${shareIcon}" alt="share icon"></a></li>
        <li><a href=""><img src="${chatIcon}" alt="chat icon"></a></li>
        <li><a href=""><img src="${rsFeedIcon}" alt="rs feed icon"></a></li>
      </ul>
    </div>
    </div>
       </div>
    <div class="footer-bottom-wrap">
      <p>
      © 2026 MiniGames. All rights reserved.
    </p>
    <span>
      <a href=""><img src="${rsShoolsLogo}" alt="rs school logo"></a>
      <p>
      RS School
    </p>
    </span>
    <span>
      <a href=""><img src="${devLogo}" alt="developer logo"></a>
      <p>@Kodirov2samir</p>
    </span>
    <p>Programmed with love</p>
    </div>
      </div>
    </footer>
  `;
}
