import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-white">🎬book</span>
        <span className="logo-red">your</span>
        <span className="logo-white">show</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
