import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, Myself <span className="blue">Balavedhaa S</span>
            <span className="blue"> from Coimbatore, TamilNadu, India.</span>
            <br /><span className="purple">I am on my 3rd year in Kumaraguru College Of Technology and currently pursuing my degree in B.Tech Artificial Intelligence and Data Science</span>
            <br />
            I am trying to improve my knowledge on ReactJS.
            <br />
            <br />
            Also, I have attended Full stack development training.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hearing Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Unity
            </li>
          </ul>

          <p style={{ color: "rgb(126, 155, 172)" }}>
            "You are your home"{" "}
          </p>
          <footer className="blockquote-footer">Balavedhaa S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;