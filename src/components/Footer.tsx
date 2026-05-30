import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/healcode-icon.webp" alt="HealCode logo" />
            <span>HealCode</span>
          </div>
          <p className="footer-slogan">We heal patients, with code and love</p>
          <p className="footer-mail">katiepops@pusan.ac.kr</p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="copyright">© 2026 HealCode · Healers × Crafters</div>
    </footer>
  );
}
