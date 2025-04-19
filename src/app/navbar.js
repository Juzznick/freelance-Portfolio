const NavBar = () => {
    return(
        <nav className="bg-white flex justify-center items-center pt-2 h-screen w-1/8 fixed left-0 z-999">
            <ul className="flex flex-col justify-around h-1/2">
                <a><li className="cursor-pointer text-5xl text-blue-300">HOME</li></a>
                <a><li className="cursor-pointer text-5xl text-blue-300">ABOUT ME</li></a>
                <a><li className="cursor-pointer text-5xl text-blue-300">EDUCATION</li></a>
                <a><li className="cursor-pointer text-5xl text-blue-300">EXPERIENCE</li></a>
            </ul>
        </nav>
    );
}

export default NavBar;