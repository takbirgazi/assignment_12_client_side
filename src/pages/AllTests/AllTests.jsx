import { Helmet } from "react-helmet-async";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './../../hooks/useAxiosPublic';
import TestsCard from "../../components/TestsCard/TestsCard";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AllTests = () => {
    const [testDate, setTestDate] = useState(new Date());
    const addTestDate = testDate.getDate() + "/" + (testDate.getMonth() + 1) + "/" + testDate.getFullYear();

    const axiosPublic = useAxiosPublic();
    const [allTestsHome, setallTestsHome] = useState([]);

    const {  } = useQuery({
        queryKey: ["homeTest"],
        queryFn: async () => {
            const result = await axiosPublic.get("/allTests")
            setallTestsHome(result?.data);
        }
    })
    
    const searchHndler = () => {
        axiosPublic.get(`/allTests/tests?sort=${addTestDate}`)
            .then(res => setallTestsHome(res.data))
    }
    return (
        <div>
            <Helmet>
                <title>All Tests - Health Care Diagnostics</title>
            </Helmet>
            <div className="mt-10">
                <div className="flex items-center justify-center">
                    <h2 className="border-y-2 px-4 py-3 font-bold text-2xl">All Tests</h2>
                </div>
                <div className="w-full items-center justify-center flex">
                    <div className="input input-bordered flex items-center gap-2 justify-between">
                        <SlCalender className="font-semibold text-xl" /> <DatePicker selected={testDate} onChange={(date) => setTestDate(date)} /> 
                        <div onClick={searchHndler} className="border rounded-full px-4 py-2 cursor-pointer">Search</div>
                    </div>
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