
import { PropTypes } from 'prop-types';

const BannerTableRow = ({ bannerInfo }) => {
    const { bannerImage, tittle, isActive } = bannerInfo;
    return (
        <tr>
            <td>
                <img className="h-20 border" src={bannerImage} />
            </td>
            <td>
                <h2 className='font-bold'>{tittle}</h2>
            </td>
            <td>
                {isActive ? "Active" : "In Active"}
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
                <button className="btn btn-ghost btn-xs">Dactive</button>
            </th>
        </tr>
    );
};

export default BannerTableRow;

BannerTableRow.propTypes = {
    bannerInfo: PropTypes.object
}