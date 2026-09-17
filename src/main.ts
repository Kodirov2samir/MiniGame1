import './styles/style.scss';
import { siteHeader, initHeaderEvents } from './components/header/Header';
import { hero } from './components/hero/Hero';
import { newGames } from './components/newGames/NewGames';
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `${siteHeader()} <main>
  ${hero()}
  ${newGames()}
  </main>`;
  initHeaderEvents();
}
