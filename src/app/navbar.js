import Image from "next/image";
const NavBar = () => {
    return (
        <nav className="bg-white flex justify-center items-center pt-2 h-screen w-1/6 sticky top-0 z-999 ">
            <div className="bg-primary h-29/30 w-9/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden relative">
                {/* <img src='/profile-img.jpeg' className="absolute top-10 w-3/4 rounded-full"/> */}
                <ul className="flex flex-col items-center w-full">
                    <a href='#hero' className="w-full flex justify-start items-center bg-primary h-7 m-1 ">
                        <Image width="25" height="25" src="https://img.icons8.com/glyph-neue/64/FFFFFF/home--v1.png" className="mr-1.5 ml-5" alt="home"/>
                        <li className="cursor-pointer text-1xl  text-white hidden sm:block">Home</li>
                    </a>

                    <a href='#aboutme' className="w-full flex justify-start  items-center bg-primary h-7 m-1 ">
                        <Image width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/person-male.png" className="mr-1.5 ml-5"  alt="about-me"/>
                        <li className="cursor-pointer text-1xl  text-white hidden sm:block">About Me</li>
                    </a>

                    <a href='#education' className="w-full flex justify-start  items-center bg-primary h-7 m-1 ">
                        <Image width="25" height="25" src="https://img.icons8.com/glyph-neue/64/FFFFFF/education.png" className="mr-1.5 ml-5"  alt="education"/>
                        <li className="cursor-pointer text-1xl  text-white hidden sm:block">Education</li>
                    </a>

                    <a href='#experience' className="w-full flex justify-start  items-center bg-primary h-7 m-1 ">
                        <Image width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/book.png" className="mr-1.5 ml-5"  alt="experience"/>
                        <li className="cursor-pointer text-1xl  text-white hidden sm:block">Experience</li>
                    </a>

                    <a href='#projects' className="w-full flex justify-start  items-center bg-primary h-7 m-1 ">
                        <Image width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/group-of-projects.png" className="mr-1.5 ml-5"  alt="projects"/>
                        <li className="cursor-pointer text-1xl  text-white hidden sm:block">Projects</li>
                    </a>

                    <a href='#contact' className="w-full flex justify-start  items-center bg-primary  h-7 m-1 ">
                        <Image width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/contact-card.png" className="mr-1.5 ml-5" alt="contact"/>
                        <li className="cursor-pointer text-1xl  text-white hidden sm:block">Contact</li>
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