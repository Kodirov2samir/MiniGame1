import './topPlayers.scss';
import topPlayersData from '../../data/leaderboard.json';
console.log(topPlayersData);
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
    <tr>
    <td>#${item.rank}</td>
    <td><span class="name-initials" ">${item.playerName
      .split('')
      .filter(
        (item) => item.toUpperCase() === item && item !== '_' && isNaN(+item)
      )
      .join('')}</span>${item.playerName}</td>
    <td>${item.gamesPlayed}</td>
    <td>${item.totalScore}</td>
    <td>${item.streakDays}</td>
    <td>${item.favoriteGameName}</td>
    </tr>
    `;
    })
    .join('');
  return /*html */ `
  <section>
    <div class="container">
      <table class="section-table">
        <thead>
          <tr>
            <th>
              RANK
            </th>
            <th>
              PLAYER
            </th>
            <th>
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
        <tbody>
          ${eachPlayer}
        </tbody>
      </table>
    </div>
  </section>
  `;
}
