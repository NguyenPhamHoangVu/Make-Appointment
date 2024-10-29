import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-600 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-xl text-gray-600">
          <p>
            chào mừng đến với prescripto, đối tác đáng tin cậy của bạn trong
            việc quản lý nhu cầu chăm sóc sức khỏe của bạn một cách thuận tiện
            và hiệu quả
          </p>
          <p>
            Prescripto luôn cố gắng hết mình để mang đến những công nghệ y tế
            tốt nhất. Chúng tôi không ngừng cập nhật và cải tiến để bạn có trải
            nghiệm sử dụng thật dễ dàng và hài lòng. Từ việc đặt lịch khám bệnh
            đầu tiên cho đến việc theo dõi sức khỏe hàng ngày, Prescripto luôn
            đồng hành cùng bạn.
          </p>
          <b className="text-gray-900">tầm nhìn của chúng tôi</b>
          <p>
            Prescripto muốn mang đến cho bạn một trải nghiệm chăm sóc sức khỏe
            thật dễ dàng và thuận tiện. Chúng tôi sẽ giúp bạn kết nối với các
            bác sĩ một cách nhanh chóng, để bạn luôn được chăm sóc tốt nhất.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          Tại sao chọn{" "}
          <span className="text-gray-900 font-semibold">chúng tôi</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Hiệu quả: </b>
          <p>Lên lịch hẹn trước thuận tiện, phù hợp với lối sống của bạn.</p>
          <p>Lên lịch khám chữa bệnh một cách nhanh chóng, linh hoạt.</p>
          <p>Đặt lịch khám bệnh dễ dàng, tiết kiệm thời gian.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Tiện lợi:</b>
          <p>
            Dễ dàng tiếp cận mạng lưới các chuyên gia y tế uy tín trong khu vực.
          </p>
          <p>Kết nối với các bác sĩ, chuyên gia y tế đáng tin cậy gần bạn.</p>
          <p>Tìm kiếm và liên hệ với các cơ sở y tế một cách thuận tiện.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Cá nhân hóa:</b>
          <p>
            Nhận được những gợi ý và nhắc nhở phù hợp để chăm sóc sức khỏe tốt
            hơn.
          </p>
          <p>
            Các khuyến nghị và thông báo được cá nhân hóa để bạn luôn khỏe mạnh.
          </p>
          <p>Lập kế hoạch chăm sóc sức khỏe cá nhân một cách hiệu quả.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
