import Image from "next/image";
const Projects = () => {
    return(
        <div className="h-screen relative overflow-hidden flex flex-col items-center right-0" id="projects">
                    <h1 className="flex items-center justify-center text-[18rem] text-white">PROJECTS</h1>
                    <div className="flex">
                        <div className="flex justify-center card relative w-75 rounded-2xl h-80 bg-card2 overflow-hidden">
                            <h4 className="flex justify-center absolute bottom-2">Hello</h4>
                            <Image className="object-fit absolute top-5" src='/proj1.png' width={250} height={10}/>
                        </div>
                    </div>
        </div>
    );
}
export default Projects;