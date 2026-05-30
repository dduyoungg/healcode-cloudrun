import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/mockData";

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        description="HealCode가 기획하고 구현 중인 공개 프로젝트를 소개합니다."
      />
      <section className="section">
        <div className="container card-grid three">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
