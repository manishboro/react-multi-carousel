import Carousel from "react-multi-carousel";

import { images } from "./constants/images";
import { responsiveMain } from "./constants/responsiveMain";
import { responsiveMini } from "./constants/responsiveMini";
import CarouselMiniCard from "./components/CarouselMiniCard";
import CarouselMainCard from "./components/CarouselMainCard";

function App() {
  return (
    <div className="App">
      <section>
        <Carousel
          responsive={responsiveMain}
          swipeable={false}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          arrows={true}
          dotListClass="slider-dot-list"
        >
          {images.map((el) => (
            <CarouselMainCard key={el.name} data={el} />
          ))}
        </Carousel>
      </section>

      <section style={{ padding: "60px 0" }}>
        <Carousel
          responsive={responsiveMini}
          swipeable={false}
          showDots={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-mini-cards"
          dotListClass="slider-dot-list"
        >
          {images.map((el) => (
            <CarouselMiniCard key={el.name} data={el} />
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default App;
