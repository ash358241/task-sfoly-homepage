import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import { followUs, contactUs } from "../FooterData/FooterData";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footerContent row">
          <div className="col-md-4" style={{ textAlign: "left" }}>
            <h3>Springfield Olympiads</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              maiores asperiores tenetur cumque voluptas aspernatur ullam a
              nostrum enim accusamus placeat necessitatibus ad veritatis quis,
              sunt harum culpa veniam delectu
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us:</h5>
            {followUs.map((link, i) => (
              <a
                href={link.link}
                key={i++}
                className="text-decoration-none d-block text-light"
              >
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "100%",
                    margin: "5px",
                  }}
                  src={link.logo}
                  alt=""
                />
                {link.title}
              </a>
            ))}
          </div>
          <div className="col-md-4 text-white" style={{ textAlign: "left" }}>
            <h5>Contact Us:</h5>
            {contactUs.map((link, i) => (
              <a
                href={link.link}
                key={i++}
                className="text-decoration-none d-block text-light"
              >
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "100%",
                    margin: "5px",
                  }}
                  src={link.logo}
                  alt=""
                />
                {link.title}
              </a>
            ))}
          </div>
          <h6 className="my-3">© Copyright 2021 Springfield Olympiads</h6>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
