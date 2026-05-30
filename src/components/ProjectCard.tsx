type ProjectCardProps = {
  title: string;
  category: string;
  status: string;
  description: string;
  href?: string;
};

export default function ProjectCard({
  title,
  category,
  status,
  description,
  href
}: ProjectCardProps) {
  return (
    <article className="card project-card">
      <div className="card-meta">
        <span>{category}</span>
        <span className="pill">{status}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      {href ? (
        <a
          className="text-button"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          View project →
        </a>
      ) : (
        <button className="text-button" type="button">
          View project
        </button>
      )}
    </article>
  );
}
