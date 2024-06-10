
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const TestsCard = ({ cardInfo }) => {
    const { _id, testName, testImage, testSlots, testDate } = cardInfo;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img src={testImage} /></figure>
            <div className="card-body">
                <h2 className="card-title">{testName}</h2>
                <p>Test Slots: {testSlots}</p>
                <p>Test Date: {testDate}</p>
                <div className="card-actions">
                    <NavLink to={`/user/bookingTest/${_id}`} className="btn btn-primary">Add Booking</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TestsCard;

TestsCard.propTypes = {
    cardInfo: PropTypes.object
}