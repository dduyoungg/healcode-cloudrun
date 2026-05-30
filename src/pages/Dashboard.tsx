import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="My HealCode"
        description="로그인한 회원이 본인 포인트와 프로젝트 제출 상태를 확인하는 화면입니다."
      />
      <section className="section">
        <div className="container dashboard-grid">
          <article className="card stat-card">
            <span>Total Points</span>
            <strong>35</strong>
            <p>세미나 참여, 프로젝트 제출, 리뷰 활동을 반영한 예시 데이터입니다.</p>
          </article>
          <article className="card">
            <h2>Project Submission</h2>
            <form className="auth-form compact">
              <label>
                Project title
                <input type="text" placeholder="프로젝트 제목" />
              </label>
              <label>
                Project URL
                <input type="url" placeholder="Notion 또는 GitHub 링크" />
              </label>
              <label>
                Description
                <textarea placeholder="프로젝트 설명" rows={4} />
              </label>
              <button type="button" className="button primary">Submit for review</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}
