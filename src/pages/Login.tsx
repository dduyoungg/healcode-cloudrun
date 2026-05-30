import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

type Profile = {
  role: "member" | "manager" | "admin";
  status: "pending" | "approved" | "rejected";
};

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (searchParams.get("verified") === "true") {
      setMessage("이메일 인증이 완료되었습니다. 로그인해주세요.");
    }
  }, [searchParams]);

  async function moveAfterLogin(userId: string) {
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role, status")
      .eq("id", userId)
      .maybeSingle<Profile>();

    if (error) {
      setMessage("프로필 정보를 불러오지 못했습니다. profiles 테이블과 RLS 정책을 확인해주세요.");
      return;
    }

    if (!profile) {
      setMessage("프로필이 아직 생성되지 않았습니다. 잠시 후 다시 로그인해주세요.");
      return;
    }

    if (profile.status === "pending") {
      setMessage("이메일 인증은 완료되었지만, 아직 관리자 승인 대기 중입니다.");
      return;
    }

    if (profile.status === "rejected") {
      setMessage("가입이 승인되지 않았습니다. 관리자에게 문의해주세요.");
      return;
    }

    if (profile.role === "manager" || profile.role === "admin") {
      navigate("/manager");
      return;
    }

    navigate("/dashboard");
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (loginError) {
      setLoading(false);

      const lowerMessage = loginError.message.toLowerCase();

      if (lowerMessage.includes("email not confirmed")) {
        setMessage("이메일 인증이 아직 완료되지 않았습니다. 메일함에서 인증 링크를 먼저 눌러주세요.");
      } else if (lowerMessage.includes("invalid login credentials")) {
        setMessage("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        setMessage(loginError.message);
      }

      return;
    }

    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser();

    setLoading(false);

    if (userError || !user) {
      setMessage("로그인 사용자 정보를 불러오지 못했습니다. 다시 시도해주세요.");
      return;
    }

    await moveAfterLogin(user.id);
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <img
          src="/healcode-icon.webp"
          alt="HealCode logo"
          className="auth-logo"
        />

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
              autoComplete="email"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />
          </label>

          <button
            type="submit"
            className="button primary full"
            disabled={loading}
          >
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
