const NavBar = () => {
    return(
        <nav className="bg-white/10 flex justify-center items-center pt-2 h-screen w-1/6 sticky top-0 z-999 ">
            <ul className="flex flex-col justify-around h-1/2">
                <a href='#hero'><li className="cursor-pointer text-3xl text-white">HOME</li></a>
                <a href='#aboutme'><li className="cursor-pointer text-3xl text-white">ABOUT ME</li></a>
                <a href='#education'><li className="cursor-pointer text-3xl text-white">EDUCATION</li></a>
                <a><li className="cursor-pointer text-3xl text-white">EXPERIENCE</li></a>
            </ul>
        </nav>
        
    );
}

export default NavBar;