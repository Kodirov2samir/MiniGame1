import './styles/style.scss';

import { initRouter } from './router';
import { routes } from './router/routes';

const app = document.getElementById('app');

if (app) {
  app.innerHTML = `
    <main id="main-content"></main>
  `;

  initRouter(routes);
}
