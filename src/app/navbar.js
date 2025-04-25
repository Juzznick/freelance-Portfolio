const NavBar = () => {
    return (
        <nav className="bg-white flex justify-center items-center pt-2 h-screen w-1/6 sticky top-0 z-999 ">
            {/* <ul className="flex flex-col justify-around h-1/2">
                <a href='#hero'><li className="cursor-pointer text-3xl text-blue-300">HOME</li></a>
                <a href='#aboutme'><li className="cursor-pointer text-3xl text-blue-300">ABOUT ME</li></a>
                <a href='#education'><li className="cursor-pointer text-3xl text-blue-300">EDUCATION</li></a>
                <a><li className="cursor-pointer text-3xl text-blue-300">EXPERIENCE</li></a>
            </ul> */}
            <div className="bg-primary/50 h-29/30 w-9/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <ul className="flex flex-col items-center w-full">
                    <a href='#hero' className="w-full flex justify-center items-center bg-fuchsia-600 h-13 m-1"><li className="cursor-pointer text-2xl  text-white">Home</li></a>
                    <a href='#aboutme' className="w-full flex justify-center  items-center bg-primary h-13 m-1"><li className="cursor-pointer text-2xl  text-white">About Me</li></a>
                    <a href='#education' className="w-full flex justify-center  items-center bg-primary h-13 m-1"><li className="cursor-pointer text-2xl  text-white">Education</li></a>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;