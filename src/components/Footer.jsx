import {React, useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaClipboardCheck, FaInstagram, FaYoutube, FaDiscord, FaPaperPlane} from "react-icons/fa";
import footerLogo from "../assets/img/footerLogo.png";
import fbtnLogo from "../assets/img/fbtnLogo.png";
import copyTxt from '../assets/img/copyTxt.png';
export default function Footer() {
  const [textToCopy, setTextToCopy] = useState('BeqKgf3QYcPPXc1vLFxrL9BHocRFugeecNX4dWQ7HW5f');
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setIsCopied(true);
        })
        .catch(err => {
          console.error('Failed to copy to clipboard: ', err);
        });
    };
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
              <div className="tokenomics_copyTxt copytoclipboard">
                <span className='c_title'>Contract:</span> <input readOnly type="text"  value={textToCopy}
                    onChange={(e) => setTextToCopy(e.target.value)}/>
              <button onClick={handleCopyToClipboard}>
                {!isCopied && (
                  <span>
                    <img src={copyTxt} alt="Copy Text" />
                  </span>
                )}
                {isCopied && (
                  <span className='copyed'>
                    <FaClipboardCheck  />
                  </span>
                )}
              </button>
            </div>
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
