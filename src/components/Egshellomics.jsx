import { Container, Row, Col } from "react-bootstrap";
import eggshellomicsImg from '../assets/img/eggshellomics.png'
import MarqueeCommon from "./MarqueeCommon";
export default function Egshellomics() {
  const title = "MOATenomics";
  const eggmicsService = [
    {
      title: "THE Base <br /> coop"
    },
    {
      title: "FAIR <br /> LAUNCH"
    },
    {
      title: "TOTAL SUPPLY <br /> TBA"
    },
    {
      title: "50% LP <br /> 50% PRESALEW"
    },
  ]
  return (
    <section className="eggshellomics-area">
      <figure className="egshmics d-none d-md-block">
        <img src={eggshellomicsImg} alt="" />
      </figure>
      <Container>
        <Row>
          <Col>
          <div className="section-title text-center">
            <h2>{title}</h2>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 7, offset: 5 }}>
            <div className="eggshellomics-service">
              {eggmicsService.map((item, index)=>(
                <div className="single-item" key={index}>
                  <h5 key={index} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <MarqueeCommon />
    </section>
  )
}
