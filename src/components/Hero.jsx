import {React, useState} from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FaClipboardCheck  } from "react-icons/fa";
import heroImg1 from '../assets/img/heroImg1.png';
import heroImg2 from '../assets/img/heroImg2.png';
import copyTxt from '../assets/img/copyTxt.png';
import MarqueeSection from './MarqueeCommon';
export default function Hero() {
  const title = "Eggshell";
  const desc = "Join the Luxe Life with EGGSHELL - The Pomeranian's Pick for Wealth and Whimsy";
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
    const progressValue = [
      {
        value: "25",
        price: "$10,00,00",
      },
    ];
    const defaultProgressValue = {
      value:progressValue[0].value,
      price:progressValue[0].price,

     
    };
    console.log(defaultProgressValue)
  return (
    <section className="hero-area">
      <Container>
        <Row>
          <Col md={5}>
            <figure>
              <img src={heroImg1} alt="" />
            </figure>
          </Col>
          <Col md={7}>
            <h1>{title}</h1>
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
          </Col>
        </Row>
        <Row>
          <Col md={5}>
              <figure className='heroImg2'>
                <img src={heroImg2} alt="" />
              </figure>
          </Col>
          <Col md={7}>
            <div className="hero-content">
                <p>{desc}</p>

                <div className="value">
                  <div className="value_bar"></div>
                  <div className="value_bar"></div>
                  <div className="value_bar"></div>
                  {progressValue.map((item, index)=>(
                    <span key={index}>{item.value}</span>
                  ))}
                </div>
            </div> 
          </Col>
        </Row>
      </Container>
      <MarqueeSection />
    </section>
  )
}
