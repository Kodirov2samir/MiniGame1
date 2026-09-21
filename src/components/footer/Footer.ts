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
    <nav class="footer-lists-wrap">
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
        <li><a href="https://rs.school/"><img src="${chatIcon}" alt="chat icon"></a></li>
        <li><a href="https://rs.school/"><img src="${rsFeedIcon}" alt="rs feed icon"></a></li>
        <li><a href="https://rs.school/"><img src="${shareIcon}" alt="share icon"></a></li>
      </ul>
    </div>
    </nav>
       </div>
    <div class="footer-bottom-wrap">
      <p>
      © 2026 MiniGames. All rights reserved.
    </p>
    <div class="mobile-visible">
      <div>
      <a href="https://rs.school/"><img src="${rsShoolsLogo}" alt="rs school logo"></a>
      <p>
      RS School
    </p>
    </div>
    <div>
      <a href="https://discordapp.com/users/763335084932595712">
        <img src="${devLogo}" alt="developer logo">
      </a>
      <p>@Kodirov2samir</p>
    </div>
    </div>
    </div>
      </div>
    </footer>
  `;
}
