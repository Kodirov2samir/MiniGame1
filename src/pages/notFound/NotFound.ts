import './NotFound.scss';
export function notFound(): string {
  return /*html */ `
  <div class="not-found-wrap">
   <div>
     <h1>
    OOPS, unfortunatelli the page doesnt exist
  </h1>
  <p>I am working on it</p>
   </div>
  <a href="/"><button>Come back to home page</button></a>
  </div>
  `;
}
