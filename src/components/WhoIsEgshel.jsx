import { Container, Row, Col } from "react-bootstrap";
import whoIsImg from "../assets/img/whoIseggshellImg.png"
import MarqueeCommon from "./MarqueeCommon";
export default function WhoIsEgshel() {
  const title = "Who is $MOAT";
  const desc = "EGGSHELL is the champion of the base ecosystem. Protecting vibing and growing a Eggshell commonuity"
  return (
    <section className="who-area">
      <Container>
        <Row>
          <Col className="text-center">
           <div className="who-info">
            <span className="who-dot1"></span>
            <span className="who-dot2"></span>
              <div className="details">
                <h3>{title}</h3>
                <p>{desc}</p>
                <figure>
                  <img src={whoIsImg} alt="" />
                </figure>
              </div>
            <span className="who-dot3"></span>
            <span className="who-dot4"></span>
           </div>
          </Col>
        </Row>
      </Container>
      <MarqueeCommon />
    </section>
  )
}
