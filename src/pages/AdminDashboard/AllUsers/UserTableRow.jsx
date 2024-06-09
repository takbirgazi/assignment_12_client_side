
import { PropTypes } from 'prop-types';
const UserTableRow = ({ usrInfo }) => {
    const { profile, name, email, district, status, blood } = usrInfo;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={profile} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{district}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{blood}</td>
            <td>{status}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Dactive</button>
            </th>
        </tr>
    );
};

export default UserTableRow;

UserTableRow.propTypes = {
    usrInfo: PropTypes.object
}