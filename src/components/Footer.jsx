import {React, useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaClipboardCheck  } from "react-icons/fa";
import footerLogo from "../assets/img/footerLogo.png";
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
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-top">
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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
