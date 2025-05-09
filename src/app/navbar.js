import Image from "next/image";
const NavBar = () => {
    return (
        <nav className="bg-white flex justify-center items-center pt-2 h-screen w-1/6 sticky top-0 z-999 ">
            <div className="bg-primary h-29/30 w-9/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden relative">
                {/* <img src='/profile-img.jpeg' className="absolute top-10 w-3/4 rounded-full"/> */}
                <ul className="flex flex-col items-center w-full">
                    <a href='#hero' className="w-full flex justify-start items-center bg-primary h-7 m-1 opacity-80 hover:opacity-100 ease-in duration-100 ">
                        <Image width="25" height="25" src="https://img.icons8.com/glyph-neue/64/FFFFFF/home--v1.png" className="mr-1.5 ml-5" alt="home--v1"/>
                        <li className="cursor-pointer text-1xl  text-white">Home</li>
                    </a>

                    <a href='#aboutme' className="w-full flex justify-start  items-center bg-primary h-7 m-1 opacity-80 hover:opacity-100 ease-in duration-100 ">
                        <Image width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/person-male.png" className="mr-1.5 ml-5"  alt="person-male"/>
                        <li className="cursor-pointer text-1xl  text-white">About Me</li>
                    </a>

                    <a href='#education' className="w-full flex justify-start  items-center bg-primary h-7 m-1 opacity-80 hover:opacity-100 ease-in duration-100 ">
                        <Image width="25" height="25" src="https://img.icons8.com/glyph-neue/64/FFFFFF/education.png" className="mr-1.5 ml-5"  alt="book"/>
                        <li className="cursor-pointer text-1xl  text-white">Education</li>
                    </a>

                    <a href='#experience' className="w-full flex justify-start  items-center bg-primary h-7 m-1 opacity-80 hover:opacity-100 ease-in duration-100 ">
                        <Image width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/book.png" className="mr-1.5 ml-5"  alt="book"/>
                        <li className="cursor-pointer text-1xl  text-white">Experience</li>
                    </a>

                    <a href='#projects' className="w-full flex justify-start  items-center bg-primary h-7 m-1 opacity-80 hover:opacity-100 ease-in duration-100 ">
                        <Image width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/book.png" className="mr-1.5 ml-5"  alt="book"/>
                        <li className="cursor-pointer text-1xl  text-white">Projects</li>
                    </a>

                    <a href='#contact' className="w-full flex justify-start  items-center bg-primary  h-7 m-1 opacity-80 hover:opacity-100 ease-in duration-100 ">
                        <Image width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/contact-card.png" className="mr-1.5 ml-5" alt="contact-card"/>
                        <li className="cursor-pointer text-1xl  text-white">Contact</li>
                    </a>

                    {/* <a href='/Nida_Shirin_Resume.pdf' className="w-full flex bg-cyan-200 justify-center items-center h-7 m-1 ">
                        <li className="cursor-pointer text-1xl  text-white">My Resume</li>
                    </a> */}
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;