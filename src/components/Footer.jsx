import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaYoutube, FaDiscord, FaPaperPlane} from "react-icons/fa";
import footerLogo from "../assets/img/footerLogo.png";
import fbtnLogo from "../assets/img/fbtnLogo.png";
import CopyToClipboard from './CopyToClipboard';
export default function Footer() {
    const title = "EGGSHELL";
    const btnTxt = "COMMING SOON EGGSHELL";
    const btnLink = "https://google.com";
    const socials = [
      {
        logo:<FaInstagram />,
        url:"https://google.com",
      },
      {
        logo:<FaYoutube  />,
        url:"https://google.com",
      },
      {
        logo:<FaDiscord  />,
        url:"https://google.com",
      },
      {
        logo:<FaPaperPlane  />,
        url:"https://google.com",
      },
    ];
    const currentYear = new Date().getFullYear();
    const companyName = "EGGSHELL";
    const copyright = `© ${currentYear} ${companyName}`;

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-top text-center">
              <a href="/" className="logo">
                <img src={footerLogo} alt="" />
              </a>
              <CopyToClipboard />
            <h4 className='footer-title'>{title}</h4>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom align-items-center">
          <Col lg={4} md={12} xs={12} className="text-center text-lg-start mb-4">
            <a href={btnLink} className="boxedBtn"><img className="btnLogo" src={fbtnLogo} alt="" />{btnTxt}</a>
          </Col>
          <Col lg={4} md={6} className="text-center mt-md-4 pt-3 mt-md-0">
            <p>{copyright}</p>
          </Col>
          <Col lg={4} md={6} className="text-md-end text-center mt-4 mt-md-0">
            <ul className="socials">
              {socials.map((item, index)=>(
                <li key={index}><a href={item.url}>{item.logo}</a></li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
