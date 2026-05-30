import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setLoading(false);
      setMessage(error.message);
      return;
    }

    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      setMessage("로그인 사용자 정보를 불러오지 못했습니다.");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role, status")
      .eq("id", user.id)
      .single();

    setLoading(false);

    if (profileError) {
      setMessage("프로필 정보를 불러오지 못했습니다. Supabase profiles 테이블을 확인해주세요.");
      return;
    }

    if (profile?.status === "pending") {
      setMessage("현재 관리자 승인 대기 중입니다.");
      return;
    }

    if (profile?.status === "rejected") {
      setMessage("가입이 승인되지 않았습니다.");
      return;
    }

    if (profile?.role === "manager" || profile?.role === "admin") {
      navigate("/manager");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <img src="/healcode-icon.webp" alt="HealCode logo" className="auth-logo" />

        <p className="eyebrow">Member Login</p>
        <h1>Login</h1>

        <form className="auth-form" onSubmit={handleLogin}>
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && <p className="tiny-note">{message}</p>}

        <p className="auth-help">
          아직 계정이 없나요? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </section>
  );
}
