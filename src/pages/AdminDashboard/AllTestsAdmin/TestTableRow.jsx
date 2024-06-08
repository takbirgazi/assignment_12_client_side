
import { PropTypes } from 'prop-types';

const TestTableRow = ({ testInfo }) => {
    const {testName, testImage, testSlots, testDate } = testInfo;
    return (
        <tr>
            <td>
                <img className="h-20 border" src={ testImage} />  
            </td>
            <td>
                <h2 className='font-bold'>{ testName}</h2>
            </td>
            <td>
                {testSlots}        
            </td>
            <td>
                {testDate}        
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
                <button className="btn btn-ghost btn-xs">Delete</button>
                <button className="btn btn-ghost btn-xs">Reservations</button>
            </th>
        </tr>
    );
};

export default TestTableRow;

TestTableRow.propTypes = {
    testInfo: PropTypes.object
}