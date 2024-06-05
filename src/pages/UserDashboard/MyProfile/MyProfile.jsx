import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [allDistric, setAllDistric] = useState([]);
    const [allUpazilas, setAllUpazilas] = useState([]);
    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
        fetch('../districts.json')
            .then(res => res.json())
            .then(data => setAllDistric(data[2].data))
    }, []);

    useEffect(() => {
        fetch('../upazilas.json')
            .then(res => res.json())
            .then(data => setAllUpazilas(data[2].data))
    }, []);

    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className={`bg-white min-h-screen flex items-center justify-center my-10 w-11/12 mx-auto`}>
            <Helmet>
                <title>My Profile - Health Care Diagnostics</title>
            </Helmet>
            <div className="card lg:w-1/2 w-full  shadow-2xl bg-white ">
                <h2 className="font-bold text-xl text-center mt-10 ">Edit Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="flex items-center justify-center p-1">
                        <img className="border rounded-full h-40 w-40" src={`https://i.ibb.co/gVnzc7g/takbirgazi.jpg`} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-2 md:flex-row flex-col">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Old Password</span>
                            </label>
                            <div className="input input-bordered flex items-center relative">
                                <input type={
                                    showPass ? "text" : "password"
                                }
                                    {...register("password")} placeholder="password" className="w-full" required />
                                <div onClick={() => setShowPass(!showPass)} name="showHidden" className="absolute right-3 cursor-pointer">
                                    {
                                        showPass ? <FaEyeSlash /> : <FaEye />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">New Password</span>
                            </label>
                            <div className="input input-bordered flex items-center relative">
                                <input type={
                                    showPass ? "text" : "password"
                                }
                                    {...register("confirmPassword")} placeholder="Confirm Password" className="w-full" required />
                                <div onClick={() => setShowPass(!showPass)} name="showHidden" className="absolute right-3 cursor-pointer">
                                    {
                                        showPass ? <FaEyeSlash /> : <FaEye />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 md:flex-row flex-col">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">District</span>
                            </label>
                            <select {...register("district", { required: true })} className="select select-bordered">
                                <option value="Select District" disabled>Select District</option>
                                {
                                    allDistric.map(distic => <option key={distic.id} value={distic.name}>{distic.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Upazila</span>
                            </label>
                            <select {...register("upazila", { required: true })} className="select select-bordered">
                                <option value="Select Upazila" disabled>Select Upazila</option>
                                {
                                    allUpazilas.map(upazila => <option key={upazila.id} value={upazila.name}>{upazila.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 md:flex-row flex-col">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Blood Group</span>
                            </label>
                            <select {...register("blood", { required: true })} className="select select-bordered">
                                <option required value="Select Blood Group" disabled>Select Blood Group</option>
                                <option value="O+">O +</option>
                                <option value="O-">O -</option>
                                <option value="A+">A +</option>
                                <option value="A-">A -</option>
                                <option value="B+">B +</option>
                                <option value="B-">B -</option>
                                <option value="AB+">AB +</option>
                                <option value="AB-">AB -</option>
                            </select>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" name="submit" className="btn btn-primary" value="Edit Profile" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;