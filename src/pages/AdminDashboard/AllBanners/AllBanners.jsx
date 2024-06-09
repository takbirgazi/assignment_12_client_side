import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BannerTableRow from "./BannerTableRow";

const AllBanners = () => {
    const axiosSecure = useAxiosSecure();
    const { data: banner = [] } = useQuery({
        queryKey: ["banner"],
        queryFn: async () => {
            const result = await axiosSecure.get("/addBanner")
            return result?.data;
        }
    })

    return (
        <div className={`bg-white min-h-screen flex justify-center`}>
            <Helmet>
                <title>All Banners - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-center">All Banners</h2>
                </div>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table w-11/12 mx-auto border my-5">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Tittle</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    banner.map(bnr => <BannerTableRow key={bnr._id} bannerInfo={bnr}></BannerTableRow>)
                                }
                            </tbody>


                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllBanners;