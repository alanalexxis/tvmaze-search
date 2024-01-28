import axios from "axios";
import React, { useEffect, useState } from "react";
const Hero = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Se ejecuta solo una vez al montar el componente
  const threeShows = shows.slice(0, 3);
  const truncateSummary = (summary, wordsLimit) => {
    const words = summary.split(" ");
    if (words.length > wordsLimit) {
      return words.slice(0, wordsLimit).join(" ") + "...";
    }
    return summary;
  };
  return (
    <div className="flex flex-wrap justify-center md:justify-start space-x-4 overflow-x-auto">
      {threeShows.map((show) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={show.image && show.image.medium}
              alt={`Poster for ${show.name}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{show.name}</h2>
            <p
              className=" text-justify"
              dangerouslySetInnerHTML={{
                __html: truncateSummary(show.summary, 30),
              }}
            />
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ver ahora</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
