import PropTypes from 'prop-types';

const BannerSlide = ({ bannerInfo }) => { 
    const {tittle, bannerImage, coupon, description, percentage} = bannerInfo;
    return (
        <div className="relative">
            <img src={bannerImage} />
            <div className="w-full h-full bg-black bg-opacity-20 absolute top-0 left-0">
                <div className="flex flex-col justify-evenly h-full">
                    <div className="flex justify-evenly">
                        <div className="text-white flex items-end justify-center">
                            <h2 className="text-9xl">{percentage}%</h2>
                            <p>Discount</p>
                        </div>
                        <div className="text-red-500 flex items-end justify-center">
                            <p className="border rounded-md font-bold px-4 py-2 bg-white bg-opacity-40">Apply Coupon: {coupon}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-11/12 mx-auto text-white">
                        <h3 className="text-left font-bold text-xl">{tittle}</h3>
                        <p className="text-left">{description}</p>
                        <div className="flex items-center justify-center">
                            <button className="btn btn-outline text-white my-10">All Test</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlide;

BannerSlide.propTypes = {
    bannerInfo:PropTypes.object
}