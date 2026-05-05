import { Container } from "react-bootstrap";

export default function About() {
  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        paddingTop: "60px",
        paddingBottom: "40px",
      }}
    >
      <Container>

        {/* 🎬 Title */}
        <div className="text-center mb-5">
          <h1>🎬 About Movie App</h1>
          <p style={{ color: "#bbb" }}>
            Your gateway to discovering amazing movies
          </p>
        </div>

        {/* 📌 Content Section */}
        <div
          style={{
            background: "#222",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h3>✨ What is this project?</h3>
          <p style={{ color: "#ccc" }}>
            This is a React-based movie application that allows users to
            explore popular movies, search for their favorite films, and view
            detailed information about each movie using The Movie Database API.
          </p>

          <h3>Features</h3>
          <ul style={{ color: "#ccc",listStyle:"none" }}>
            <li> Browse popular movies</li>
            <li> Search movies by name</li>
            <li> View movie details</li>
            <li> Responsive design using Bootstrap</li>
          </ul>

          <h3>Tech Stack</h3>
          <ul style={{ color: "#ccc",listStyle:"none" }}>
            <li>React.js</li>
            <li>React Router</li>
            <li>Axios</li>
            <li>React Bootstrap</li>
            <li>TMDB API</li>
          </ul>

          <h3>Developer</h3>
          <p style={{ color: "#ccc" }}>
            Built by Karoleen Amin as a learning project to practice React,
            API integration, and UI design.
          </p>
        </div>

      </Container>
    </div>
  );
}