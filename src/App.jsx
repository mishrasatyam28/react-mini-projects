import { useState } from "react";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";

function App() {
  return (
    <div>
      {/* Accordian component */}
      <Accordian />

      {/* Random Color Component */}
      <RandomColor />

      {/* Star Rating */}
      <StarRating noOfStars={10} />

      {/* Image slider component */}

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      />
    </div>
  );
}

export default App;
