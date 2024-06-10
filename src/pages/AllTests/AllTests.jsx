import { Helmet } from "react-helmet-async";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './../../hooks/useAxiosPublic';
import TestsCard from "../../components/TestsCard/TestsCard";


const AllTests = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allTestsHome = [] } = useQuery({
        queryKey: ["homeTest"],
        queryFn: async () => {
            const result = await axiosPublic.get("/allTests")
            return result?.data;
        }
    })
    return (
        <div>
            <Helmet>
                <title>All Tests - Health Care Diagnostics</title>
            </Helmet>
            <div className="mt-10">
                <div className="flex items-center justify-center">
                    <h2 className="border-y-2 px-4 py-3 font-bold text-2xl">All Tests</h2>
                </div>
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    allTestsHome.map(test=>  <TestsCard key={test._id} cardInfo={test}></TestsCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default AllTests;