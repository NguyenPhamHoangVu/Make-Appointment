import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { doctors } from "../assets/assets_frontend/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const [fillterDoctors, setFillterDoctors] = useState([]);
  const [showFillter, setShowFillter] = useState(false);
  const { assets } = useContext(AppContext);

  const navigate = useNavigate();

  const applyFiller = () => {
    if (speciality) {
      setFillterDoctors(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFillterDoctors(doctors);
    }
  };

  useEffect(() => {
    applyFiller();
  }, [doctors, speciality]);

  return (
    <div>
      <p className=" text-gray-600">duyệt qua các bác sĩ chuyên khoa</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 text-gray-900 ">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFillter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFillter((prev) => !prev)}
        >
          Fillter
        </button>
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${
            showFillter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() => navigate("/doctors/Bác sĩ đa khoa")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === " Bác sĩ đa khoa" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Bác sĩ đa khoa
          </p>
          <p
            onClick={() => navigate("/doctors/Bác sĩ phụ khoa")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Bác sĩ phụ khoa" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Bác sĩ phụ khoa
          </p>
          <p
            onClick={() => navigate("/doctors/Bác sĩ da liễu")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Bác sĩ da liễu" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Bác sĩ da liễu
          </p>
          <p
            onClick={() => navigate("/doctors/Bác sĩ nhi khoa")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Bác sĩ nhi khoa" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Bác sĩ nhi khoa
          </p>
          <p
            onClick={() => navigate("/doctors/Bác sĩ thần kinh")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Bác sĩ thần kinh"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Bác sĩ thần kinh
          </p>
          <p
            onClick={() => navigate("/doctors/Bác sĩ chuyên khoa tiêu hóa")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Bác sĩ chuyên khoa tiêu hóa"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Bác sĩ chuyên khoa tiêu hóa
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {fillterDoctors.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-gray-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Có sẵn</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
