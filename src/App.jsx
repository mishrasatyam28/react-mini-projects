import { useState } from "react";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import Counter from "./components/01counter/Counter";
import ImageGallery from "./components/02Image-gallery/ImageGallery";
import GuessNumber from "./components/03GuessNumber/GuessNumber";

function App() {
  return (
    <div>
      {/* 01Counter */}
      <Counter />

      {/* 02Image-Gallery */}
      <ImageGallery />

      {/* 03GuessNumbet */}
      <GuessNumber />
      
      {/* Accordian component */}
      <Accordian />

      {/* Random Color Component */}
      <RandomColor />

      {/* Star Rating */}
      <StarRating noOfStars={10} />

      {/* Image slider component */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      /> */}
    </div>
  );
}

export default App;
