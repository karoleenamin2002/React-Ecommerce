import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { instance } from "../instance";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const API_KEY = "ca9045f61d5e8f3464c7a15a236c66b3";

  async function fetchPopular(pageNumber) {
    const res = await instance.get(`/movie/popular?page=${pageNumber}`);
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
        paddingTop: "90px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search movies..."
            className="form-control form-control-lg"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <Row lg={4} md={3} sm={2} xs={1} className="g-4">
          {products.map((prod) => (
            <Col key={prod.id}>
              <Card
                className="h-100 shadow-lg"
                style={{
                  background: "#222",
                  color: "#fff",
                  border: "none",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  variant="top"
                  src={
                    prod.poster_path
                      ? `https://image.tmdb.org/t/p/w500${prod.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  style={{
                    height: "400px",
                    objectFit: "cover",
                  }}
                />

                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title
                      style={{
                        minHeight: "50px",
                        fontSize: "1rem",
                      }}
                    >
                      {prod.title}
                    </Card.Title>

                    <Card.Text>
                      ⭐ Rating: {prod.vote_average?.toFixed(1)}
                    </Card.Text>
                  </div>

                  <Button
                    variant="danger"
                    className="w-100 mt-3"
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
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <Button
              variant="secondary"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </Button>

            <span className="fs-5 fw-bold">Page {page}</span>

            <Button variant="danger" onClick={() => setPage((p) => p + 1)}>
              Next
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
