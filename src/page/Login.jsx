import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Vui lòng {state === "sign Up" ? "đăng kí" : "log in"} để đặt lịch hẹn
        </p>
        {state === "sign Up" && (
          <div className="w-full ">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full pt-2  my-1"
              type="text"
              onChange={() => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full ">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full pt-2  my-1"
            type="email"
            onChange={() => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full pt-2  my-1"
            type="password"
            onChange={() => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-md text-base">
          {state === "sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "sign Up" ? (
          <p>
            Đã có tài khoản?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Đăng nhập tại đây
            </span>
          </p>
        ) : (
          <p>
            Tạo tài khoản mới,
            <span
              onClick={() => setState("sign Up")}
              className="text-primary underline cursor-pointer"
            >
              nhấn vào đây
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
