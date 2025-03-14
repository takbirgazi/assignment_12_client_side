import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";



const CardDetails = () => {
    const currentId = useParams();
    const testId = currentId.id;
    const axiosSecure = useAxiosSecure();
    const [testInfo, setTestInfo] = useState();
    const { user } = useAuth();

    axiosSecure.get(`/allTests/bookingTest/${testId}`)
        .then(res => setTestInfo(res?.data));

    const testCount = parseInt(testInfo?.testSlots);

    const bookHndler = (testInfo) => {
        const appointedData = {
            testName: testInfo?.testName,
            userDate: testInfo?.testDate,
            userPrice: testInfo?.testPrice,
            testImg: testInfo?.testImage,
            email: user.email,
            status:"Pending"
        }
        axiosSecure.post("/appointed", appointedData)
            .then(() => {
                toast.success("Add to Appointment");
            })
        axiosSecure.patch(`/allTests/update/${testInfo._id}`)
        .then(res=> console.log(res))
    }

    return (
        <div className="card card-compact shadow-xl my-5 border">
            <figure><img className="rounded" src={testInfo?.testImage} /></figure>
            <div className="card-body">
                <h2 className="card-title">{testInfo?.testName}</h2>
                <p>{testInfo?.testDetails}</p>
                <p>Test Slots: {testInfo?.testSlots}</p>
                <p>Test Date: {testInfo?.testDate}</p>
                <h2 className="font-bold text-xl">{testInfo?.testPrice} $</h2>
                <div className="card-actions">
                    {
                        testCount > 0 ? <div onClick={() => bookHndler(testInfo)} className="btn btn-primary">Book Now</div> : <div className="font-bold text-red-400">Stock Out</div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default CardDetails;