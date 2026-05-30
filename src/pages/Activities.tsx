import PageHeader from "../components/PageHeader";
import ActivityCard from "../components/ActivityCard";
import { activities } from "../lib/mockData";

export default function Activities() {
  return (
    <>
      <PageHeader
        eyebrow="Activities"
        title="Activities"
        description="스터디, 프로젝트 리뷰, 프로토타입 제작 등 HealCode의 활동을 정리합니다."
      />
      <section className="section">
        <div className="container activity-list wide">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </section>
    </>
  );
}
