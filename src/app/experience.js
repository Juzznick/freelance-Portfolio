import Image from "next/image";
const Experience = () => {
    return(
        <div className="h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center right-0" id="experience">


            <h1 className="text-white text-[15rem] reveal z-1">EXPERIENCE</h1>
            <h5 className=" description-text text-white text-2xl w-3/4 reveal z-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
               unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
            <Image className='absolute z-0 object-cover bottom-0 opacity-80' loading="lazy" src='/experience-bg.webp' alt="experience" layout="fill"/>
        </div>
    );
}

export default Experience;