import axios from "axios";
import React, { useEffect, useState } from "react";
import StarRating from "./StarRaiting";
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
        const allShowsUrl = "https://api.tvmaze.com/shows";
        const allShowsResponse = await axios.get(allShowsUrl);
        const randomShows = getRandomShows(allShowsResponse.data, 9);
        setShows(randomShows);
        setLoading(false);

        return;
      }

      try {
        const response = await axios.get(url);
        console.log("API Response:", response.data); // Log the obtained data
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

  const handleShowDetails = (showId) => {
    const tvMazeUrl = `https://www.tvmaze.com/shows/${showId}`;
    window.open(tvMazeUrl, "_blank");
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-between space-y-4 overflow-x-auto overflow-hidden">
      {loading ? (
        <p>Loading...</p>
      ) : shows.length > 0 ? (
        shows.map((show) => (
          <div
            className="card w-96 bg-base-100 shadow-xl transform transition-transform hover:scale-105 bg-cover bg-no-repeat group relative"
            key={show?.id}
            style={{
              backgroundImage:
                show && show.image ? `url(${show.image.original})` : "none",
            }}
          >
            <div className="card-body opacity-0 group-hover:opacity-100 transition-opacity backdrop-filter backdrop-blur-md p-4 inset-0 bg-gradient-to-t from-black to-transparent">
              <h2 className="card-title underline">
                {show?.name || "Unknown"}
              </h2>
              <p
                className="text-justify text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: truncateSummary(show?.summary || "", 30),
                }}
              />

              <div className="star-rating-container">
                <StarRating rating={show?.rating?.average || 0} />
              </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowDetails(show.id)}
                >
                  Ver ahora
                </button>
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
