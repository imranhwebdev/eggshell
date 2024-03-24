import React from 'react'
import Snowfall from 'react-snowfall'
import { Col, Container, Row } from "react-bootstrap";
import heroImg1 from '../assets/img/heroImg1.png';
import heroImg2 from '../assets/img/heroImg2.png';
const snowflake0 = document.createElement('img')
snowflake0.src = '/public/heroImg1.png'
const snowflake1 = document.createElement('img')
snowflake1.src = '/public/heroImg2.png'
const snowflake3 = document.createElement('img')
snowflake3.src = '/public/whoIseggshellImg.png'
import MarqueeSection from './MarqueeCommon';
import CopyToClipboard from './CopyToClipboard';

const images = [snowflake0, snowflake1, snowflake3];

export default function Hero() {
  const title = "Eggshell";
  const desc = "Join the Luxe Life with EGGSHELL - The Pomeranian's Pick for Wealth and Whimsy";
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
  return (
    <section className="hero-area">
       <Snowfall snowflakeCount={400} images={images} speed={[0.5, 0.3]} changeFrequency={1000} wind={[-5, 3.0]} flakeWidth={'460px'} flakeHeight={'460px'}/>
      <Container>
        <Row>
          <Col md={5}>
            <figure className='heroImg1'>
              <img src={heroImg1} alt="" />
            </figure>
          </Col>
          <Col md={7}>
            <h1>{title}</h1>
           <CopyToClipboard />
          </Col>
        </Row>
        <Row className="align-items-end align-items-lg-start">
          <Col md={5} className="order-2 order-md-1">
              <figure className='heroImg2'>
                <img src={heroImg2} alt="" />
              </figure>
          </Col>
          <Col md={{ span: 6, offset: 1 }}  className="order-1 order-md-2">
            <div className="hero-content">
                <p>{desc}</p>

                <div className="value d-flex align-items-center">
                  <div className="value_bar active"></div>
                  <div className="value_bar"></div>
                  <div className="value_bar"></div>
                  <div className="value_bar"></div>
                  {progressValue.map((item, index)=>(
                    <span key={index}>{item.value}</span>
                  ))}
                </div>
                <div className="prograss-bar">
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="price">
                  {progressValue.map((item, index)=>(
                    <span key={index}>{item.price}</span>
                  ))}
                  </span>
                </div>
            </div> 
          </Col>
        </Row>
      </Container>
      <MarqueeSection />
    </section>
  )
}
