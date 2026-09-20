import type { Route } from './types';
import { HomePage, initHomePageEvents } from '../pages/HomePage';
import { signUp } from '../pages/signUp/SignUp';
import { logIn } from '../pages/LogIn';

export const routes: Record<string, Route> = {
  '/': {
    path: '/',
    render: HomePage,
    initEvents: initHomePageEvents,
  },
  '/signup': {
    path: '/signup',
    render: signUp,
  },
  '/login': {
    path: '/login',
    render: logIn,
  },
};
