import PropTypes from 'prop-types';
const AppointmentTableRow = ({ appointmentInfo }) => {
    const {image, name, desc} = appointmentInfo;
    return (
        <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" className="border border-yellow-500" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                    </div>
                  </div>
                </td>
                <td>{desc}</td>
                <th>
                  <div className="flex flex-col md:flex-row gap-2 items-center">
                    <button className="btn btn-ghost btn-xs bg-red-500 text-white">Cancel</button>
                  </div>
                </th>
            </tr>
    );
};

export default AppointmentTableRow;

AppointmentTableRow.propTypes = {
  appointmentInfo: PropTypes.object,
}