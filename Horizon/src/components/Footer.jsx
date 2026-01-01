import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Horizon Courts</h2>
        <p>Where passion meets precision — play beyond limits.</p>

        <div className="social-icons">
          <a href="#"><i className="ri-instagram-line"></i></a>
          <a href="#"><i className="ri-facebook-line"></i></a>
          <a href="#"><i className="ri-twitter-line"></i></a>
        </div>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Horizon Courts. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
