

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p className="mb-4">
                        At Health Care Diagnostics, our mission is to provide high-quality, reliable diagnostic services to enhance the health and well-being of our community. We strive to deliver accurate and timely results to help healthcare professionals make informed decisions for their patients.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                    <p className="mb-4">
                        Our vision is to be the leading diagnostics center, recognized for our commitment to excellence, innovation, and compassionate care. We aim to continually advance our technology and expertise to meet the evolving needs of our patients and the healthcare industry.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                    <ul className="list-disc list-inside ml-4 mb-4">
                        <li className="mb-2">Integrity: We adhere to the highest standards of ethical practices and maintain transparency in our operations.</li>
                        <li className="mb-2">Excellence: We are dedicated to providing top-notch diagnostic services and continuously improving our processes.</li>
                        <li className="mb-2">Compassion: We care deeply about our patients and their families, treating them with respect and empathy.</li>
                        <li className="mb-2">Innovation: We embrace cutting-edge technology and innovative practices to enhance our diagnostic capabilities.</li>
                        <li className="mb-2">Collaboration: We work closely with healthcare providers to ensure the best outcomes for our patients.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                    <p className="mb-4">
                        Our team comprises highly skilled professionals, including pathologists, lab technicians, and support staff, all dedicated to delivering accurate and reliable diagnostic services. We are committed to ongoing education and training to stay at the forefront of diagnostic advancements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or would like to learn more about our services, please do not hesitate to contact us. We are here to help you with all your diagnostic needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div className="mb-4 sm:mb-0">
                            <h3 className="text-xl font-semibold">Address:</h3>
                            <p>Khulna, Bangladesh</p>
                        </div>
                        <div className="mb-4 sm:mb-0">
                            <h3 className="text-xl font-semibold">Phone:</h3>
                            <p>(+880) 1811947182</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Email:</h3>
                            <p>takbirgazibd@gmail.com</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;