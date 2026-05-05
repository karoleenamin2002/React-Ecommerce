import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const API_KEY = "ca9045f61d5e8f3464c7a15a236c66b3";

  // 🎬 Fetch trending movies (only 6)
  async function fetchMovies() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    );

    setMovies(res.data.results.slice(0, 6));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ background: "#111", color: "#fff", minHeight: "100vh" }}>

      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(to right, #000, #222)",
        }}
      >
        <h1>🎬 Welcome to Movie App</h1>
        <p>Discover, search and explore thousands of movies</p>

        <Button
          variant="danger"
          className="mt-3"
          onClick={() => navigate("/products")}
        >
          Explore Movies
        </Button>
      </div>

      {/* 🔥 FEATURED MOVIES */}
      <Container className="mt-5">
        <h3 className="text-center mb-4">🔥 Trending Movies</h3>

        <Row lg={3} md={2} sm={1} className="g-3">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <Card
                style={{
                  background: "#222",
                  color: "#fff",
                  border: "none",
                }}
              >
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />

                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>⭐ {movie.vote_average}</Card.Text>

                  <Button
                    variant="danger"
                    onClick={() => navigate(`/details/${movie.id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ⭐ FEATURES */}
      <div className="text-center my-5">
        <h3>✨ Why Choose Us?</h3>

        <div className="d-flex justify-content-center gap-5 mt-4 flex-wrap" style={{paddingBottom:"20px"}}>
          <div>🎬 Thousands of Movies</div>
          <div>🔍 Smart Search</div>
          <div>⭐ High Quality Ratings</div>
        </div>
      </div>
    </div>
  );
}
