import { Container, Row, Col } from "react-bootstrap";
import whoIsImg from "../assets/img/whoIseggshellImg.png"
import MarqueeCommon from "./MarqueeCommon";
export default function WhoIsEgshel() {
  const title = "Who is Eggshell?";
  const desc = "EGGSHELL is the champion of the base ecosystem. Protecting vibing and growing a Eggshell commonuity"
  return (
    <section className="whoIsEggshell">
      <Container>
        <Row>
          <Col className="text-center">
            <h3>{title}</h3>
            <p>{desc}</p>
            <figure>
              <img src={whoIsImg} alt="" />
            </figure>
          </Col>
        </Row>
      </Container>
      <MarqueeCommon />
    </section>
  )
}
