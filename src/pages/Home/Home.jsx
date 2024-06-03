import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TestsCard from "./TestsCard/TestsCard";
import { Parallax, } from 'react-parallax';
import promBg from "../../assets/images/banner.jpg";
import Recommendations from "./Recommendations/Recommendations";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home - Health Care Diagnostics</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <div>
                    <div className="flex items-center justify-center">
                        <h2 className="border-y-2 px-4 py-3 font-bold text-2xl">Featured Tests</h2>
                    </div>
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                        <TestsCard></TestsCard>
                        <TestsCard></TestsCard>
                        <TestsCard></TestsCard>
                        <TestsCard></TestsCard>
                        <TestsCard></TestsCard>
                    </div>
                </div>
                <div className="border mb-5">
                    <Parallax
                        blur={{ min: -50, max: 50 }}
                        bgImage={promBg}
                        bgImageAlt="Background"
                        strength={-400}
                        className="flex items-center justify-center size-fit w-full"
                    >
                        <div className="flex items-center justify-center flex-col gap-3 py-16 my-10 w-full">
                            <p className="md:w-10/12 w-11/12 mx-auto text-white text-center bg-black bg-opacity-5">Explore Health Care Diagnostics range of assessments, from General Health and Heart Health Checks to Diabetes Risk Tests and Mental Health Screenings, designed to help you take charge of your well-being with personalized insights and recommendations</p>
                            <button className="btn btn-outline text-white my-5">Explore a tests</button>
                        </div>
                    </Parallax>
                </div>
                <div>
                    <Recommendations></Recommendations>
                </div>
            </div>
        </div>
    );
};

export default Home;