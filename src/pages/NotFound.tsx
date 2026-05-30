import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1>Page not found</h1>
        <p>요청한 페이지를 찾을 수 없습니다.</p>
        <Link to="/" className="button primary">Go home</Link>
      </div>
    </section>
  );
}
