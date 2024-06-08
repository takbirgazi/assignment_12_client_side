import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from '../../../hooks/useAuth';

const imageBBAPIKey = "3926537cff4fb656214110e01e5b9d7b";
const imageBBAPI = `https://api.imgbb.com/1/upload?key=${imageBBAPIKey}`;

const AddBanner = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const onSubmit = async (data) => { 
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(imageBBAPI, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const bannerInfo = { tittle: data.tittle, description: data.description, percentage: data.percentage, coupon: data.coupon, bannerImage: res.data.data.display_url, isActive:false, adminEmail:user?.email}
        await axiosSecure.post('/addBanner', bannerInfo)
            .then(() => {
                reset();
                toast.success("Banner Added Successful!");
        })
    }
    return (
        <div className={`bg-white min-h-screen flex items-center justify-center`}>
            <Helmet>
                <title>Add Banner - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-full  shadow-2xl bg-white ">
                            <h2 className="font-bold text-xl text-center mt-10 ">Add New Banner</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Banner Tittle</span>
                                        </label>
                                        <input type="text" {...register("tittle")} placeholder="Banner Tittle" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Banner Description</span>
                                        </label>
                                        <input type="text" {...register("description")} placeholder="Banner Description" className="input input-bordered" required />
                                    </div>
                                <div className="flex flex-col md:flex-row gap-2">                              
                                    <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Discount Percentage</span>
                                            </label>
                                            <input type="number" {...register("percentage")} placeholder="20" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Discount Coupon</span>
                                            </label>
                                            <input type="text" {...register("coupon")} placeholder="Coupon2024" className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Banner Image</span>
                                        </label>
                                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full" />
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

export default AddBanner;