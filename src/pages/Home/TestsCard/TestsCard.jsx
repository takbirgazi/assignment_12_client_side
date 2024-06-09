
import { PropTypes } from 'prop-types';

const TestsCard = ({ cardInfo }) => {
    const { testName, testImage, testSlots, testDate } = cardInfo;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img src={testImage} /></figure>
            <div className="card-body">
                <h2 className="card-title">{testName}!</h2>
                <p>Test Slots: {testSlots}</p>
                <p>Test Date: {testDate}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default TestsCard;

TestsCard.propTypes = {
    cardInfo: PropTypes.object
}