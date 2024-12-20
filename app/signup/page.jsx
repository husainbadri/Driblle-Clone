
import google from "@/public/google.svg";
import Image from "next/image";
import { space } from "postcss/lib/list";
const page = () => {
  return (
    <div className=" flex  ">
      <div className=" mt-2 ">
        <video
        className="w-auto h-auto"
        
        
          playsInline
          class="auth-sidebar-video "
          autoPlay
          loop
          muted
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
        ></video>
      </div>
      <div>
        <p className="text-3xl font-bold mt-16 ml-16">Sign up to dribble</p>
        <div className="fles justify-between">
        <button className="bg-black  text-white rounded-full py-4 w-[400] mt-12 ml-12 ">
          <div className="flex justify-center gap-6">
                        <Image src={google} alt="google" height={20} width={20}></Image>
                        Sign in with google
                      </div>
          
        </button>
        </div>

        <div className="flex items-center justify-between  border-green mt-8 text-gray-500">
          <hr className="border-x-2 w-1/3 " />
          <p>OR</p>
          <hr className="w-1/3 border-x-2 " />
        </div>

        <button className="bg-white  text-black rounded-full py-4 w-[400] mt-8 ml-12 border-2 ">
          Sign up with email
        </button>
        <p className="mt-10 ml-12 text-xs">
          By creating an account you agree with our
          <a href="#" className="underline">
            Terms of Service, Privacy Policy,
          </a>
        </p>
        <p className=" ml-36 text-xs">
          and our default
          <a href="#" className="underline">
            
            Notification Settings.
          </a>
        </p>
        <p className="mt-10 ml-32 text-gray-500">
          Already have an account?
          <a href="#" className="underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
