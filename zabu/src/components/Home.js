import React from "react";
import Carousel from 'react-elastic-carousel';


const Home = () => {
  return (
    <>
    <div
      className="min-h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black "
    >
    <h1 className="text-white text-2xl pt-10">HELLO THJERERE</h1>
    <Carousel showArrows={false} itemsToShow={2} enableAutoPlay>
        <div>
            <h1 className="text-white">hello</h1>
          <img
            className="p-5 w-96"
            src="https://www.re-coded.com/ReCoded-Logo-Black.png.webp"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5 w-96"
            src="https://gelbasla.com/uploads/files/tr/643/thumb-816x460-a96173b055640d884d3c1d90e926d860.jpg"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5 w-96"
            src="https://scrimba.com/static/art/dark-logo.svg"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5 w-96"
            src="https://jobboardhq.blob.core.windows.net/assets/prod/cnne/tm2l/employerLogo.png?v=191120032141"
            alt="partner img"
          />
        </div>
        <div>
          <img
            className="p-5 w-96"
            src="https://www.instructure.com/sites/default/files/image/2021-12/Canvas_Horizontal_ByInstructure_Color_RGB.png"
            alt="partner img"
          />
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default Home;
