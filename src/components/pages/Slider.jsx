import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss"; // custom animations

const Slider = () => {
  const items = [
    { id: 1, title: "what people are saying", image:"https://evengreener.com/cdn/shop/files/Eco_Friendly_Gardening_1440x.webp?v=1697809282", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis, ipsa similique corporis enim, itaque sed illo nesciunt incidunt consectetur quaerat, maxime aliquam. Amet iste fuga inventore adipisci cum dolorem! Odit cupiditate ipsa, ex expedita commodi minima adipisci ut consequuntur." },
    { id: 2, title: "what people are saying", image:"https://evengreener.com/cdn/shop/files/Eco_Friendly_Gardening_1440x.webp?v=1697809282", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis, ipsa similique corporis enim, itaque sed illo nesciunt incidunt consectetur quaerat, maxime aliquam. Amet iste fuga inventore adipisci cum dolorem! Odit cupiditate ipsa, ex expedita commodi minima adipisci ut consequuntur." },
    { id: 3, title: "what people are saying", image:"https://evengreener.com/cdn/shop/files/Eco_Friendly_Gardening_1440x.webp?v=1697809282", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis, ipsa similique corporis enim, itaque sed illo nesciunt incidunt consectetur quaerat, maxime aliquam. Amet iste fuga inventore adipisci cum dolorem! Odit cupiditate ipsa, ex expedita commodi minima adipisci ut consequuntur." },
    { id: 4, title: "what people are saying", image:"https://evengreener.com/cdn/shop/files/Eco_Friendly_Gardening_1440x.webp?v=1697809282", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis debitis, ipsa similique corporis enim, itaque sed illo nesciunt incidunt consectetur quaerat, maxime aliquam. Amet iste fuga inventore adipisci cum dolorem! Odit cupiditate ipsa, ex expedita commodi minima adipisci ut consequuntur." },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="cros">
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={false}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={700} // slower for dramatic effect
        containerClass="carousel-container"
        itemClass="fancy-card" // custom animation class
      >
        {items.map((item) => (
          <div className="card" key={item.id}>
            <div className="vvk">
              <img src={item.image} alt="" />
            </div>
            <div className="tex">
              <div className="texcontainer">
                <h4> {item.title} </h4>
                <h3>★★★★★</h3>
                <p>{item.description} </p>

                <button>SHOP RAINSAVERS</button>
              </div>
              

            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

