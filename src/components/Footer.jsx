import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:md-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---Left Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Đặt lịch hẹn với bác sĩ chưa bao giờ dễ dàng đến thế. Chỉ cần vài
            bước đơn giản, bạn có thể chọn chuyên khoa, thời gian phù hợp và bác
            sĩ mong muốn. Hệ thống giúp bạn tiết kiệm thời gian và đảm bảo sự
            thuận tiện, giúp bạn yên tâm chăm sóc sức khỏe của mình một cách
            hiệu quả và nhanh chóng.
          </p>
        </div>
        {/* ---Center Section */}
        <div>
          <p className="text-2xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        {/* ---Right Section */}
        <div>
          <p className="text-2xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-789</li>
            <li>hoangvucv1@gmail.com</li>
          </ul>
        </div>
        {/* ---Copyright--- */}
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright © 2024 - All Right</p>
      </div>
    </div>
  );
};

export default Footer;
