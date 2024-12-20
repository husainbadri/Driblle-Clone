import Link from "next/link";
import Image from "next/image";

import dribble from "@/public/next.svg"
const Navbar = () => {
    
    return ( 
        <nav className="w-full flex  bg-white py-6 px-12 border-b-2 shadow-sm  justify-between">
            {/* <h2 className="text-xl font-bold py-4 text-black"> */}
                <Image alt="ddhhbafhb" height={80} width={85} src={dribble}/>
            {/* </h2> */}
            <div className=" lg:flex hidden gap-6 items-center  font-bold">
                <p>Explore</p>
                <p>Hire a designer</p>
                 <p>Find a job </p> 
                <Link href={"/About"}><p>Blog</p></Link>
            </div>
            
            <div>
            
              <div className="flex gap-4 py-4 px-5 font-bold items-center">
              <Link href={"/signup"}> <p>Sign up </p> </Link>
             <Link href={"/login"}> <button className="rounded-full bg-black text-white px-4  py-2">Login</button></Link>            </div>
            </div>
            
        </nav>
     );
}
 
export default Navbar;