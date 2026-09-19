import './styles/style.scss';
import { siteHeader, initHeaderEvents } from './components/header/Header';
import { hero } from './components/hero/Hero';
import { initNewGamesEvents, newGames } from './components/newGames/NewGames';
import { topPlayers } from './components/topPlayers/TopPlayers';
import { gameDeveloper } from './components/gameDeveloper/GameDeveloper';
import { footer } from './components/footer/Footer';
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `${siteHeader()} <main>
  ${hero()}
  ${newGames()}
  ${topPlayers()}
  ${gameDeveloper()}
  </main>
  ${footer()}`;
  initHeaderEvents();
  initNewGamesEvents();
}
