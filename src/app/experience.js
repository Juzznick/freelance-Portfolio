import Image from "next/image";
const Experience = () => {
    return (
        <div className="h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center right-0" id="experience">


            <h1 className="text-white text-[15rem] reveal z-1">EXPERIENCE</h1>
            <h5 className=" description-text text-white text-2xl w-3/4 reveal z-1">DevLabs is a coding and technical club founded to foster innovation
                and learning through hackathons, workshops, and bootcamps. As the lead, I organize technical challenges that encourage creative
                problem-solving and real-world application of coding skills, creating a collaborative environment for
                growth.</h5>
            <Image className='absolute z-0 object-cover bottom-0 opacity-80' loading="lazy" src='/experience-bg.webp' alt="experience" layout="fill" />
        </div>
    );
}

export default Experience;