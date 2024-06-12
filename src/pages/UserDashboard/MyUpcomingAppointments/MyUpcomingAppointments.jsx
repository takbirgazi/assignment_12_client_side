import { Helmet } from "react-helmet-async";
import AppointmentTable from "./AppointmentTable";

const MyUpcomingAppointments = () => {
    return (
         <div className="w-11/12 mx-auto">
            <Helmet>
                <title>My Appointment - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">My Appointment</h2>
            </div>
            <div>
               <AppointmentTable></AppointmentTable>
            </div>
        </div>
    );
};

export default MyUpcomingAppointments;