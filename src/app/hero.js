export default function Hero(){
    return(
        <div className="h-screen relative overflow-hidden flex flex-col items-center right-0" id="hero">
            <h5 className="text-5xl absolute top-15 text-white">Hey, I&#39;m</h5>
            <h1 className="flex items-center justify-center text-[18rem] text-white">NIDA SHIRIN</h1>
            <img className="absolute bottom-0 object-cover z-40" draggable='false' src='nida-anime-hero.webp' />
        </div>
    );
}