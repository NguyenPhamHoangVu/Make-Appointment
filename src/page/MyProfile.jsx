import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [useData, setUserData] = useState({
    name: "Nguyễn Phạm Hoàng Vũ",
    image: assets.profile_pic,
    email: "hoangvucv1@gmail.com",
    phone: "0987654321",
    address: {
      line1: "116 Đường Điện Biên Phủ",
      line2: "Quận Bình Thạnh, TP.HCM",
    },
    gender: "Nam",
    dob: "01/01/2000",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={useData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={useData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-3xl font-medium text-neutral-800 mt-4">
          {useData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">THÔNG TIN LIÊN HỆ</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email: </p>
          <p className="text-blue-500">{useData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={useData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{useData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={useData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-100"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={useData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-700">
              {" "}
              {/* Đổi từ gray-50 thành gray-700 để dễ nhìn hơn */}
              {useData.address.line1}
              <br />
              {useData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">THÔNG TIN CƠ BẢN</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gioi tinh:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={useData.gender}
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          ) : (
            <p className="text-gray-400">{useData.gender}</p>
          )}
          <p className="font-medium">Ngày sinh:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={useData.dob}
            />
          ) : (
            <p className="text-gray-400">{useData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10 ">
        {isEdit ? (
          <button
            className="border border-gray-400 px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setIsEdit(false)}
          >
            Lưu Thông Tin{" "}
          </button>
        ) : (
          <button
            className="border border-gray-400 px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setIsEdit(true)}
          >
            Chỉnh Sửa
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
