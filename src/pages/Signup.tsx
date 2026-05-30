import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!name || !email || !password) {
      setMessage("이름, 이메일, 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      setMessage("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name
        }
      }
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("회원가입이 완료되었습니다. 관리자 승인 후 이용할 수 있습니다.");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <img src="/healcode-icon.webp" alt="HealCode logo" className="auth-logo" />

        <p className="eyebrow">Join HealCode</p>
        <h1>Sign up</h1>

        <form className="auth-form" onSubmit={handleSignup}>
          <label>
            Name
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="healcode@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button type="submit" className="button primary full" disabled={loading}>
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        {message && <p className="tiny-note">{message}</p>}

        <p className="auth-help">
          이미 계정이 있나요? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
