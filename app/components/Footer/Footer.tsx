export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__contact">
          <div className="footer__contact-copy">
            <p>
              Are you interested in working together and elevate your project to
              the next level?
            </p>
            <p>Let´s get to work!</p>
          </div>
          <a
            className="footer__contact-mail"
            href="mailto:hello@sweeppeople.com"
          >
            hello@sweeppeople.com
          </a>
        </div>
        <div className="footer__links">
          <div className="footer__links-wrapper">
            <span className="footer__links-title">Sitemap</span>
            <ul className="footer__links-list">
              <li className="footer__links-list--item">
                <a href="#">Home</a>
              </li>
              <li className="footer__links-list--item">
                <a href="#">Service</a>
              </li>
              {/* <li className="footer__links-list--item"><a href="#">Projects</a></li> */}
              <li className="footer__links-list--item">
                <a href="#">About</a>
              </li>
              <li className="footer__links-list--item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__links-wrapper">
            <span className="footer__links-title">Socials</span>
            <ul className="footer__links-list">
              <li className="footer__links-list--item">
                <a href="#">Instagram</a>
              </li>
              <li className="footer__links-list--item">
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="footer__links-wrapper">
            <span className="footer__links-title">Tickets</span>
            <ul className="footer__links-list">
              <li className="footer__links-list--item">
                <a href="#">Eventim</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
