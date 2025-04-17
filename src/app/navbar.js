const NavBar = () => {
    return(
        <nav className="bg-blue-200 flex justify-center items-center mt-2">
            <ul className="flex justify-around w-screen">
                <a><li>HOME</li></a>
                <a><li>ABOUT ME</li></a>
                <a><li>EDUCATION</li></a>
                <a><li>EXPERIENCE</li></a>
            </ul>
        </nav>
    );
}

export default NavBar;