import { Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex align-items-end justify-content-end">
        <hr />
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/sadiya-naushad-2baa07197/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/SadiyaNaushad" target="_blank"><img src={navIcon2} alt="" /></a>
            </div>
            <p>@2024. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}
