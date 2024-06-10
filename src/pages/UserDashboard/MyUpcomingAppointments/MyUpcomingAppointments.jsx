import { Helmet } from "react-helmet-async";
import AppointmentTable from "./AppointmentTable";

const MyUpcomingAppointments = () => {
    return (
         <div className="w-11/12 mx-auto">
            <Helmet>
                <title>My Booking - Seven Star</title>
            </Helmet>
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">My Bookings</h2>
            </div>
            <div>
               <AppointmentTable></AppointmentTable>
            </div>
        </div>
    );
};

export default MyUpcomingAppointments;