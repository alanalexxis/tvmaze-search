import React, { useEffect, useState } from "react";

const Banner = () => {
  const [randomShowImages, setRandomShowImages] = useState([]);

  useEffect(() => {
    const fetchRandomShowImages = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");
        const shows = await response.json();

        const randomShows = shows.sort(() => Math.random() - 0.5).slice(0, 20);

        const images = randomShows.map((show) => ({
          id: show.id,
          image: show.image?.medium || "",
        }));

        setRandomShowImages(images);
      } catch (error) {
        console.error("Error fetching random show images", error);
      }
    };

    // Fetch initial images only once
    fetchRandomShowImages();

    // Set up interval to shuffle the order of the initial images every 3 seconds
    const intervalId = setInterval(() => {
      setRandomShowImages((prevImages) => [
        ...prevImages.sort(() => Math.random() - 0.5),
      ]);
    }, 3000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="carousel rounded-box">
      {randomShowImages.map((show) => (
        <div key={show.id} className="carousel-item">
          <img src={show.image} alt="Random Show" />
        </div>
      ))}
    </div>
  );
};

export default Banner;
