import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const API_KEY = "ca9045f61d5e8f3464c7a15a236c66b3";


  async function fetchPopular(pageNumber) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`,
    );
    setProducts(res.data.results);
  }


  async function fetchSearch(query) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
    );
    setProducts(res.data.results);
  }


  useEffect(() => {
    if (search === "") {
      fetchPopular(page);
    }
  }, [page, search]);


  const handleSearch = (value) => {
    setSearch(value);

    if (value.trim() === "") {
      fetchPopular(page);
    } else {
      fetchSearch(value);
    }
  };


  function ProductDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        color: "#fff",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <input
          type="text"
          placeholder="Search movies..."
          className="form-control my-3"
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Row lg={4} md={2} className="g-3">
          {products.map((prod) => (
            <Col key={prod.id}>
              <Card
                style={{
                  width: "100%",
                  background: "#222",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${prod.poster_path}`}
                />

                <Card.Body>
                  <Card.Title>{prod.title}</Card.Title>

                  <Card.Text>⭐ Rating: {prod.vote_average}</Card.Text>

                  <Button
                    variant="danger"
                    onClick={() => ProductDetails(prod.id)}
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {search === "" && (
          <div className="d-flex justify-content-center align-items-center gap-3 my-4">
            <Button
              variant="dark"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </Button>

            <span>Page {page}</span>

            <Button variant="danger" onClick={() => setPage((p) => p + 1)}>
              Next
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
