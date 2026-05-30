import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About HealCode"
        description="HealCode는 보건의료인(Healer)과 엔지니어(Crafter)가 함께 배우고 만드는 연합 커뮤니티입니다."
      />
      <section className="section">
        <div className="container about-grid">
          <article className="card big-card">
            <h2>Who we are</h2>
            <p>
              HealCode는 의료 현장의 문제를 직접 경험하거나 관심을 가진 사람들이 모여,
              기술을 통해 더 나은 해결책을 탐색하는 팀입니다. 의학, 데이터, 인공지능,
              웹 개발에 관심 있는 구성원이 함께 프로젝트를 기획하고 구현합니다.
            </p>
          </article>
          <article className="card big-card">
            <h2>What we do</h2>
            <p>
              우리는 문제 정의, 프로토타입 제작, 프로젝트 리뷰, 스터디를 통해 작지만 실제로
              작동하는 결과물을 만들어갑니다. 완성도보다 중요한 것은 의료 현장의 맥락을 이해하고
              해결 가능한 형태로 빠르게 실험하는 것입니다.
            </p>
          </article>
          <article className="card big-card">
            <h2>Our values</h2>
            <ul className="value-list">
              <li>환자와 의료진에게 실제로 도움이 되는 문제를 선택합니다.</li>
              <li>작게 만들고 빠르게 검증합니다.</li>
              <li>의료 지식과 기술 구현을 서로 존중하며 배웁니다.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
