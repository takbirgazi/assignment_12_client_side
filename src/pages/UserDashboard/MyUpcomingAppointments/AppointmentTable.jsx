import PropTypes from 'prop-types';
import AppointmentTableRow from './AppointmentTableRow';

const AppointmentTable = () => {
  return (
    <div>
      <div className="overflow-x-auto my-5">
        <table className="table">

          <thead>
            <tr>
              <th>Test Image</th>
              <th>Test Name</th>
              <th>Appointment Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <AppointmentTableRow></AppointmentTableRow>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;

AppointmentTable.propTypes = {
  allAppointment: PropTypes.array,
}