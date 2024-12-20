import google from "@/public/google.svg";
import Image from "next/image";
import { space } from "postcss/lib/list";

const page = () => {
  return (
    <div className="flex">
      <div className="mt-2">
        <video
        
          playsInline
          className="auth-sidebar-video h-auto w-auto"
          autoPlay
          loop
          muted
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
        ></video>
      </div>
      <div className=" ">
        <p className="text-3xl font-bold mt-6 ml-20">Sign up to dribble</p>
        <div className="flex justify-between">
          <button className="text-black  bg-white rounded-full py-4  w-[400] mt-5 ml-20  border-2">
            <div className="flex justify-center gap-6">
              <Image src={google} alt="google" height={20} width={20}></Image>
              Sign in with google
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between  border-green mt-8">
          <hr className="border-x-2 w-1/4" />
          <p className=" text-gray-500">or sign in with the email</p>
          <hr className="w-1/4 border-x-2 " />
        </div>
        <p className="font-bold text-xm mt-5 ml-16 ">Username or Email</p>
        <input
          className="px-28 border-x-2 border-y-2 rounded-lg ml-16 py-4  hover:border-pink-200 hover:shadow-md"
          type="search"
        ></input>
        <div className="flex gap-72 items-center">
          <p className="font-bold text-xm mt-5 ml-16 ">Password</p>
          <p className="mt-8 text-xm">
            <a href="#" className="underline">
              Forget?
            </a>
          </p>
        </div>
        <input className="px-28 border-x-2 border-y-2 rounded-lg ml-16 py-4  hover:border-pink-200 hover:shadow-md"></input>
        <button className="bg-black  text-white rounded-full py-4  w-[400] mt-5 ml-20  ">
          Sign in
        </button>
        <p className="mt-5 ml-40 text-gray-500 text-sm">
          Don't have an account?
          <a href="#" className="underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
