import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* --------left side---------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-tight lg:leading-tight">
          Đặt Lịch Hẹn <br /> Với Bác Sĩ
        </p>
        <div className="flex flex-col gap-3 md:flex-row items-center text-white text-sm font-light">
          <img className="w-30" src={assets.group_profiles} alt="" />
          <p>
            chỉ cần xem qua danh sách dài các bác sĩ đáng tin cậy của chúng tôi
            <br className="hidden sm:block" /> để lên lịch hẹn mà không gặp rắc
            rối
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 font-medium bg-white px-8 py-4 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Đặt Hẹn <img className="w-5" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* --------right side---------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
