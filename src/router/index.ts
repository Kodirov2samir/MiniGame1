import type { Route } from './types';

let routes: Record<string, Route> = {};

export function handleRoute(): void {
  const main = document.querySelector('main');
  if (!main) return;

  const path = window.location.pathname;

  const route = routes[path] || routes['/404'];

  if (route) {
    main.innerHTML = route.render();
  } else {
    main.innerHTML = '<h2>Page is not found</h2>';
  }
}

export function navigate(path: string): void {
  window.history.pushState({}, '', path);
  handleRoute();
}

export function initRouter(routesConfig: Record<string, Route>): void {
  routes = routesConfig;

  handleRoute();
}
