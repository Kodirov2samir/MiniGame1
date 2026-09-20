import type { Route } from './types';
import { HomePage, initHomePageEvents } from '../pages/HomePage';
import { signUp, initSignUpEvents } from '../pages/signUp/SignUp';
import { logIn, initLogInEvents } from '../pages/LogIn';

export const routes: Record<string, Route> = {
  '/': {
    path: '/',
    render: HomePage,
    initEvents: initHomePageEvents,
  },
  '/signup': {
    path: '/signup',
    render: signUp,
    initEvents: initSignUpEvents,
  },
  '/login': {
    path: '/login',
    render: logIn,
    initEvents: initLogInEvents,
  },
};
