import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <img src="/healcode-icon.webp" alt="HealCode logo" className="auth-logo" />
        <p className="eyebrow">Join HealCode</p>
        <h1>Sign up</h1>
        <form className="auth-form">
          <label>
            Name
            <input type="text" placeholder="이름" />
          </label>
          <label>
            Email
            <input type="email" placeholder="healcode@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="button primary full">Create account</button>
        </form>
        <p className="auth-help">
          이미 계정이 있나요? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
