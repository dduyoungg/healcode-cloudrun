import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ActivityCard from "../components/ActivityCard";
import { activities, projects } from "../lib/mockData";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Healers × Crafters</p>
            <h1>We heal patients, with code and love.</h1>
            <p className="hero-text">
              HealCode는 보건의료인과 엔지니어가 함께 모여 의료 현장의 문제를 발견하고,
              기술로 더 나은 해결책을 만들어가는 연합 커뮤니티입니다.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="button primary">Explore projects</Link>
              <Link to="/contact" className="button secondary">Get in touch</Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="HealCode icon">
            <div className="visual-glow" />
            <img src="/healcode-icon.webp" alt="HealCode icon" />
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">About HealCode</p>
            <h2>의료 현장을 이해하는 사람들과 코드를 만드는 사람들이 함께합니다.</h2>
          </div>
          <p className="lead">
            HealCode는 작은 아이디어를 실제로 작동하는 프로토타입으로 만들고,
            보건의료 문제를 더 실용적으로 해결하는 방식을 실험합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading-row">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Public Projects</h2>
          </div>
          <Link to="/projects" className="text-button">See all projects</Link>
        </div>
        <div className="container card-grid three">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="section soft-section">
        <div className="container section-heading-row">
          <div>
            <p className="eyebrow">Activities</p>
            <h2>Recent Activities</h2>
          </div>
          <Link to="/activities" className="text-button">See all activities</Link>
        </div>
        <div className="container activity-list">
          {activities.slice(0, 2).map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card">
          <h2>Get in touch</h2>
          <p>합류 문의, 협업 제안, 프로젝트 공유를 환영합니다.</p>
          <Link to="/contact" className="button primary">Contact HealCode</Link>
        </div>
      </section>
    </>
  );
}
