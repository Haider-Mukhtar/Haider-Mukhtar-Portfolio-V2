import Marquee from "react-fast-marquee";
import { SliderImagesData } from "@/lib/constants";

const ImagesSliderSection = () => {
  return (
    <>
      <Marquee pauseOnHover autoFill>
        {SliderImagesData.map((item) => (
          <img
            className="h-100 mr-8"
            src={item.image}
            alt="Slider_Image"
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover autoFill direction="right" className="lg:mt-8">
        {SliderImagesData.map((item) => (
          <img
            className="h-100 mr-8 hidden lg:block"
            src={item.image}
            alt="Slider_Image"
          />
        ))}
      </Marquee>
    </>
  );
};

export default ImagesSliderSection;
