import React from "react";
import flaidexLogo from '../temp-page/Frame 8.png'
import callLogo from '../temp-page/iconCall.svg'

const Temp = () => {
    return (
        <section className="bg-[#F6EFFF] rounded-[64px] w-[1600px] h-[1530px] mx-auto  pt-12 space-y-20">
            {/* first div  */}
            <div className="space-y-20 px-20">
                {/* first container */}
                <div className="flex justify-between items-center">
                    <p className="text-[18px] font-normal tracking-[0.36px] text-[#777991] font-[Nexa]">Get in touch</p>
                    <div>
                        <img className="w-[162.983px] h-[52.702px]" src={flaidexLogo} alt="" />
                    </div>
                    <p className="text-[18px] font-normal tracking-[0.36px] text-[#777991] font-[Nexa]" >Available For <br />New Project</p>

                </div>
                {/* second container  */}
                <div className="space-y-8">

                    <h2 className="text-[var(--Text,#040633)] font-[Mona-Sans] text-center text-[64px] font-medium mt-[80px]">LET’S BUILD THE FUTURE TOGETHER</h2>

                    <button
                        className="flex mx-auto h-[66px] px-[35.538px] pl-[30.462px] pr-[35.538px] justify-center items-center gap-[10.154px] rounded-[126.923px] bg-[var(--Primary-1,#852EFF)] text-white font-medium"
                    >
                        <span className="text-xl">+</span>
                        <span>Become a Client</span>
                    </button>

                </div>
                {/* third container  */}
                <div className="space-y-8">

                    <p className="text-[var(--Text-gray-2,#777991)] text-center font-[Nexa] text-[42px] font-light leading-[37.4px]">
                        Hate forms? Drop us a line at
                    </p>

                    <p className="text-[var(--Text,#040633)] text-center font-[Nexa] text-[42px] font-light leading-[37.4px]">
                        hello@flaidex.com
                    </p>

                </div>
            </div>
            {/* second div that relative */}
            <div className="h-[846px] rounded-[64px] bg-[var(--Text,#040633)] px-20 py-32 ">

                {/* top section  */}
                <div className="flex gap-36 text-white">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-4 ">
                        <h2 className="text-[24px] font-[Nexa] font-normal leading-[47px] tracking-[0.48px]">
                            Call
                        </h2>
                        <div className="flex gap-3 text-[20px] font-[Nexa] font-normal leading-[32.4px] tracking-[0.4px]">
                            <img src={callLogo} alt="" />
                            <p>+1 (859) 308-3098</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className=" space-y-4">
                        <h2 className="text-[24px] font-[Nexa] font-normal leading-[47px] tracking-[0.48px]">
                            Legal Address
                        </h2>
                        <p className="text-[20px] font-[Nexa] font-normal leading-[32.4px] tracking-[0.4px]">
                            Torrance, CA
                        </p>
                    </div>

                </div>

                {/* divider  */}

                <div className="relative flex items-center justify-center mt-32">
                    <div className="w-[60%]  border-t border-dashed border-blue-500"></div>
                    <div className="absolute px-2">
                        <span className="text-blue-500 text-xl">✕</span>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Temp;