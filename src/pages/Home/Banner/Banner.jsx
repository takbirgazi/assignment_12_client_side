import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerSlide from "./BannerSlide";

const Banner = () => {
    return (
        <div>
            <Carousel>
                <BannerSlide></BannerSlide>
            </Carousel>
        </div>
    );
};

export default Banner;