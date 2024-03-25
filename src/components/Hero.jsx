import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import { Col, Container, Row } from "react-bootstrap";
import heroImg1 from '../assets/img/heroImg1.png';
import heroImg2 from '../assets/img/heroImg2.png';
import MarqueeSection from './MarqueeCommon';
import CopyToClipboard from './CopyToClipboard';
const snowflake0 = document.createElement('img')
snowflake0.src = '/public/heroImg1.png'
const snowflake1 = document.createElement('img')
snowflake1.src = '/public/heroImg2.png'
const snowflake2 = document.createElement('img')
snowflake2.src = '/public/whoIseggshellImg.png'
const images = [snowflake0, snowflake1, snowflake2];
export default function Hero() {


  const title = "$MOAT";
  const presaleAddress = "PRESALE ADDRESS:";

  const progressValue = [
    {
      title: "START",
      value: "25",
      price: "$44,251",
    },
    {
      title: "GOOD",
      value: "50",
      price: "$84,251",
    },
    {
      title: "VERY GOOD",
      value: "75",
      price: "$120,251",
    },
    {
      title: "FINISH",
      value: "100",
      price: "$160,251",
    },
  ];
  const [defaultProgressValue, setDefaultProgressValue] = useState({
    value: progressValue[0].value,
    price: progressValue[0].price,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const progressHandle = (newValue, newPrice, index) => {
    setDefaultProgressValue({
      value: newValue,
      price: newPrice,
    });
    setActiveIndex(index)
  };

  return (
    <>
      <section className="hero-area">
        <Snowfall snowflakeCount={400} speed={[0.4, 0.3]} images={images} />
        <figure className='heroImg2'>
          <img src={heroImg2} alt="" />
        </figure>
        <Container>
          <Row>
            <Col md={6}>
              <figure className='heroImg1'>
                <img src={heroImg1} alt="" />
              </figure>
            </Col>
            <Col md={6}>
              <h1>{title}</h1>
              <h5 className='text-center'>{presaleAddress}</h5>
              <CopyToClipboard />
            </Col>
          </Row>
          <Row className="align-items-end align-items-lg-start">
            <Col md={6} className="order-2 order-md-1">

            </Col>
            <Col md={6} className="order-1 order-md-2 text-end">
              <div className="hero-content">
                {/* <div className="value d-flex align-items-center">
                {progressValue.map((item, index) => (
                  <button className={index === activeIndex ? 'active' : ''} onClick={() => progressHandle(item.value, item.price, index)} key={index}>{item.title}</button>
                ))}
              </div> */}
                <div className="prograss-bar">
                  <div className="prograss-item position-absolute left-0 w-100 top-0 z-1 h-100 d-grid">
                    {progressValue.map((item, index) => (
                      <div key={index} onClick={() => progressHandle(item.value, item.price, index)}></div>
                    ))}
                  </div>
                  <div className="prograss-inner" style={{ width: defaultProgressValue.value + '%' }}>
                    <div className="prograss-inner-wrap"></div>
                    <span className="price">
                      <span>{defaultProgressValue.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <MarqueeSection />
    </>
  )
}
