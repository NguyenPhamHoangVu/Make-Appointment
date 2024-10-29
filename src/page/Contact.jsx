import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-800 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-xl">
        <img
          className="w-full max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-xl font-semibold text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">116 Đường Điện Biên Phủ</p>
          <p className="text-gray-500">
            Tel: (84) 0987-542-123 <br />
            Email: hoangvucv1@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-700">
            Sự nghiệp tại PRRSCRIPTO
          </p>
          <p className="text-gray-500">
            Tìm hiểu thêm về các nhóm và việc làm của chúng tôi
          </p>
          <button className="border border-black px-10 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
