import Image from "next/image";
const Projects = () => {
    return(
        <div className="h-screen relative overflow-hidden flex flex-col items-center right-0" id="projects">
                    <h1 className="flex items-center justify-center text-[18rem] text-white">PROJECTS</h1>
                    <div className="flex justify-around w-full flex-col sm:flex-row">
                        <div className="flex justify-center card relative w-75 rounded-2xl h-80 bg-white/70 overflow-hidden cursor-pointer">
                            <h4 className="flex justify-center absolute bottom-2 ">Planto</h4>
                            <div className="flex justify-center absolute top-5 h-50">
                                <Image className="object-cover rounded-2xl hover:grayscale hover:scale-110 transition-all duration-300 ease-in-out " src='/proj1.png' width={250} height={100} alt="project 1"/>
                            </div>
                        </div>
                        <div className="flex justify-center card relative w-75 rounded-2xl h-80 bg-white/70 overflow-hidden cursor-pointer">
                            <h4 className="flex justify-center absolute bottom-2 ">Devlabs</h4>
                            <div className="flex justify-center absolute top-5 h-50">
                                <Image className="object-cover rounded-2xl hover:grayscale hover:scale-110 transition-all duration-300 ease-in-out " src='/proj2.png' width={250} height={100} alt="project 2"/>
                            </div>
                        </div>
                        <div className="flex justify-center card relative w-75 rounded-2xl h-80 bg-white/70 overflow-hidden cursor-pointer">
                            <h4 className="flex justify-center absolute bottom-2 ">BEIN</h4>
                            <div className="flex justify-center absolute top-5 h-50">
                                <Image className="object-cover rounded-2xl hover:grayscale  hover:scale-110 transition-all duration-300 ease-in-out " src='/proj3.png' width={250} height={100} alt="project 3"/>
                            </div>
                        </div>
                        <div className="flex justify-center card relative w-75 rounded-2xl h-80 bg-white/70 overflow-hidden cursor-pointer">
                            <h4 className="flex justify-center absolute bottom-2 ">Airwave</h4>
                            <div className="flex justify-center absolute top-5 h-50">
                                <Image className="object-cover rounded-2xl hover:grayscale  hover:scale-110 transition-all duration-300 ease-in-out " src='/proj4.png' width={250} height={100} alt="project 4"/>
                            </div>
                        </div>
                    </div>
        </div>
    );
}
export default Projects;