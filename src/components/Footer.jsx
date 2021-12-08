import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/Kennnnn774"
          aria-label="My GitHub"
        >
          Kennnnn774
        </a>{" "}
        <p>
          <small className="text-muted">
            The Project in my Github is open source.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
