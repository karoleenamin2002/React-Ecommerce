import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const API_KEY = "ca9045f61d5e8f3464c7a15a236c66b3";

  // 🎬 Fetch movie details
  async function fetchData(movieId) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
      );
      setProduct(res.data);
    } catch (err) {
      console.log("Error fetching movie:", err);
    }
  }

  // ⚡ Load data when id changes
  useEffect(() => {
    fetchData(id);
  }, [id]);

  // ➡️ Next movie
  function handleNext() {
    navigate(`/details/${Number(id) + 1}`);
  }

  // ⬅️ Previous movie
  function handlePrev() {
    if (Number(id) > 1) {
      navigate(`/details/${Number(id) - 1}`);
    }
  }

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "30px" }}>
      <Card
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          background: "#222",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src={
            product.poster_path
              ? `https://image.tmdb.org/t/p/w500${product.poster_path}`
              : "https://via.placeholder.com/500"
          }
        />

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>

          <Card.Text>⭐ Rating: {product.vote_average}</Card.Text>

          <Card.Text>{product.overview}</Card.Text>

          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="dark"
              onClick={handlePrev}
              disabled={Number(id) <= 1}
            >
              ⬅ Prev
            </Button>

            <Button variant="danger" onClick={handleNext}>
              Next ➡
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
