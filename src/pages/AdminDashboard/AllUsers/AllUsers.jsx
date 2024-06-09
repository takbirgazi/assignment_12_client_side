import { Helmet } from "react-helmet-async";
import UserTableRow from "./UserTableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allUser = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const result = await axiosSecure.get("/users")
            return result?.data;
        }
    })

    return (
        <div className={`bg-white min-h-screen flex justify-center`}>
            <Helmet>
                <title>All Users - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-center">All Users</h2>
                </div>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table w-11/12 mx-auto border my-5">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Blood Group</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser.map(usr => <UserTableRow key={usr._id} usrInfo={usr}></UserTableRow>)
                                }
                            </tbody>


                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllUsers;