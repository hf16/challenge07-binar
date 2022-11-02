import axios from "axios";
import { useEffect, useState } from "react";
import SingleData from "../../components/SingleData/SingleData";
import "./Home.css";
import Navbar from "../../components/HomeNav/HomeNav";
import LocalSearch from "../../components/Search/LocalSearch";


//redux
import { useDispatch, useSelector } from "react-redux";
import { getListMovie, searchMovie } from "../../redux/actions/listMovieActions";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //Redux fatch API LIST MOVIE
const dispatch = useDispatch();
const { movies } = useSelector((state) => state.movie);

useEffect(() => {
  // Dispatch the getAllUsers actions
  dispatch(getListMovie());
}, [dispatch]);

  return (
    <>
    <div style={{ marginTop: "-10px" }} >
      <Navbar />
    </div>
      {/* <main className="all__movies">     */}
      <main className="TreadingHome ">
        <div className="my__main">
          <div className="btn__pupuler">
            <h6>
              Populer Movies 
            </h6>
          </div>
          

{/* Button Search */}
          <LocalSearch
            setSearchTerm={setSearchTerm}
            query={searchTerm}
            fetchSearchApi={searchMovie}
            media="movies"
            placehold="Search Movies"
          />
          <p>See All Movie</p>
        </div>

{/* sudah di redux */}
        <div className="ListContent">
          {
            movies?.map((r) => (
              <SingleData key={r.id} {...r} mediaType="movie" />
            ))
         }
        </div>
      </main>      
    </>
  );
};

export default Home;
