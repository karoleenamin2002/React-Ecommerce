import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo1.jpg";
export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo1} alt="logo" width="80" height="70" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                margin: "12px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                transform: isActive ? "scale(1.2) translateY(5px)" : "scale(1)",
                color: isActive ? "red" : "white",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              style={({ isActive }) => ({
                margin: "12px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                transform: isActive ? "scale(1.2) translateY(5px)" : "scale(1)",
                color: isActive ? "red" : "white",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => ({
                margin: "12px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                transform: isActive ? "scale(1.2) translateY(5px)" : "scale(1)",
                color: isActive ? "red" : "white",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              About
            </NavLink>
          </Nav>

          <button className="btn btn-danger" onClick={() => navigate("/login")}>
            Login
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
