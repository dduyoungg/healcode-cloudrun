import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/activities", label: "Activities" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="HealCode home">
          <img src="/healcode-icon.webp" alt="HealCode logo" className="brand-icon" />
          <span>HealCode</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link login active" : "nav-link login")}>Login</NavLink>
        </nav>
      </div>
    </header>
  );
}
