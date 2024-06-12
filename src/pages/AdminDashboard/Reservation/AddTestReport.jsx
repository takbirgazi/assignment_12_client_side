import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const AddTestReport = () => {
    const testId = useParams();
    const id = testId.id;
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    


    const onSubmit = async (data) => {

        const reportData = { testReport: data.testReport, status: "Delivered" }

        await axiosSecure.patch(`/appointed/updateReport/${id}`, reportData)
            .then(() => {
                toast.success("Test UpdateSuccessful!");
            })
    }

    return (
        <div className={`bg-white min-h-screen flex items-center justify-center`}>
            <Helmet>
                <title>Add Test Report - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-full  shadow-2xl bg-white ">
                            <h2 className="font-bold text-xl text-center mt-10 ">Add Test Report</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Test Report</span>
                                    </label>
                                    <input type="text" {...register("testReport")} className="input input-bordered" placeholder="Write test report" />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" name="submit" className="btn btn-primary" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTestReport;