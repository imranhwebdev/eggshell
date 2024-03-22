import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../assets/img/footerLogo.png";
export default function Footer() {
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
    <Footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-top">
              <a href="/" className="footere-logo">
                <img src={footerLogo} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}
