const NavBar = () => {
    return(
        <nav className="bg-white flex justify-center items-center pt-2 sticky top-0">
            <ul className="flex justify-around w-screen">
                <a><li className="cursor-pointer">HOME</li></a>
                <a><li className="cursor-pointer">ABOUT ME</li></a>
                <a><li className="cursor-pointer">EDUCATION</li></a>
                <a><li className="cursor-pointer">EXPERIENCE</li></a>
            </ul>
        </nav>
    );
}

export default NavBar;