import { Helmet } from "react-helmet-async";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const StatisticsPage = () => {
    const axiosPublic = useAxiosPublic();
    const { data:allTests=[] } = useQuery({
        queryKey: ["allTests"],
        queryFn: async () => {
            const result = await axiosPublic.get("/allTests")
            return result?.data;
        }
    })
    
    return (
        <div>
            <Helmet>
                <title>Statistics - Health Care Diagnostics</title>
            </Helmet>
            <div className="mt-10">
                <div className="flex items-center justify-center">
                    <h2 className="border-y-2 px-4 py-3 font-bold text-2xl">Statistics</h2>
                </div>
                <div className="flex items-center justify-center my-10">
                    <LineChart width={600} height={300} data={allTests}>
                        <Line type="monotone" dataKey="testSlots" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="testName" />
                        <YAxis />
                    </LineChart>
                </div>
            </div>
            
        </div>
    );
};

export default StatisticsPage;