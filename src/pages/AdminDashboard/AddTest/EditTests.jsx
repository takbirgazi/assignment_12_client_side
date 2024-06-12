
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { SlCalender } from 'react-icons/sl';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from '@tanstack/react-query';

const EditTests = () => {
    const currentId = useParams();
    const testId = currentId.id;
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const [testDate, setTestDate] = useState(new Date());
    const addTestDate = testDate.getDate() + "/" + (testDate.getMonth() + 1) + "/" + testDate.getFullYear();

    const { data:allTestInfo=[], refetch} = useQuery({
        queryKey: ['testData'],
        queryFn: async () => {
        const result = await axiosSecure.get(`/allTests/bookingTest/${testId}`)
        return result?.data;            
        }
    })


    const onSubmit = async (data) => {

        const testInfo = { testName: data.testName, testDetails: data.testDetails, testPrice: data.testPrice, testSlots: parseInt(data.testSlots), testDate: addTestDate }

        await axiosSecure.patch(`/allTests/updatemany/${testId}`, testInfo)
            .then(() => {
                toast.success("Test UpdateSuccessful!");
                refetch();
            })
    }
    
    return (
        <div className={`bg-white min-h-screen flex items-center justify-center`}>
            <Helmet>
                <title>Edit Test - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-full  shadow-2xl bg-white ">
                            <h2 className="font-bold text-xl text-center mt-10 ">Edit Test</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Test Name</span>
                                    </label>
                                    <input type="text" {...register("testName")} defaultValue={allTestInfo?.testName} className="input input-bordered"  />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Test Details</span>
                                    </label>
                                    <input type="text" {...register("testDetails")} defaultValue={allTestInfo?.testDetails} className="input input-bordered" />
                                </div>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Test Price</span>
                                        </label>
                                        <input type="number" {...register("testPrice")} defaultValue={allTestInfo?.testPrice}  className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Test Slots</span>
                                        </label>
                                        <input type="number" {...register("testSlots")} defaultValue={allTestInfo?.testSlots}  className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2">
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
                                    <input type="submit" name="submit" className="btn btn-primary" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTests;