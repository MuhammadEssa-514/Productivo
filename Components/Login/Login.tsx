import React from "react";
import Image from "next/image";
import logo from "@/public/picture/logo.png";
import "../../app/globals.css";

 

const loginInputs = [
  {
    Id: 1,
    type: "text",
    placeholder: "User Name",
  },
  {
    Id: 2,
    type: "password",
    placeholder: "Password",
  },
  {
    Id: 3,
    type: "checkbox",
    placeholder: "Remember me",
    hadding: "Remember me",
    hadding1: "Forgot password?",
  },
];

function Login() {
  return (
    <div className="login text-center py-[10%] ">
      <div className="w-[500px] bg-blue-700 m-auto rounded-lg py-[6%] ">
        <Image
          src={logo}
          alt="this is login logo"
          width={100}
          className="m-auto w-[349px] h-[83px]"
        />
        <div className="w-full">

        {loginInputs.map((input) => (
          <div key={input.Id} className="py-2 ">
            {input.type === "checkbox" ? (
              <div className="flex justify-between  w-[90%] m-auto ">
               <div className="flex gap-2" >
               <input type={input.type} />
                <p>{input.hadding}</p>
               </div>
                <a className="text-[#FF0000]">{input.hadding1}</a>
              </div>
            ) : (
              <input className="py-4 px-3 w-[90%] rounded-2xl" type={input.type} placeholder={input.placeholder} />
              )}
            <br />
          </div>
        ))}
        <button className="bg-[#F14A0F] px-[15%] text-[40px] text-[#ffff] font-semibold rounded-lg">
          Log in
        </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
