import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";
import "./style.css";

import { useNavigate } from "react-router-dom";

const ContactContainer = (props) => {
  const myData = [
    {
      name: "Instagram",
      link: "https://instagram.com/_ujjwal_walia?igshid=ZDdkNTZiNTM=",
      text: "Follow to my Instagram.",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ujjwalw3/",
      text: "Follow to my linkedin.",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/UjjwalWalia15",
      text: "Follow to my twitter.",
    },
    {
      name: "StackOverFlow",
      link: "https://stackoverflow.com/users/20446404/ujjwal-walia",
      text: "Check out to my stackoverflow account.",
    },
    {
      name: "GitHub",
      link: "https://github.com/ujjwal0",
      text: "Follow to my github account.",
    },
    {
      name: "Email",
      link: "mailto:ujjwalwalia15@gmail.com",
      text: "write to me a mail",
    },
  ];

  const navigate = useNavigate();

  if (!props.isUserLogin) {
    navigate("/");
    return <></>;
  }

  return (
    <div className="contactWrap">
      <Container>
        <Row>
          <Col>
            <p>CONNECT WITH US</p>
            <h1>Get in Touch</h1>
          </Col>
        </Row>
        <Row>
          <Col className="conectIcon">
            <ul className="socialIconsList">
              <li>
                <a
                  rel="noreferrer"
                  href="https://instagram.com/_ujjwal_walia?igshid=ZDdkNTZiNTM="
                  target="_blank"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ujjwalw3/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/UjjwalWalia15"
                  target="_blank"
                >
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://stackoverflow.com/users/20446404/ujjwal-walia"
                  target="_blank"
                >
                  <BsStackOverflow />
                </a>
              </li>

              <li>
                <a
                  rel="noreferrer"
                  href="https://github.com/ujjwal0"
                  target="_blank"
                >
                  <BsGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="contactList">
              {myData && myData.length > 0
                ? myData.map((item) => {
                    return (
                      <ListGroup.Item key={item.name}>
                        <span>{item.text}</span>
                        <a href={item.link} rel="noreferrer" target="_blank">
                          {item.link}
                        </a>
                      </ListGroup.Item>
                    );
                  })
                : ""}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactContainer;
