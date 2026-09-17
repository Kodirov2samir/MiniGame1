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
  const initialCurrentIndex = 1;
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
      (game, i) => `
      <div class="game-card ${initialCurrentIndex === i ? 'active-game' : i - 1 === initialCurrentIndex ? 'near-active' : i + 1 === initialCurrentIndex ? 'near-active' : 'non-active'}" style="--bg-img: url('${getBgUrl(game.slug)}');">
        <h3>${game.name}</h3>
        <div>
        <span>${game.rating}</span>
        <span>${game.likesCount}</span>
        </div>
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
        <button class="slider-button previous-game-button" type="button" aria-label="Previous games">&lt;-</button>
        <button class="slider-button slider-button-active next-game-button" type="button" aria-label="Next games">-&gt;</button>
      </div>
    </div>
    <div class="games-list">
      ${gamesCardsHtml}
    </div>
   </div>
   
  </section>
  `;
}

export function initNewGamesEvents(): void {
  const gamesList = document.querySelector('.games-list');
  const previousButton = document.querySelector('.previous-game-button');
  const nextButton = document.querySelector('.next-game-button');

  if (
    !gamesList ||
    !(previousButton instanceof HTMLButtonElement) ||
    !(nextButton instanceof HTMLButtonElement)
  ) {
    return;
  }

  let currentInd = 1;
  const cards = Array.from(gamesList.querySelectorAll('.game-card'));

  const updateActiveCard = (): void => {
    cards.forEach((card, index) => {
      card.classList.toggle('active-game', index === currentInd);
      card.classList.toggle(
        'near-active',
        index === currentInd - 1 || index === currentInd + 1
      );
      card.classList.toggle(
        'non-active',
        index !== currentInd &&
          index !== currentInd - 1 &&
          index !== currentInd + 1
      );
    });
  };

  previousButton.addEventListener('click', () => {
    if (currentInd > 0) {
      currentInd -= 1;
      updateActiveCard();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentInd < cards.length - 1) {
      currentInd += 1;
      updateActiveCard();
    }
  });
}
