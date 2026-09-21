import './topPlayers.scss';
import topPlayersData from '../../data/leaderboard.json';

interface Players {
  rank: number;
  playerName: string;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGameSlug: string;
  favoriteGameName: string;
}
interface PlayersMeta {
  totalItems: number;
  description: string;
  featuredCount: number;
}
interface PlayersDataResponse {
  data: Players[];
  meta: PlayersMeta;
}
const playerData = topPlayersData as PlayersDataResponse;
export function topPlayers(): string {
  const players: Players[] = playerData.data;
  const eachPlayer = players
    .map((item) => {
      return `
    <tr class="${item.rank % 2 === 0 ? 'row-even' : 'row-odd'}">
    <td class="${item.rank === 1 ? 'rank-first' : ''}">#${item.rank}</td>
    <td><span class="name-initials">${item.playerName
      .split('')
      .filter(
        (item) => item.toUpperCase() === item && item !== '_' && isNaN(+item)
      )
      .join('')}</span>${item.playerName}</td>
    <td class="hide-mobile">${item.gamesPlayed}</td>
    <td>${item.totalScore}</td>
    <td>${item.streakDays}</td>
    <td>${item.favoriteGameName}</td>
    </tr>
    `;
    })
    .join('');
  return /*html */ `
  <section class="leaderboard-section">
    <div class="container">
      <div class="title-wrapper">
        <span class="title-mark"></span>
        <h2>Top Players This Week</h2>
      </div>
      <table class="section-table">
        <thead class="section-table-head">
          <tr>
            <th>
              RANK
            </th>
            <th>
              PLAYER
            </th>
            <th class="hide-mobile">
              GAMES PLAYED
            </th>
            <th>
              TOTAL SCORE
            </th>
            <th>
              STREAK
            </th>
            <th>
              FOVOURITE GAME
            </th>
          </tr>
        </thead>
        <tbody class="section-table-body">
          ${eachPlayer}
        </tbody>
      </table>
    </div>
  </section>
  `;
}
