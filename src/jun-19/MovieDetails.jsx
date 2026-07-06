import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { movieData } from "./movie";
import Header from "./Header";
import { useEffect, useState } from "react";

function MovieDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const movie = movieData.find((item) => item.id === Number(id));
  const [playTrailer, setPlayTrailer] = useState(false);

  if (!movie) {
    return <h1 className="not-found">Movie not found</h1>;
  }

  return (
    <>
      <Header />

      <div className="movie-details-page">
        <div className="details-card">
          <div className="left-section">
            {!playTrailer ? (
              <>
                <img className="poster" src={movie.poster} alt={movie.title} onClick={() => setPlayTrailer(true)}/>
                <div className="trailer-label" onClick={() => setPlayTrailer(true)}>
                  <span>▶ Trailer</span>
                </div>
              </>
            ) : (
              <iframe
                className="poster"
                src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=1&controls=0&rel=0&modestbranding=1`}
                title={movie.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="right-section">
            <h1>{movie.title}</h1>

            <div className="movie-meta">
              <span>⭐ {movie.rating}/10</span>
              <span>{movie.language}</span>
              <span>{movie.genre}</span>
            </div>

            <p className="description">
              {movie.description ||
                "Experience this blockbuster movie on the big screen with powerful action, emotional storytelling, amazing visuals, and unforgettable performances."}
            </p>

            <div className="movie-info-grid">
              <div className="info-card">
                <h4>Duration</h4>
                <p>2h 45m</p>
              </div>

              <div className="info-card">
                <h4>Release</h4>
                <p>2025</p>
              </div>

              <div className="info-card">
                <h4>IMDb</h4>
                <p>{movie.rating}/10</p>
              </div>

              <div className="info-card">
                <h4>Language</h4>
                <p>{movie.language}</p>
              </div>

              <div className="info-card">
                <h4>Genre</h4>
                <p>{movie.genre}</p>
              </div>

              <div className="info-card">
                <h4>Format</h4>
                <p>2D • IMAX</p>
              </div>
            </div>

            <div className="button-group">
              <button className="book-btn">{movie.buttonText}</button>
              <button className="trailer-btn" onClick={() => setPlayTrailer(true)}>▶ Watch Trailer</button>
            </div>
          </div>
        </div>

        <section className="cast-section">
          <h2>Cast & Crew</h2>

          <div className="cast-container">
            {movie.cast.map((actor, index) => (
              <div className="cast-card" key={index}>
                <img src={actor.image} alt={actor.name} />

                <h4>{actor.name}</h4>

                <p>{actor.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="leo-gallery-section">
          <h2>{movie.title} Visual Gallery</h2>

          <div className="glass-image-box">
            <img src={movie.galleryImage} alt={`${movie.title} gallery`} />
          </div>
        </section>
      </div>
    </>
  );
}

export default MovieDetails;
