import './styles/style.scss';
import { siteHeader, initHeaderEvents } from './components/header/Header';
import { hero } from './components/hero/Hero';
import { initNewGamesEvents, newGames } from './components/newGames/NewGames';
import { topPlayers } from './components/topPlayers/topPlayers';
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `${siteHeader()} <main>
  ${hero()}
  ${newGames()}
  ${topPlayers()}
  </main>`;
  initHeaderEvents();
  initNewGamesEvents();
}
