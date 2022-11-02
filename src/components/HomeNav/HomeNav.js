import "./HomeNav.css";
import React, { useEffect} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCarauselMovie } from "../../redux/actions/carauselActions";


const HomeNav = () => {

//redux
const dispatch = useDispatch();
const { carausels } = useSelector((state) => state.carausel);

useEffect(() => {
  // Dispatch the getAllUsers actions
  dispatch(getCarauselMovie());
}, [dispatch]);



  const items = carausels?.map((item) => (
    <div
      key={item.id}
      className="main__nav"
      style={{
        backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path})`,
      }}
    >
      <div className="nav">
        <h3>{item.title || item.name}</h3>
        <p>{item.overview}</p>
        <p></p>
        <div className="back__btn">
          <button onClick={""}>
            NONTON TRAILER
          </button>
        </div>
      </div>
    </div>
  ));




  return (
//Menampilkan carousel autoplay slide halaman 2 detik
    <AliceCarousel
      infinite
      autoPlay
      disableButtonsControls
      mouseTracking
      autoPlayInterval={2000}
      items={items}
    />
  );
};

export default HomeNav;
