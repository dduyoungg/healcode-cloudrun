import PageHeader from "../components/PageHeader";
import { memberRequests, projects } from "../lib/mockData";

export default function Manager() {
  return (
    <>
      <PageHeader
        eyebrow="Manager"
        title="Manager Console"
        description="회원가입 승인, 프로젝트 공개 승인, 포인트 관리를 위한 매니저 화면입니다."
      />
      <section className="section">
        <div className="container manager-grid">
          <article className="card">
            <h2>Member requests</h2>
            <div className="table-like">
              {memberRequests.map((member) => (
                <div className="table-row" key={member.email}>
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.email}</span>
                  </div>
                  <span className="pill">{member.status}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="card">
            <h2>Project review</h2>
            <div className="table-like">
              {projects.map((project) => (
                <div className="table-row" key={project.title}>
                  <div>
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </div>
                  <span className="pill">{project.status}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
