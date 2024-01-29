import { Link } from "react-router-dom";
import homeImage from "../assets/home.jpg";
const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Buscador TvMaze</h1>
            <p className="mb-5">
              Sumérgete en el mundo del cine como nunca antes. ¡Encuentra,
              explora, disfruta!
            </p>
            <Link to="/home">
              <button className="btn btn-primary">Explorar ahora</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
