import { Helmet } from "react-helmet-async";
import TestTableRow from "./TestTableRow";


const AllTestsAdmin = () => {
    return (
        <div className={`bg-white min-h-screen flex justify-center`}>
            <Helmet>
                <title>All Tests - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-center">All Tests</h2>
                </div>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table w-11/12 mx-auto border my-5">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Test Name</th>
                                    <th>Test Slots</th>
                                    <th>Test Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <TestTableRow></TestTableRow>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllTestsAdmin;