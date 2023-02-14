import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./newsletter.scss";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, minus?
              </h2>
              <div className="newsletter__input">
                <input type="email" placeholder="enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet. Natus, eius?
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
