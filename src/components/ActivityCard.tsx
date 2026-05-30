type ActivityCardProps = {
  date: string;
  title: string;
  description: string;
};

export default function ActivityCard({ date, title, description }: ActivityCardProps) {
  return (
    <article className="activity-row">
      <div className="activity-date">{date}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
