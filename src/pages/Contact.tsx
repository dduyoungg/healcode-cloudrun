import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="HealCode는 보건의료인(Healer)과 엔지니어(Crafter)의 연합 커뮤니티입니다. 합류 문의, 협업 제안, 무엇이든 환영합니다."
      />
      <section className="section contact-section">
        <div className="container contact-card">
          <img src="/healcode-icon.webp" alt="HealCode logo" />
          <h2>healcode@example.com</h2>
          <p>프로젝트 협업, 가입 문의, 외부 발표 제안은 위 이메일로 연락해주세요.</p>
          <a className="button primary" href="mailto:healcode@example.com">Send email</a>
        </div>
      </section>
    </>
  );
}
