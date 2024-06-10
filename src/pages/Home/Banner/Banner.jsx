import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerSlide from "./BannerSlide";
import { useEffect, useState } from "react";

const Banner = () => {
    const [allbanner, setAllBanner] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/addBanner`)
        .then(res => res.json())
            .then(data => {
                setAllBanner(data.filter(banner=> banner.isActive==true))
        })
    }, [])
    return (
        <div>
            <Carousel>
                {
                    allbanner.map(banner=> <BannerSlide key={banner._id} bannerInfo={banner}></BannerSlide>)
                }
            </Carousel>
        </div>
    );
};

export default Banner;