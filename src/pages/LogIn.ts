import './signUp/SignUp.scss';
import type { User } from './signUp/userType';
import { navigate } from '../router';
import lock from '../assets/lock (1).png';
import mail from '../assets/mail (1).png';
import googleLogo from '../assets/google_logo.png';
export function logIn(): string {
  return /*html */ `

  <div class="page-wrap">
    <div class="form-wrap">
    <div class="login-reg-wrap">
      <a class="register-btn" href="#">Log in</a>
      <a class="login-btn" href="/signup">Register</a>
    </div>
    <div class="form-text-wrap">
      <h2>
      Welcome Back
    </h2>
    <p>Sign in to resume your games and progress.</p>
    </div>
    <form class="site-form" action="">
   
     <div class="inp-lab-wrap">
      <label for="email">Email Address</label>
    <div class="inp-wrap">
      <span><img src="${mail}" alt="mail icon"></span>
      <input id="email" type="text" placeholder="your.email@domain.com">
    </div>
    </div>
     <div class="inp-lab-wrap">
      <label for="password">Password</label>
    <div class="inp-wrap">
      <span><img src="${lock}" alt="lock icon"></span>
      <input id="password" type="text" placeholder="Min. 8 characters">
    </div>
    </div>
    <button class="form-btn btn">Log In</button>
    <div class="form-devider"><span class="line"></span>OR<span class="line"></span></div>
    <button class="google-btn btn"><span><img src="${googleLogo}" alt="google logo"></span>Sign up with Google</button>
      
  </form>
  <p class="have-acc">
    Dont have an account? <a href="/signup">Register</a>
  </p>
  </div>
  </div>
  `;
}
export function initLogInEvents(): void {
  const form = document.querySelector<HTMLFormElement>('.site-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.querySelector<HTMLInputElement>('#email');
    const passwordInput = document.querySelector<HTMLInputElement>('#password');

    const email = emailInput?.value || '';
    const password = passwordInput?.value || '';

    const savedUserData = localStorage.getItem('user');

    if (!savedUserData) {
      alert('User not found. Please register first!');
      return;
    }

    const savedUser: User = JSON.parse(savedUserData);

    if (savedUser.email === email && savedUser.password === password) {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('currentUser', savedUser.username);

      alert('Logged in successfully!');

      form.reset();

      navigate('/');
    } else {
      alert('Invalid email or password!');
    }
  });
}
