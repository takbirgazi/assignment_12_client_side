import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";

const imageBBAPIKey = "3926537cff4fb656214110e01e5b9d7b";
const imageBBAPI = `https://api.imgbb.com/1/upload?key=${imageBBAPIKey}`;

const AddTest = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [testDate, setTestDate] = useState(new Date());
    const addTestDate = testDate.getDate() + "/" + (testDate.getMonth() + 1) + "/" + testDate.getFullYear();
    
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(imageBBAPI, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const testInfo = { testName: data.testName, testDetails: data.testDetails, testPrice: data.testPrice, testSlots: data.testSlots, testDate: addTestDate, testImage: res.data.data.display_url }
        await axiosSecure.post('/allTests', testInfo)
            .then(() => {
                reset();
                toast.success("New Test Added Successful!");
            })
    }

    return (
        <div className={`bg-white min-h-screen flex items-center justify-center`}>
            <Helmet>
                <title>Add Test - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-full  shadow-2xl bg-white ">
                            <h2 className="font-bold text-xl text-center mt-10 ">Add New Test</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Test Name</span>
                                    </label>
                                    <input type="text" {...register("testName")} placeholder="Test Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Test Details</span>
                                    </label>
                                    <input type="text" {...register("testDetails")} placeholder="Test Details" className="input input-bordered" required />
                                </div>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Test Price</span>
                                        </label>
                                        <input type="number" {...register("testPrice")} placeholder="200" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Test Slots</span>
                                        </label>
                                        <input type="number" {...register("testSlots")} placeholder="10" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Test Image</span>
                                        </label>
                                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Test Date</span>
                                        </label>
                                        <div className="input input-bordered flex items-center gap-2">
                                            <SlCalender className="font-semibold text-xl" /> <DatePicker selected={testDate} onChange={(date) => setTestDate(date)} />
                                        </div>
                                    </div>
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

export default AddTest;