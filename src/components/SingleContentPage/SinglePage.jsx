import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_300, unavailable } from "../../api/config/DefaultImages";
import "./SinglePage.css";
import YouTubeIcon from "@mui/icons-material/YouTube";


//REDUX
import { useDispatch, useSelector } from "react-redux";
import {detailMovie} from "../../redux/actions/detailActions";

const SinglePage = () => {
//REDUX
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.detail);
  const { id, mediaType } = useParams();

  useEffect(() => {
    dispatch(detailMovie(mediaType, id));
    
  }, [dispatch]);
  return (
        <>
          <div>
            {details && (
              <div
                className="open__modal"
                style={{
                  backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path})`,
                }}
              >
                <img
                  className="poster__img"
                  src={
                    `${details.poster_path}`
                      ? `${img_300}/${details.poster_path}`
                      : unavailable
                  }
                  alt=""
                />
                <div className="open__detailsPage">
                  <h3>{details.original_title || details.name}</h3>
 

                  <div className="overview">
                    <p>{details.overview}</p>
                      <b className="tmdb">TMDB</b>
                      <b className="vote_ave">-⭐{details.vote_average}-/10 </b>
                  </div>
                  <div className="videopage">    
{/* BUTTON  UNTUK WATCH TRAILER  */}
                  <div className="wrapper">
                    <div className="image play_trailer" data-title="Arrival">
                      <div
                        className="btn btn-success px-4"
                        data-toggle="modal"
                      >
                        <span>
                          <YouTubeIcon style={{ color: "#e93d3d" }} />
                        </span>{" "}
                        Nonton Trailer
                      </div>
                    </div>
                  </div>           
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
  );
};

export default SinglePage;
