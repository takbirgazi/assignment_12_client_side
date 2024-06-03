import PropTypes from 'prop-types';
import AppointmentTableRow from './AppointmentTableRow';

const AppointmentTable = ({allAppointment}) => {
    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table">
           
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                allAppointment.map(appointment=> <AppointmentTableRow key={appointment._id} appointmentInfo={appointment} ></AppointmentTableRow>)
              }
            </tbody>
            
          </table> 
        </div>
       </div>
    );
};

export default AppointmentTable;

AppointmentTable.propTypes = {
  allAppointment: PropTypes.array,
}