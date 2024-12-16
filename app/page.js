import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="py-30 w-screen ">
        <h1 className="w-full lg:text-5xl  text-center  text-2xl  py-10 ">
          Discover the world’s <br /> top designers
        </h1>
        <h3 className="text-center lg:text-2xl  text-xl lg:py-10 py-5 ">
          Explore work from the most talented and accomplished designers<br/> ready
          to take on your next project
        </h3>
      </div>
      <div className="text-center ">
        <input
          className="lg:w-[24em] w-[16em] rounded-full px-8 border-b-2 py-4 bg-slate-100"
          type="search"
          placeholder="what are you looking for?"
        />
        <button>
          <search />
        </button>
      </div>
      <div className="w-full lg:flex-row flex-col  flex justify-center mt-10 ">
        <div className="flex gap-8 items-center text-center h-10 px-4 text-xs">
          <p className="bg-slate-100 rounded-full px-4">Landing page </p>
          <p className="bg-slate-100 rounded-full px-4">E-commerce</p>
          <p className="bg-slate-100 rounded-full px-4">Mobile app</p>
          <p className="bg-slate-100 rounded-full px-4">Logo design</p>
          <p className="bg-slate-100 rounded-full px-4">Dashboards</p>
          <p className="bg-slate-100 rounded-full px-4">icons</p>
        </div>
      </div>
      <div>
        <div className=" flex justify-between flex-col lg:flex-row w-full mt-4 lg:mt-20">
          <div className="flex flex-wraplg:gap-12 gap-4 overflow-hidden lg:flex-row flex-col font-bold py-4 ">
            <div className="rounded-sm border-b-2 text-xs">
              {" "}
              <button> Popular</button>
            </div>
            <p>Discover</p>
            <p>Branding</p>
            <p>Animation</p>
            <p>Illustration</p>
            <p>Mobile</p>
            <p>Print</p>
            <p>Product design</p>
            <p>Web design</p>
          </div>
        </div>
      </div>

      <div className="py-10 grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <Link href={"/nxtpg"}>
          <div className="h-45 w-full bg-black rounded-lg shadow-md">
            <img
              src="https://cdn.dribbble.com/userupload/17756508/file/still-02f0472c72f0fca85d357d9e54094213.png?format=webp&resize=1200x900&vertical=center"
              className="h-45 w-full rounded-lg"
            ></img>
          </div>
        </Link>
        <div className="h-45 w-full bg-black rounded-lg shadow-md">
          <img
            src="https://cdn.dribbble.com/userupload/17951499/file/original-4d9c882fb3e305f3d9743a223171d031.png?format=webp&resize=1200x900&vertical=center"
            className="h-45 w-full rounded-lg"
          ></img>
        </div>
        <div className="h-45 w-full bg-black rounded-lg shadow-md">
          <img
            src="https://cdn.dribbble.com/userupload/17954565/file/original-f8a563a9c573fcbb0458f98251551170.jpg?format=webp&resize=320x240&vertical=center"
            className="h-45 w-full rounded-lg"
          ></img>
        </div>
        <div className="h-45 w-full bg-black rounded-lg shadow-md">
          <img
            src="https://cdn.dribbble.com/userupload/17950650/file/original-380cf97170fd5e4f082104bb1a9e44d9.png?format=webp&resize=320x240&vertical=center"
            className="h-45 w-full rounded-lg"
          ></img>
        </div>
        <div className="h-45 w-full bg-black rounded-lg shadow-md">
          <img
            src="https://cdn.dribbble.com/userupload/16674834/file/original-482458c5717f461c19e8f8b9e2a736f6.jpg?format=webp&resize=320x240&vertical=center"
            className="h-45 w-full rounded-lg"
          ></img>
        </div>
        <div className="h-45 w-full bg-black rounded-lg shadow-md">
          <img
            src="https://cdn.dribbble.com/userupload/17958040/file/original-f3516a09d1f4a33bdfda00bf7be6d18c.png?format=webp&resize=320x240&vertical=center0"
            className="h-45 w-full rounded-lg"
          ></img>
        </div>
        <div className="h-45 w-full bg-black rounded-lg shadow-md">
          <img
            src="https://cdn.dribbble.com/userupload/17958788/file/original-5d4fe76b22f654979ebf90ca4e01fc4f.png?format=webp&resize=320x240&vertical=center"
            className="h-45 w-full rounded-lg"
          ></img>
        </div>
        <div className="h-45 border-2 border-blue-400 w-full bg-black rounded-lg shadow-md">
          <Image
            src="/vercel.svg"
            className="h-45 w-full rounded-lg"
            alt=""
            height={100}
            width={100}
          ></Image>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-black  text-white rounded-full py-3 w-[200] ">
          Sign up to continue
        </button>
      </div>

      <nav className="w-full  lg:flex-row flex-col bg-white py-6 px-10  flex justify-between   ">
        <h2 className=" flex justify-center text-xl font-bold py-4 text-black">
          Logo
        </h2>
        <div className="flex justify-between flex-col lg:flex-row gap-6 items-center text-center text-md font-bold">
          <div className="flex  justify-center flex-wrap  items-center gap-4 py-4 px-5 ">
            <p>For deesigner</p>
            <p>Hire talent</p>
            <p>Inspiration</p>
            <p>Advertising</p>
            <p>Blog</p>
            <p>About</p>
            <p>Report</p>
          </div>

          <div className=" flex  justify-center  items-center gap-4 py-4 px-5 lg:flex-row ">
            <button>
              <Instagram />
            </button>
            <button>
              {" "}
              <Twitter />
            </button>
            <button>
              {" "}
              <Linkedin />
            </button>
            <button>
              <Facebook />
            </button>
          </div>
        </div>
      </nav>
      <nav className="w-full bg-slate-600 lg:py-6 py-0 lg:px-10 px-0     ">
        <div className="flex  justify-center lg:flex-row flex-col lg:gap-4 items-center ">
          <p>@2024dribble</p>
          <p>Store</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </nav>
    </div>
  );
}
