import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = ({ searchQuery }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let url;

      if (searchQuery) {
        url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
          searchQuery
        )}`;
      } else {
        // Si la búsqueda es vacía, obtener todos los shows populares y seleccionar aleatoriamente 9
        const allShowsUrl = "https://api.tvmaze.com/shows";
        const allShowsResponse = await axios.get(allShowsUrl);
        const randomShows = getRandomShows(allShowsResponse.data, 9);
        setShows(randomShows);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(url);
        setShows(response.data.slice(0, 9).map((item) => item.show));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const truncateSummary = (summary, wordsLimit) => {
    if (summary) {
      const words = summary.split(" ");
      if (words.length > wordsLimit) {
        return words.slice(0, wordsLimit).join(" ") + "...";
      }
      return summary;
    }
    return "No summary available.";
  };

  const getRandomShows = (allShows, count) => {
    const shuffledShows = allShows.sort(() => 0.5 - Math.random());
    return shuffledShows.slice(0, count);
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-start space-x-4 overflow-x-auto">
      {loading ? (
        <p>Loading...</p>
      ) : shows.length > 0 ? (
        shows.map((show) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={show?.id}>
            <figure>
              {show && show.image && show.image.medium && (
                <img
                  src={show.image.medium}
                  alt={`Poster for ${show.name || "Unknown"}`}
                />
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{show?.name || "Unknown"}</h2>
              <p
                className="text-justify"
                dangerouslySetInnerHTML={{
                  __html: truncateSummary(show?.summary || "", 30),
                }}
              />
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ver ahora</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Ningún show encontrado.</p>
      )}
    </div>
  );
};

export default Hero;
