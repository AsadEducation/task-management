import '@fontsource/poppins/400-italic.css';
import Lottie from 'lottie-react';
import bannerLottie from '../../assets/Lottie/foodLottie.json'


const Banner = () => {
    return (
        <div className='text-center space-y-4  lg:space-y-8  lg:min-h-[70vh]' style={{ fontFamily: 'Poppins, sans-serif' }}>

            {/* text content  */}
            <div className='space-y-2 lg:space-y-4'>
                <h2 className=" text-3xl lg:text-5xl font-bold">Share More, Waste Less</h2>
                <p>"Join our community-driven platform to share surplus food, <br /> fight waste, and make a difference. Together, we feed those in need while reducing food waste—one meal at a time."</p>
            </div>

            <Lottie className='h-[50vh]' animationData={bannerLottie} />
        </div>
    );
};

export default Banner;