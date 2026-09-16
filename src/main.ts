import './styles/style.scss';
import { siteHeader, initHeaderEvents } from './components/Header';
const app = document.getElementById('app');
if (app) {
  app.innerHTML = siteHeader();
  initHeaderEvents();
}
