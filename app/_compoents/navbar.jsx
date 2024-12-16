const Navbar = () => {
    return ( 
        <nav className="w-full flex  bg-white py-6 px-12 border-b-2 shadow-sm  justify-between">
            <h2 className="text-xl font-bold py-4 text-black">Logo</h2>
            <div className="  lg:flex hidden gap-6 items-center font-bold">
                <p>Home</p>
                <p>Store</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            
            
              <div className="flex gap-4 py-4 px-5">
                <p>Sign in </p> 
            <button className=" px-5 bg-blue-500 text-white rounded-full"> Login</button>
            </div>
            
        </nav>
     );
}
 
export default Navbar;