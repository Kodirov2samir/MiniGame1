import './NewGames.scss';
import allTheGamesData from '../../data/all-games-seed.json';
interface Game {
  slug: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  rating: number;
  likesCount: number;
  cardImage: string;
  featured: boolean;
}

interface GamesMeta {
  totalItems: number;
  description: string;
  featuredCount: number;
}

interface GamesDataResponse {
  data: Game[];
  meta: GamesMeta;
}

const gamesData = allTheGamesData as GamesDataResponse;

export function newGames(): string {
  const gamesList: Game[] = gamesData.data;
  const images = import.meta.glob<{ default: string }>(
    '../../assets/*-card.jpg',
    { eager: true }
  );

  function getBgUrl(slug: string): string {
    const match = Object.keys(images).find((path) => path.includes(slug));
    return match ? images[match].default : '';
  }
  const gamesCardsHtml = gamesList
    .slice(0, 5)
    .map(
      (game) => `
      <div class="game-card" style="--bg-img: url('${getBgUrl(game.slug)}');">
        <h3>${game.name}</h3>
        <p>${game.shortDescription}</p>
        <span>${game.price}</span>
      </div>
    `
    )
    .join('');

  return /*html*/ `
  <section class="new-games-section">
   <div class="container section-wrap">
     <div class="new-games-header">
      <div class="new-games-title">
        <span class="title-mark"></span>
        <h2>New Games</h2>
      </div>
      <div class="new-games-controls">
        <button class="slider-button" type="button" aria-label="Previous games">&lt;-</button>
        <button class="slider-button slider-button-active" type="button" aria-label="Next games">-&gt;</button>
      </div>
    </div>
    <div class="games-list">
      ${gamesCardsHtml}
    </div>
   </div>
   
  </section>
  `;
}
