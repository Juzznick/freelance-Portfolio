import Image from "next/image";
export default function Hero(){
    return(
        <div className="h-screen relative overflow-hidden flex flex-col items-center right-0" id="hero">
            <h5 className="text-5xl absolute top-15 text-white">Hey, I&#39;m</h5>
            <h1 className="flex items-center justify-center text-[9rem] text-white text-center leading-29    sm:text-[18rem] sm:leading-normal  ">NIDA SHIRIN</h1>
            <Image className="absolute bottom-0 object-cover z-40 w-3xl sm:w-2xl" draggable='false' alt="Nida Hero Image" src='/nida-anime-hero.webp' width={740} height={400}/>
        </div>
    );
}