import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "Bác sĩ đa khoa",
    image: General_physician,
  },
  {
    speciality: "Bác sĩ phụ khoa",
    image: Gynecologist,
  },
  {
    speciality: "Bác sĩ da liễu",
    image: Dermatologist,
  },
  {
    speciality: "Bác sĩ nhi khoa",
    image: Pediatricians,
  },
  {
    speciality: "Bác sĩ thần kinh",
    image: Neurologist,
  },
  {
    speciality: "Bác sĩ chuyên khoa tiêu hóa",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "GS.TS. Nguyễn Thế Dũng",
    image: doc1,
    speciality: "Bác sĩ đa khoa",
    degree: "MBBS",
    experience: "25 Năm",
    about:
      "GS.TS. Nguyễn Thế Dũng là bác sĩ đa khoa hàng đầu tại Việt Nam, chuyên về y học phòng ngừa và chăm sóc sức khỏe toàn diện. Ông nổi tiếng với những nghiên cứu và ứng dụng trong việc phòng ngừa bệnh tật và nâng cao sức khỏe cộng đồng.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "TS. Lê Thị Hạnh",
    image: doc2,
    speciality: "Bác sĩ phụ khoa",
    degree: "MBBS",
    experience: "15 Năm",
    about:
      "TS. Lê Thị Hạnh là chuyên gia hàng đầu trong lĩnh vực phụ khoa, nổi bật với những phương pháp điều trị tiên tiến và tư vấn chăm sóc sức khỏe cho phụ nữ. Bà luôn tận tâm với từng bệnh nhân và cam kết mang đến sự chăm sóc tốt nhất.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "TS. Trần Minh Tuấn",
    image: doc3,
    speciality: "Bác sĩ da liễu",
    degree: "MBBS",
    experience: "10 Năm",
    about:
      "TS. Trần Minh Tuấn là bác sĩ da liễu nổi tiếng tại Việt Nam, chuyên điều trị các vấn đề về da liễu và thẩm mỹ. Ông áp dụng các phương pháp hiện đại để mang lại hiệu quả tối ưu cho bệnh nhân.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "PGS.TS. Nguyễn Văn Hòa",
    image: doc4,
    speciality: "Bác sĩ nhi khoa",
    degree: "MBBS",
    experience: "20 Năm",
    about:
      "PGS.TS. Nguyễn Văn Hòa là bác sĩ nhi khoa hàng đầu, nổi bật trong việc chăm sóc sức khỏe trẻ em và các vấn đề dinh dưỡng. Ông luôn chú trọng đến sự phát triển toàn diện của trẻ em.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "TS. Phạm Văn Thắng",
    image: doc12,
    speciality: "Bác sĩ thần kinh",
    degree: "MBBS",
    experience: "12 Năm",
    about:
      "TS. Phạm Văn Thắng chuyên về các bệnh lý thần kinh và luôn cập nhật những kiến thức mới nhất trong ngành. Ông nổi tiếng với khả năng chẩn đoán chính xác và phương pháp điều trị hiệu quả.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "GS.TS. Trương Minh Chính",
    image: doc6,
    speciality: "Bác sĩ thần kinh",
    degree: "MBBS",
    experience: "15 Năm",
    about:
      "GS.TS. Trương Minh Chính là một trong những bác sĩ thần kinh hàng đầu tại Việt Nam, với nhiều công trình nghiên cứu và phát triển trong lĩnh vực bệnh lý thần kinh.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "PGS.TS. Đặng Thị Hương",
    image: doc7,
    speciality: "Bác sĩ đa khoa",
    degree: "MBBS",
    experience: "20 Năm",
    about:
      "PGS.TS. Đặng Thị Hương là bác sĩ đa khoa nổi tiếng, chuyên về khám và điều trị các bệnh lý thông thường cũng như các bệnh mãn tính.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "TS. Nguyễn Thị Thanh",
    image: doc8,
    speciality: "Bác sĩ phụ khoa",
    degree: "MBBS",
    experience: "10 Năm",
    about:
      "TS. Nguyễn Thị Thanh chuyên về phụ khoa, nổi bật với các phương pháp điều trị hiện đại và tư vấn sức khỏe sinh sản.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "TS. Trần Thị Kim",
    image: doc9,
    speciality: "Bác sĩ da liễu",
    degree: "MBBS",
    experience: "8 Năm",
    about:
      "TS. Trần Thị Kim là chuyên gia da liễu, nổi bật với các liệu trình điều trị mụn và các bệnh lý về da.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "PGS.TS. Nguyễn Văn An",
    image: doc10,
    speciality: "Bác sĩ nhi khoa",
    degree: "MBBS",
    experience: "18 Năm",
    about:
      "PGS.TS. Nguyễn Văn An là bác sĩ nhi khoa hàng đầu, chuyên về sức khỏe trẻ em và dinh dưỡng.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "TS. Lê Văn Hòa",
    image: doc12,
    speciality: "Bác sĩ thần kinh",
    degree: "MBBS",
    experience: "12 Năm",
    about:
      "TS. Lê Văn Hòa là bác sĩ thần kinh có nhiều kinh nghiệm trong điều trị các bệnh lý liên quan đến thần kinh.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "GS.TS. Nguyễn Thị Hằng",
    image: doc11,
    speciality: "Bác sĩ thần kinh",
    degree: "MBBS",
    experience: "20 Năm",
    about:
      "GS.TS. Nguyễn Thị Hằng là một trong những bác sĩ thần kinh hàng đầu với nhiều công trình nghiên cứu chuyên sâu.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "PGS.TS. Bùi Văn Lợi",
    image: doc13,
    speciality: "Bác sĩ đa khoa",
    degree: "MBBS",
    experience: "30 Năm",
    about:
      "PGS.TS. Bùi Văn Lợi là bác sĩ đa khoa, nổi tiếng trong việc khám và điều trị các bệnh lý đa dạng.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc14",
    name: "TS. Nguyễn Văn Khải",
    image: doc14,
    speciality: "Bác sĩ phụ khoa",
    degree: "MBBS",
    experience: "14 Năm",
    about:
      "TS. Nguyễn Văn Khải là chuyên gia phụ khoa với nhiều kinh nghiệm trong lĩnh vực chăm sóc sức khỏe sinh sản.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "TS. Trần Thị Hà",
    image: doc15,
    speciality: "Bác sĩ da liễu",
    degree: "MBBS",
    experience: "5 Năm",
    about:
      "TS. Trần Thị Hà chuyên điều trị các vấn đề về da và nổi tiếng với các liệu pháp làm đẹp.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc16",
    name: "ThS.BS. Nguyễn Hữu Thịnh",
    image: doc10,
    speciality: "Bác sĩ chuyên khoa tiêu hóa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "15 Năm",
    about:
      "ThS.BS. Nguyễn Hữu Thịnh là một chuyên gia trong lĩnh vực tiêu hóa, với nhiều năm kinh nghiệm trong việc chẩn đoán và điều trị các bệnh lý tiêu hóa như viêm loét dạ dày, hội chứng ruột kích thích và bệnh gan.",
    fees: 70,
    address: {
      line1: "123 Phố Lê Lợi",
      line2: "Quận 1, TP.HCM",
    },
  },
  {
    _id: "doc17",
    name: "ThS.BS. Trần Văn Khải",
    image: doc12,
    speciality: "Bác sĩ chuyên khoa tiêu hóa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "12 Năm",
    about:
      "ThS.BS. Trần Văn Khải chuyên điều trị các bệnh lý về tiêu hóa, đặc biệt là bệnh gan và các rối loạn tiêu hóa. Ông đã thực hiện nhiều nghiên cứu về dinh dưỡng và sức khỏe đường ruột.",
    fees: 75,
    address: {
      line1: "456 Đường Nguyễn Thái Học",
      line2: "Quận 3, TP.HCM",
    },
  },
  {
    _id: "doc18",
    name: "ThS.BS. Lê Thị Hồng",
    image: doc5,
    speciality: "Bác sĩ chuyên khoa tiêu hóa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "10 Năm",
    about:
      "ThS.BS. Lê Thị Hồng có nhiều kinh nghiệm trong việc điều trị các bệnh lý tiêu hóa, bao gồm viêm dạ dày và bệnh trào ngược thực quản. Cô đặc biệt quan tâm đến việc tư vấn dinh dưỡng cho bệnh nhân.",
    fees: 65,
    address: {
      line1: "789 Đường Nguyễn Huệ",
      line2: "Quận 1, TP.HCM",
    },
  },
  {
    _id: "doc19",
    name: "TS.BS. Phạm Quốc Thái",
    image: doc7,
    speciality: "Bác sĩ chuyên khoa tiêu hóa",
    degree: "Tiến sĩ, Bác sĩ chuyên khoa",
    experience: "20 Năm",
    about:
      "TS.BS. Phạm Quốc Thái là một chuyên gia hàng đầu trong lĩnh vực tiêu hóa tại Việt Nam, với nhiều nghiên cứu và bài báo quốc tế. Ông chuyên điều trị các bệnh lý phức tạp của đường tiêu hóa.",
    fees: 80,
    address: {
      line1: "321 Đường Lê Văn Sỹ",
      line2: "Quận Phú Nhuận, TP.HCM",
    },
  },
  {
    _id: "doc20",
    name: "BS. Nguyễn Thị Lan Hương",
    image: doc5,
    speciality: "Bác sĩ đa khoa",
    degree: "Bác sĩ chuyên khoa",
    experience: "10 Năm",
    about:
      "BS. Nguyễn Thị Lan Hương là một bác sĩ đa khoa giàu kinh nghiệm, chuyên chẩn đoán và điều trị các bệnh lý phổ biến.",
    fees: 50,
    address: {
      line1: "101 Đường Cách Mạng Tháng 8",
      line2: "Quận 3, TP.HCM",
    },
  },
  {
    _id: "doc21",
    name: "ThS.BS. Trần Thị Ngọc Bích",
    image: doc11,
    speciality: "Bác sĩ phụ khoa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "12 Năm",
    about:
      "ThS.BS. Trần Thị Ngọc Bích chuyên điều trị các vấn đề phụ khoa và tư vấn sức khỏe sinh sản cho phụ nữ.",
    fees: 65,
    address: {
      line1: "102 Đường Nguyễn Thị Minh Khai",
      line2: "Quận 1, TP.HCM",
    },
  },
  {
    _id: "doc22",
    name: "BS. Phạm Văn Khánh",
    image: doc6,
    speciality: "Bác sĩ da liễu",
    degree: "Bác sĩ chuyên khoa",
    experience: "15 Năm",
    about:
      "BS. Phạm Văn Khánh chuyên điều trị các bệnh da liễu như viêm da, dị ứng da và chăm sóc da chuyên sâu.",
    fees: 60,
    address: {
      line1: "103 Đường Nam Kỳ Khởi Nghĩa",
      line2: "Quận 1, TP.HCM",
    },
  },
  {
    _id: "doc23",
    name: "TS.BS. Lê Văn Tuấn",
    image: doc3,
    speciality: "Bác sĩ thần kinh",
    degree: "Tiến sĩ, Bác sĩ chuyên khoa",
    experience: "18 Năm",
    about:
      "TS.BS. Lê Văn Tuấn có kinh nghiệm trong điều trị các bệnh lý thần kinh phức tạp như bệnh Parkinson và đau đầu mạn tính.",
    fees: 80,
    address: {
      line1: "104 Đường Lê Quang Định",
      line2: "Quận Bình Thạnh, TP.HCM",
    },
  },
  {
    _id: "doc24",
    name: "ThS.BS. Nguyễn Thị Mai Hoa",
    image: doc13,
    speciality: "Bác sĩ nhi khoa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "11 Năm",
    about:
      "ThS.BS. Nguyễn Thị Mai Hoa chuyên chăm sóc và điều trị các bệnh lý cho trẻ em, đặc biệt là các bệnh hô hấp và sốt cao.",
    fees: 55,
    address: {
      line1: "105 Đường Phan Xích Long",
      line2: "Quận Phú Nhuận, TP.HCM",
    },
  },
  {
    _id: "doc25",
    name: "BS. Nguyễn Văn Thành",
    image: doc12,
    speciality: "Bác sĩ chuyên khoa tiêu hóa",
    degree: "Bác sĩ chuyên khoa",
    experience: "14 Năm",
    about:
      "BS. Nguyễn Văn Thành là chuyên gia điều trị các bệnh tiêu hóa như viêm loét dạ dày, hội chứng ruột kích thích.",
    fees: 75,
    address: {
      line1: "106 Đường Nguyễn Văn Trỗi",
      line2: "Quận 3, TP.HCM",
    },
  },
  {
    _id: "doc26",
    name: "BS. Nguyễn Hồng Đăng",
    image: doc14,
    speciality: "Bác sĩ phụ khoa",
    degree: "Bác sĩ chuyên khoa",
    experience: "8 Năm",
    about:
      "BS. Nguyễn Hồng Đăng chuyên điều trị các bệnh lý phụ khoa và tư vấn sức khỏe sinh sản cho phụ nữ.",
    fees: 60,
    address: {
      line1: "107 Đường Lê Hồng Phong",
      line2: "Quận 10, TP.HCM",
    },
  },
  {
    _id: "doc27",
    name: "BS. Hoàng Văn Phúc",
    image: doc10,
    speciality: "Bác sĩ da liễu",
    degree: "Bác sĩ chuyên khoa",
    experience: "13 Năm",
    about:
      "BS. Hoàng Văn Phúc có kinh nghiệm trong điều trị các bệnh về da và các liệu pháp chăm sóc da.",
    fees: 50,
    address: {
      line1: "108 Đường Trần Hưng Đạo",
      line2: "Quận 5, TP.HCM",
    },
  },
  {
    _id: "doc28",
    name: "ThS.BS. Lê Thị Minh Tâm",
    image: doc5,
    speciality: "Bác sĩ nhi khoa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "9 Năm",
    about:
      "ThS.BS. Lê Thị Minh Tâm chuyên điều trị các bệnh lý nhi khoa như sốt xuất huyết, viêm đường hô hấp ở trẻ em.",
    fees: 55,
    address: {
      line1: "109 Đường Võ Văn Kiệt",
      line2: "Quận Bình Thạnh, TP.HCM",
    },
  },
  {
    _id: "doc29",
    name: "TS.BS. Đặng Quốc Anh",
    image: doc4,
    speciality: "Bác sĩ thần kinh",
    degree: "Tiến sĩ, Bác sĩ chuyên khoa",
    experience: "20 Năm",
    about:
      "TS.BS. Đặng Quốc Anh là chuyên gia hàng đầu trong điều trị các bệnh thần kinh như tai biến mạch máu não và động kinh.",
    fees: 90,
    address: {
      line1: "110 Đường Hai Bà Trưng",
      line2: "Quận 1, TP.HCM",
    },
  },
  {
    _id: "doc30",
    name: "BS. Nguyễn Thị Thanh Hoa",
    image: doc11,
    speciality: "Bác sĩ đa khoa",
    degree: "Bác sĩ chuyên khoa",
    experience: "7 Năm",
    about:
      "BS. Nguyễn Thị Thanh Hoa chuyên tư vấn và điều trị các bệnh lý phổ biến, với sự tận tâm và chuyên nghiệp.",
    fees: 45,
    address: {
      line1: "111 Đường Nguyễn Huệ",
      line2: "Quận 1, TP.HCM",
    },
  },
  {
    _id: "doc31",
    name: "ThS.BS. Lê Văn Cường",
    image: doc12,
    speciality: "Bác sĩ chuyên khoa tiêu hóa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "15 Năm",
    about:
      "ThS.BS. Lê Văn Cường có kinh nghiệm trong điều trị các bệnh tiêu hóa như bệnh gan và hội chứng ruột kích thích.",
    fees: 70,
    address: {
      line1: "112 Đường Nguyễn Đình Chiểu",
      line2: "Quận 3, TP.HCM",
    },
  },
  {
    _id: "doc32",
    name: "BS. Trần Thị Kim Phượng",
    image: doc2,
    speciality: "Bác sĩ phụ khoa",
    degree: "Bác sĩ chuyên khoa",
    experience: "10 Năm",
    about:
      "BS. Trần Thị Kim Phượng chuyên điều trị các vấn đề phụ khoa và tư vấn sức khỏe sinh sản.",
    fees: 65,
    address: {
      line1: "113 Đường Lê Lợi",
      line2: "Quận 1, TP.HCM",
    },
  },
  {
    _id: "doc33",
    name: "BS. Lê Minh Phát",
    image: doc1,
    speciality: "Bác sĩ da liễu",
    degree: "Bác sĩ chuyên khoa",
    experience: "12 Năm",
    about:
      "BS. Lê Minh Phát là chuyên gia trong điều trị các bệnh da liễu và chăm sóc da chuyên sâu.",
    fees: 60,
    address: {
      line1: "114 Đường Nam Kỳ Khởi Nghĩa",
      line2: "Quận 3, TP.HCM",
    },
  },
  {
    _id: "doc34",
    name: "ThS.BS. Nguyễn Thị Bích Ngọc",
    image: doc2,
    speciality: "Bác sĩ nhi khoa",
    degree: "Thạc sĩ, Bác sĩ chuyên khoa",
    experience: "11 Năm",
    about:
      "ThS.BS. Nguyễn Thị Bích Ngọc chuyên điều trị các bệnh lý nhi khoa như viêm phổi và sốt ở trẻ em.",
    fees: 55,
    address: {
      line1: "115 Đường Nguyễn Văn Cừ",
      line2: "Quận 5, TP.HCM",
    },
  },
  {
    _id: "doc35",
    name: "TS.BS. Lê Quốc Vinh",
    image: doc4,
    speciality: "Bác sĩ thần kinh",
    degree: "Tiến sĩ, Bác sĩ chuyên khoa",
    experience: "19 Năm",
    about:
      "TS.BS. Lê Quốc Vinh chuyên điều trị các bệnh lý phức tạp của hệ thần kinh như động kinh và đa xơ cứng.",
    fees: 85,
    address: {
      line1: "116 Đường Điện Biên Phủ",
      line2: "Quận Bình Thạnh, TP.HCM",
    },
  },
];
