import { Helmet } from "react-helmet-async";
import ReservationTableRow from "./ReservationTableRow";
import { useState } from "react";

const Reservation = () => {
    const [search, setSearch] = useState("")
    return (
        <div className={`bg-white min-h-screen flex justify-center`}>
            <Helmet>
                <title>Reservation - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-center">Reservation</h2>
                </div>
                    <div className="input input-bordered flex items-center gap-2 justify-between lg:w-1/2 md:w-3/4 w-11/12 mx-auto my-5">
                        <input className="w-full" onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="name@name.com" />
                    </div>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table w-11/12 mx-auto border my-5">
                            <thead>
                                <tr>
                                    <th>Test</th>
                                    <th>User Email</th>
                                    <th>Test Name</th>
                                    <th>Test Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <ReservationTableRow searchData={search}></ReservationTableRow>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reservation;