import { Container, Row, Col } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import footerLogo from "../assets/img/footerLogo.png";
import fbtnLogo from "../assets/img/fbtnLogo.png";
import CopyToClipboard from './CopyToClipboard';
export default function Footer() {
    const title = "$MOAT";
    const btnTxt = "COMING SOON";
    const btnLink = "https://google.com";
    const socials = [
      {
        logo:<FaXTwitter />,
        url:"https://google.com",
      },
    ];

  return (
    <footer className="footer" style={{position:'relative'}}>
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
          <Col sm={6} className="text-center text-lg-start mb-4">
            <a href={btnLink} className="boxedBtn"><img className="btnLogo" src={fbtnLogo} alt="" />{btnTxt}</a>
          </Col>
          <Col sm={6} className="text-end mt-4 mt-md-0">
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
