import './Hero.scss';

export function hero(): string {
  return /*html*/ `
   <section class="hero-section">
      <div class="container hero-wrap">
        <div class="hero-card">
          <h2 class="hero-title">Take a Short Break & Have Fun</h2>
          <p class="hero-description">
            Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.
          </p>
          <a href="/404"><button type="button" class="browse-btn">Browse Library</button></a>
        </div>
      </div>
    </section>
  `;
}
