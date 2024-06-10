import { Helmet } from "react-helmet-async";
import { FaGoogle, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import sidebar from "../../assets/images/signupImage.png"
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form"

const imageBBAPIKey = import.meta.env.VITE_IMAGEBBAPI;
const imageBBAPI = `https://api.imgbb.com/1/upload?key=${imageBBAPIKey}`;

const SignUp = () => {
    const { register, handleSubmit } = useForm()

    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [allDistric, setAllDistric] = useState([]);
    const [allUpazilas, setAllUpazilas] = useState([]);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { createUser, upadteUser } = useAuth();
    const from = location.state?.from.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    useEffect(() => {
        fetch('districts.json')
            .then(res => res.json())
            .then(data => setAllDistric(data[2].data))
    }, []);
    useEffect(() => {
        fetch('upazilas.json')
            .then(res => res.json())
            .then(data => setAllUpazilas(data[2].data))
    }, []);

    const checkCaptcha = (eventCaptcha) => {
        eventCaptcha.preventDefault();
        const refValue = captchaRef.current.value;
        if (validateCaptcha(refValue)) {
            setDisable(false)
        } else {
            setDisable(true);
        }
    }
    const onSubmit = async (data) => {
        setDisable(true)
        setErrorText('');
        console.log(data);
        if (data.password.length > 5 && data.password.length < 13) {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(data.password)) {
                if (data.password === data.confirmPassword) {
                    const imageFile = { image: data.image[0] };
                    const res = await axiosPublic.post(imageBBAPI, imageFile, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    createUser(data.email, data.password)
                        .then(() => {
                            upadteUser(data.name);
                            const addUser = { name: data.name, email: data.email, password: data.password, upazila: data.upazila, profile: res.data.data.display_url, district: data.district, blood: data.blood, status: "Active", isAdmin: false }
                            axiosPublic.post("/users", addUser)
                                .then(res => {
                                    console.log(res);
                                });
                            toast.success("Sign Up Successful!");
                            navigate(from, { replace: true });
                            setDisable(false)
                        })
                        .catch(err => {
                            const msg = err?.code.split('/')[1] || "Sign Up Failed";
                            toast.error(msg);
                            setErrorText(msg);
                        })
                } else {
                    setErrorText("Password And Confirm Password Not Match!")
                }
            } else {
                setErrorText("Password must have Uppercase Lowercase and Number")
            }
        } else {
            setErrorText("Password should be 6 to 12 character");
        }
    }
    return (
        <div className={`bg-white min-h-screen flex items-center justify-center`}>
            <Helmet>
                <title>Sign Up - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left lg:w-1/2 w-full">
                            <img src={sidebar} alt="" />
                        </div>
                        <div className="card lg:w-1/2 w-full  shadow-2xl bg-white ">
                            <h2 className="font-bold text-xl text-center mt-10 ">Sign Up Now</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <span className="text-red-500">{errorText}</span>
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
                                            <span className="label-text">Password</span>
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
                                            <span className="label-text">Confirm Password</span>
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
                                <div className="form-control">
                                    <div className="border rounded-lg mb-2 px-4 py-2 bg-white">
                                        <LoadCanvasTemplate />
                                    </div>
                                    <div className="flex gap-1">
                                        <input ref={captchaRef} name="captcha" type="text" placeholder="Type here" className="input input-bordered w-5/6" required />
                                        <button onClick={checkCaptcha} className="input input-bordered w-1/6 flex items-center justify-center"><FaCheck /></button>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" name="submit" disabled={disable} className="btn btn-primary" value="Register" />
                                </div>
                            </form>
                            <div>
                                <div className="text-center text-yellow-600">Already registered? <NavLink to="/login" className="cursor-pointer font-bold underline">Go to log in</NavLink></div>
                                <div className="text-center my-4">Or sign up with</div>
                                <div className="flex gap-5 justify-center items-center mb-10">
                                    <div className="border flex items-center rounded-full bg-blue-500 cursor-pointer">
                                        <div className="border rounded-full p-3 cursor-pointer flex gap-3 items-center bg-gray-50">
                                            <FaGoogle className="text-xl text-blue-500" />
                                        </div>
                                        <p className="text-white px-4">Log In With Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;