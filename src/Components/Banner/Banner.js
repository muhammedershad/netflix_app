import React, { useContext, useEffect, useState } from "react";
import "./Banner.css";
import axios, { AxiosContext } from "../../constents/axios";
import { API_KEY, imageUrl } from "../../constents/constents";

function Banner() {
  const [movie, setMovie] = useState([]);
  const {axiosInstance} = useContext(AxiosContext)
  useEffect(() => {
    axiosInstance
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const randomNum = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
        setMovie(response.data.results[randomNum]);
      });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
