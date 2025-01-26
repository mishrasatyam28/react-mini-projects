import Counter from "./components/01counter/Counter";
import ImageGallery from "./components/02Image-gallery/ImageGallery";
import GuessNumber from "./components/03GuessNumber/GuessNumber";
import Accordian from "./components/04Accordian/Accordian";
import StarRating from "./components/05start-rating";
import TelephoneFormatter from "./components/06Telephone-formatter";
import StringTransformers from "./components/07string-transformer/index";
import TicTacToe from "./components/08TicTacToe";
import RandomColorGenrator from "./components/09random-color/index";
import ImageSlider from "./components/10image-slider/index";
import { LoadMoreData } from "./components/11loadmore-data";
import { TreeView } from "./components/12Tres-view";
import menus from "./components/12Tres-view/data";
import { QrCodeGenerator } from "./components/13qr-code-generator";
import { LightDarkMode } from "./components/14theme-switch";
import ScrollIndicator from "./components/15scroll-indicator";
import { TabTest } from "./components/16Tabs/tab-test";
import ModalTest from "./components/17custom-modal/modal-test";


function App() {
  return (
    <div>
      {/* 01Counter */}
      {/* <Counter /> */}

      {/* 02Image-Gallery */}
      {/* <ImageGallery /> */}

      {/* 03GuessNumbet */}
      {/* <GuessNumber /> */}

      
      {/* 04Accordian */}
      {/* <Accordian /> */}

      {/* 05Star-rating */}
      {/* <StarRating noOfStars={10} /> */}

      {/* 06Telephone Formatter */}
      {/* <TelephoneFormatter /> */}
      
      {/* 07String-transformer */}
      {/* <StringTransformers /> */}
      
      {/* 08 TicTacToe */}
      {/* <TicTacToe/> */}

      {/* 09-Color Genrator */}
      {/* <RandomColorGenrator/> */}


      {/* 10-Image slider component */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* 11 -Loadmore button */}
      {/* <LoadMoreData /> */}
      
      {/* 12 -Tree-view /  Menu Ui / Recursive navigation menu*/}
      {/* <TreeView menus={menus}/> */}

      {/* 13 - QR Code generator */}
      {/* <QrCodeGenerator /> */}
      
      {/* 14 - Theme Switch */}
      {/* <LightDarkMode/> */}

      {/* 15-Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* 16- Tabs */}
      {/* <TabTest/> */}

      {/* 17 - modal */}
      <ModalTest/>
    </div>
  );
}

export default App;
