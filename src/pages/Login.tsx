import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <img src="/healcode-icon.webp" alt="HealCode logo" className="auth-logo" />
        <p className="eyebrow">Member Login</p>
        <h1>Login</h1>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="healcode@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="button primary full">Login</button>
        </form>
        <p className="auth-help">
          아직 계정이 없나요? <Link to="/signup">Sign up</Link>
        </p>
        <p className="tiny-note">Supabase 연결 후 실제 로그인 기능을 붙이면 됩니다.</p>
      </div>
    </section>
  );
}
