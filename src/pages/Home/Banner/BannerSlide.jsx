import banner from "../../../assets/banner.jpg";
const BannerSlide = () => {
    return (
        <div className="relative">
                    <img src={banner} />
                    <div className="w-full h-full bg-black bg-opacity-20 absolute top-0 left-0">
                        <div className="flex flex-col justify-evenly h-full">
                            <div className="flex justify-evenly">
                            <div className="text-white flex items-end justify-center">
                                <h2 className="text-9xl">20%</h2>
                                 <p>Discount</p>
                            </div>
                            <div className="text-red-500 flex items-end justify-center">
                                <p className="border rounded-md font-bold px-4 py-2 bg-white bg-opacity-40">Apply Coupon: coupon24</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-11/12 mx-auto text-white">
                            <h3 className="text-left font-bold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, numquam.</h3>
                            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minima eos beatae totam possimus iste eum at dolorem accusamus! Recusandae nam, harum qui repellat ullam obcaecati doloribus laborum ea voluptatum.</p>
                            <div className="flex items-center justify-center">
                                <button className="font-bold border rounded-md px-4 py-2 my-10 cursor-pointer">All Test</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    );
};

export default BannerSlide;