const NavBar = () => {
    return (
        <nav className="bg-white flex justify-center items-center pt-2 h-screen w-1/6 sticky top-0 z-999 ">
            <div className="bg-primary/50 h-29/30 w-9/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden relative">
                <img src='/profile-img.png' className="absolute top-20 w-3/4"/>
                <ul className="flex flex-col items-center w-full">
                    <a href='#hero' className="w-full flex justify-center items-center bg-primary h-13 m-1 shadow-[inset_0px_0px_38px_-1px_rgba(236,_72,_153,_0.5)]"><li className="cursor-pointer text-2xl  text-white">Home</li></a>
                    <a href='#aboutme' className="w-full flex justify-center  items-center bg-primary h-13 m-1 shadow-[inset_0px_0px_38px_-1px_rgba(236,_72,_153,_0.5)]"><li className="cursor-pointer text-2xl  text-white">About Me</li></a>
                    <a href='#education' className="w-full flex justify-center  items-center bg-primary h-13 m-1 shadow-[inset_0px_0px_38px_-1px_rgba(236,_72,_153,_0.5)]"><li className="cursor-pointer text-2xl  text-white">Education</li></a>
                    <a href='#contact' className="w-full flex justify-center  items-center bg-primary  h-13 m-1 shadow-[inset_0px_0px_38px_-1px_rgba(236,_72,_153,_0.5)]"><li className="cursor-pointer text-2xl  text-white">Contact</li></a>
                    <a href='/Nida_Shirin_Resume.pdf' className="w-full flex justify-center  items-center bg-primary  h-13 m-1 shadow-[inset_0px_0px_38px_-1px_rgba(236,_72,_153,_0.5)]"><li className="cursor-pointer text-2xl  text-white">My Resume</li></a>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;