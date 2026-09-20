import './SignUp.scss';
import lock from '../../assets/lock (1).png';
import person from '../../assets/person.png';
import mail from '../../assets/mail (1).png';
import googleLogo from '../../assets/google_logo.png';
export function signUp(): string {
  return /*html */ `

  <div class="form-wrap">
    <div class="login-reg-wrap">
      <button class="login-btn">Login</button>
      <button class="register-btn">Register</button>
    </div>
    <div class="form-text-wrap">
      <h2>
      Create Account
    </h2>
    <p>Join MiniGames to track your score & streak.</p>
    </div>
    <form class="site-form" action="">
    <div class="inp-lab-wrap">
      <label for="">Username</label>
    <div class="inp-wrap">
      <span><img src="${person}" alt="person icon"></span>
      <input type="text" placeholder="e.g. CozyGamer_99">
    </div>
    </div>
     <div class="inp-lab-wrap">
      <label for="">Email Address</label>
    <div class="inp-wrap">
      <span><img src="${mail}" alt="mail icon"></span>
      <input type="text" placeholder="your.email@domain.com">
    </div>
    </div>
     <div class="inp-lab-wrap">
      <label for="">Password</label>
    <div class="inp-wrap">
      <span><img src="${lock}" alt="lock icon"></span>
      <input type="text" placeholder="Min. 8 characters">
    </div>
    </div>
     <div class="inp-lab-wrap">
      <label for="">Confirm Password</label>
    <div class="inp-wrap">
     <span><img src="${lock}" alt="lock icon"></span>
      <input type="text" placeholder="Repeat your password">
    </div>
    </div>
    <button class="form-btn btn">Create Account</button>
    <div class="form-devider"><span class="line"></span>OR<span class="line"></span></div>
    <button class="google-btn btn"><span><img src="${googleLogo}" alt="google logo"></span>Sign up with Google</button>
      
  </form>
  <p class="have-acc">
    Already have account? <a href="#">Login</a>
  </p>
  </div>
  `;
}
