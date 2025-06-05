import "../../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {year} OppskriftsHub. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/Home">Home</Link>
        <Link to="/Log-in">Log-in</Link>
        <Link to="/Explore">Explore</Link>
      </div>
    </footer>
  );
}

export default Footer;