import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";

type Profile = {
  id: string;
  email: string | null;
  full_name: string | null;
  role: "member" | "manager" | "admin";
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

export default function Manager() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function fetchPendingUsers() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      setMessage(
        "가입 대기자 목록을 불러오지 못했습니다. 관리자 권한 또는 RLS 정책을 확인해주세요."
      );
      return;
    }

    setProfiles(data ?? []);
  }

  async function approveUser(userId: string) {
    setMessage("");

    const { error } = await supabase
      .from("profiles")
      .update({
        status: "approved",
        role: "member"
      })
      .eq("id", userId);

    if (error) {
      setMessage("승인에 실패했습니다. 관리자 권한을 확인해주세요.");
      return;
    }

    setProfiles((prev) => prev.filter((user) => user.id !== userId));
    setMessage("회원 승인이 완료되었습니다.");
  }

  async function rejectUser(userId: string) {
    setMessage("");

    const { error } = await supabase
      .from("profiles")
      .update({
        status: "rejected"
      })
      .eq("id", userId);

    if (error) {
      setMessage("거절 처리에 실패했습니다. 관리자 권한을 확인해주세요.");
      return;
    }

    setProfiles((prev) => prev.filter((user) => user.id !== userId));
    setMessage("회원 가입을 거절했습니다.");
  }

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Manager"
        title="Manager Dashboard"
        description="가입 대기 중인 회원을 승인하거나 거절할 수 있는 관리자 페이지입니다."
      />

      <section className="section">
        <div className="container manager-grid">
          <article className="card">
            <h2>Pending Members</h2>
            <p>
              이메일 인증을 완료했더라도, 관리자가 승인하기 전까지는 대시보드와
              프로젝트 업로드 기능을 사용할 수 없습니다.
            </p>

            <button
              className="button secondary"
              type="button"
              onClick={fetchPendingUsers}
              style={{ marginTop: "20px" }}
            >
              Refresh
            </button>
          </article>

          <article className="card">
            <h2>Approval List</h2>

            {loading && <p>Loading...</p>}

            {!loading && profiles.length === 0 && (
              <p>현재 가입 대기 중인 회원이 없습니다.</p>
            )}

            <div className="table-like">
              {profiles.map((profile) => (
                <div className="table-row" key={profile.id}>
                  <div>
                    <strong>{profile.full_name || "이름 없음"}</strong>
                    <span>{profile.email}</span>
                  </div>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <button
                      className="button primary"
                      type="button"
                      onClick={() => approveUser(profile.id)}
                    >
                      Approve
                    </button>

                    <button
                      className="button secondary"
                      type="button"
                      onClick={() => rejectUser(profile.id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {message && <p className="tiny-note">{message}</p>}
          </article>
        </div>
      </section>
    </>
  );
}
