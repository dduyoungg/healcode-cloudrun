type ProjectCardProps = {
  title: string;
  category: string;
  status: string;
  description: string;
};

export default function ProjectCard({ title, category, status, description }: ProjectCardProps) {
  return (
    <article className="card project-card">
      <div className="card-meta">
        <span>{category}</span>
        <span className="pill">{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="text-button" type="button">View project</button>
    </article>
  );
}
