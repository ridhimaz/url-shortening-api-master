import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"
import footerLogo from "../images/footer-logo.svg"
export default function Footer() {
  return (
    <footer>


      <div className="footer d-flex flex-lg-row">
        <div className="">
          <img id="footerLogo" src={footerLogo} alt=""></img>
        </div>

        <div className="features">
          <h3>Features</h3>
          <ul className="p-0" style={{ listStyleType: "none" }}>
            <li>Link Sortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="resources">
          <h3>Resources</h3>
          <ul className="p-0" style={{ listStyleType: "none" }}>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="company">
          <h3>Company</h3>
          <ul className="p-0" style={{ listStyleType: "none" }}>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="icon">
          <ul className="p-0 d-flex flex-row" id="company" style={{ listStyleType: "none" }}>
            <li><img style={{ "width": "1.2rem" }} src={facebook} alt="facebook"></img></li>
            <li><img style={{ "width": "1.2rem" }} src={twitter} alt="twitter"></img></li>
            <li><img style={{ "width": "1.2rem" }} src={pinterest} alt="pinterest"></img></li>
            <li><img style={{ "width": "1.2rem" }} src={instagram} alt="instagram"></img></li>
          </ul>
        </div>

      </div>
    </footer>

  )
}
