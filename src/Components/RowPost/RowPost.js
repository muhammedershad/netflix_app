import React, { useContext, useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../constents/constents";
import YouTube from "react-youtube";
import { AxiosContext } from "../../constents/axios";

function RowPost({ title, isSmall, url }) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();

  const {axiosInstance} = useContext(AxiosContext)

  useEffect(() => {
    axiosInstance.get(url).then((response) => {
      setMovies(response.data.results);
    });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axiosInstance
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response);
        response.data.results.length !== 0 &&
          setUrlId(response.data.results[0]);
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          return (
            <div className="image-container">
              <img
                onClick={() => {
                  handleMovie(movie.id);
                }}
                key={movie.title}
                className={isSmall ? "smallPoster" : "poster"}
                alt="poster"
                src={`${imageUrl + movie.backdrop_path}`}
              />
              <p className="title-overlay">{movie.title}</p>
            </div>
          );
        })}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
