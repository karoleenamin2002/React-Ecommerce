import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "20px 0",
        marginTop: "30px",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h5>MyApp</h5>
            <p>Best place to explore movies 🎬</p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <p>
              {" "}
              <NavLink
                to={"/"}
                style={{ textDecoration: "none", margin: "5px" }}
                className={({ isActive }) =>
                  isActive ? "text-danger" : "text-light"
                }
              >
                Home
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/products"}
                style={{ textDecoration: "none", margin: "5px" }}
                className={({ isActive }) =>
                  isActive ? "text-danger" : "text-light"
                }
              >
                Products
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/about"}
                style={{ textDecoration: "none", margin: "5px" }}
                className={({ isActive }) =>
                  isActive ? "text-danger" : "text-light"
                }
              >
                About
              </NavLink>
            </p>
          </Col>

          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: karolamin47@mail.com</p>
            <p>Phone: 01000000000</p>
          </Col>
        </Row>

        <hr style={{ borderColor: "#555" }} />

        <p style={{ textAlign: "center" }}>
          © {new Date().getFullYear()} Karoleen Amin. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
