import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TestsCard from "./TestsCard/TestsCard";


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
            </div>
        </div>
    );
};

export default Home;