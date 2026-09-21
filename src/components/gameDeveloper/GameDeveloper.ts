import './GameDeveloper.scss';
import devImage from '../../assets/minigameDev.png';
import submitIcon from '../../assets/upload_icon.png';
export function gameDeveloper(): string {
  return /*html*/ `
   <section class="developer">
    <div class="container developer-wrap">
      <img src="${devImage}" alt="are you developer">
    <div class="developer-card-wrap">
      <h2>Are You a Game Developer?</h2>
      <p>Want to see your game on MiniGames? We're always looking for fun,
engaging mini games to add to our platform. Submit your game
and reach thousands of players!</p>
<button class="dev-btn" type="button"><span><img src="${submitIcon}" alt="upload icon"></span>Submit  Form</button>
<p class="dev-par-small">or contact us at developers@minigames.com</p>
    </div>
    </div>
   </section>
  `;
}
