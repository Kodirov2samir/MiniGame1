import './SignUp.scss';
import type { User } from './userType';
import lock from '../../assets/lock (1).png';
import person from '../../assets/person.png';
import mail from '../../assets/mail (1).png';
import googleLogo from '../../assets/google_logo.png';
import { navigate } from '../../router/index';
export function signUp(): string {
  return /*html */ `

  <div class="page-wrap">
    <div class="form-wrap">
    <div class="login-reg-wrap">
      <a  class="login-btn" href="/login">Log in</a>
      <a class="register-btn" href="">Register</a>
    </div>
    <div class="form-text-wrap">
      <h1>
      Create Account
    </h1>
    <p>Join MiniGames to track your score & streak.</p>
    </div>
    <div id="error"></div>
    <form class="site-form" action="/" method="GET">
    <div class="inp-lab-wrap">
      <label for="username">Username</label>
    <div class="inp-wrap">
      <span><img src="${person}" alt="person icon"></span>
      <input id="username" type="text" placeholder="e.g. CozyGamer_99" autocomplete="username" required minlength="2">
    </div>
    </div>
     <div class="inp-lab-wrap">
      <label for="email">Email Address</label>
    <div class="inp-wrap">
      <span><img src="${mail}" alt="mail icon"></span>
      <input id="email" type="email" placeholder="your.email@domain.com" autocomplete="email" required>
    </div>
    </div>
     <div class="inp-lab-wrap">
      <label for="password">Password</label>
    <div class="inp-wrap">
      <span><img src="${lock}" alt="lock icon"></span>
      <input id="password" type="password" placeholder="Min. 8 characters" autocomplete="new-password" required minlength="8">
    </div>
    </div>
     <div class="inp-lab-wrap">
      <label for="confirm">Confirm Password</label>
    <div class="inp-wrap">
     <span><img src="${lock}" alt="lock icon"></span>
      <input id="confirm" type="password" placeholder="Repeat your password" autocomplete="new-password" required minlength="8">
    </div>
    </div>
    <button class="form-btn btn" type="submit">Create Account</button>
    <div class="form-devider"><span class="line"></span>OR<span class="line"></span></div>
    <button type="button" class="google-btn btn"><span><img src="${googleLogo}" alt="google logo"></span>Sign up with Google</button>
      
  </form>
  <p class="have-acc">
    Already have account? <a href="/login">Login</a>
  </p>
  </div>
  </div>
  `;
}

export function initSignUpEvents(): void {
  const form = document.querySelector<HTMLFormElement>('.site-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameInput = document.querySelector<HTMLInputElement>('#username');
    const emailInput = document.querySelector<HTMLInputElement>('#email');
    const passwordInput = document.querySelector<HTMLInputElement>('#password');
    const confirmInput = document.querySelector<HTMLInputElement>('#confirm');

    const username = usernameInput?.value || '';
    const email = emailInput?.value || '';
    const password = passwordInput?.value || '';
    const confirm = confirmInput?.value || '';

    if (password !== confirm) {
      alert('Passwords dont match');
      return;
    }

    const user: User = {
      username,
      email,
      password,
      vefified: true,
    };

    localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('currentUser', username);
    alert('User Signed up successfully');

    form.reset();
    navigate('/');
  });
}
