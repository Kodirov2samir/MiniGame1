import './styles/style.scss';
import { siteHeader, initHeaderEvents } from './components/header/Header';
import { hero } from './components/hero/Hero';
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `${siteHeader()} <main>
  ${hero()}
  </main>`;
  initHeaderEvents();
}
