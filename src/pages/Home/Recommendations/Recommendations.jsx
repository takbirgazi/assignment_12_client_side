
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import Rating from '@mui/material/Rating';


const Recommendations = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API}/reviews`)
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className="lg:w-10/12 w-11/12 mx-auto my-10">
            {/* <SectionTitle heading="What Our Clients Say" subHeading="TESTIMONIALS" /> */}
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-sm">
                    {
                        review.map(rev=> <SwiperSlide key={rev._id}>
                            <div className='px-10 flex flex-col gap-5 items-center justify-center'>
                            <Rating name="read-only" value={rev.rating} readOnly />
                                <FaQuoteLeft className='text-center w-full text-4xl'/>
                                <p className='text-sm my-5'>{rev.details}</p>
                                <h3 className='text-yellow-700'>{rev.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Recommendations;