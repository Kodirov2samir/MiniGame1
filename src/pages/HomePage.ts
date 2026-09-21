import { siteHeader, initHeaderEvents } from '../components/header/Header';
import { hero } from '../components/hero/Hero';
import { newGames, initNewGamesEvents } from '../components/newGames/NewGames';
import { topPlayers } from '../components/topPlayers/topPlayers';
import { gameDeveloper } from '../components/gameDeveloper/GameDeveloper';
import { footer } from '../components/footer/Footer';

export function HomePage(): string {
  return `
    ${siteHeader()}
    ${hero()}
    ${newGames()}
    ${topPlayers()}
    ${gameDeveloper()}
    ${footer()}
  `;
}

export function initHomePageEvents(): void {
  initHeaderEvents();
  initNewGamesEvents();
}
