import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
const imageBBAPIKey = import.meta.env.VITE_IMAGEBBAPI;
const imageBBAPI = `https://api.imgbb.com/1/upload?key=${imageBBAPIKey}`;

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [allDistric, setAllDistric] = useState([]);
    const [allUpazilas, setAllUpazilas] = useState([]);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiossecure = useAxiosSecure();
    // const [showPass, setShowPass] = useState(false);

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
  

        const { data: myprofile = [], refetch } = useQuery({
            queryKey: ['myprofile'],
            queryFn: async () => {
                const result = await axiossecure.get(`/users/${user.email}`);
                return result.data
            }
        })

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(imageBBAPI, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const addUser = { name: data.name, email: user.email, upazila: data.upazila, profile: res.data.data.display_url, district: data.district, blood: data.blood }
        

        axiossecure.patch(`/users/usrUpdate/${user.email}`,addUser)
            .then(() => {
                refetch();
                toast.success("Profile Update Successfully")
            })


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
                        <img className="border rounded-full h-40 w-40" src={myprofile.profile} alt={myprofile.name} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} defaultValue={myprofile.name} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input readOnly type="email" defaultValue={myprofile?.email} placeholder={myprofile?.email} className="input input-bordered" />
                        </div> 
                    </div>
                    <div className="flex gap-2 md:flex-row flex-col">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">District</span>
                            </label>
                            <select {...register("district", { required: true })} className="select select-bordered">
                                <option defaultValue={myprofile.district}>{myprofile.district}</option>
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
                                <option defaultValue={myprofile.upazila}>{myprofile.upazila}</option>
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
                                <option required defaultValue={myprofile.blood}>{myprofile.blood}</option>
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