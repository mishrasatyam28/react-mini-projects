import Counter from "./components/01counter/Counter";
import ImageGallery from "./components/02Image-gallery/ImageGallery";
import GuessNumber from "./components/03GuessNumber/GuessNumber";
import Accordian from "./components/04Accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import ImageSlider from "./components/image-slider/ImageSlider";
import StarRating from "./components/05start-rating";
import TelephoneFormatter from "./components/06Telephone-formatter";

function App() {
  return (
    <div>
      {/* 01Counter */}
      <Counter />

      {/* 02Image-Gallery */}
      <ImageGallery />

      {/* 03GuessNumbet */}
      <GuessNumber />

      
      {/* 04Accordian */}
      <Accordian />

      {/* 05Star-rating */}
      <StarRating noOfStars={10} />

      {/* 06Telephone Formatter */}
      <TelephoneFormatter/>

      {/* Random Color Component */}
      <RandomColor />


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
