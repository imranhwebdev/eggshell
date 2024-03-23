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
              <a href="/" className="footere-logo">
                <img src={footerLogo} alt="" />
              </a>
              <CopyToClipboard />
            <h4 className='footer-title'>{title}</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <a href={btnLink}><img src={fbtnLogo} alt="" />{btnTxt}</a>
          </Col>
          <Col md={4}>
            <p>{copyright}</p>
          </Col>
          <Col md={4}>
            <div className="socials">
              {socials.map((item, index)=>(
                <a href={item.url} key={index}>{item.logo}</a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
