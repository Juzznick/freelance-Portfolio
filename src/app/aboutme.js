import Image from 'next/image';
const AboutMe = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col relative " id="aboutme">
            <h1 className="text-white text-[15rem] reveal z-1">ABOUT MEEE</h1>
            <h5 className="text-white text-2xl w-3/4 description-text reveal z-1">
                I am a passionate UI/UX designer and front-end developer focused on creating seamless,
                user-centered digital experiences. With a strong foundation in both design and coding,
                I specialize in building visually appealing, responsive interfaces that prioritize functionality.
                My expertise in tools like Figma, strengthened through certifications like 'User Interface
                Design with Figma' (85% score), allows me to craft clean, intuitive designs.
                In addition to design, my proficiency in HTML, CSS, and JavaScript enables me to translate
                concepts into fully functional websites. My experience spans responsive web design,
                user interaction, and performance optimization, ensuring that my work is both innovative
                and technically sound.
            </h5>
            <Image className='absolute z-0 object-cover' src="/about-bg.webp" alt="aboutme"  layout='fill'/>
        </div>
    );
};

export default AboutMe;
