'use client';
import { useEffect, useState } from 'react';
import Hero from './hero';
import NavBar from './navbar';
import AboutMe from './aboutme';
import Education from './education';
import Experience from './experience';
import Loader from './loader';
import Contact from './contact';

export default function Home() {



  const [isLoading, setIsLoading] = useState(true);
  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); //2000 defval
    return () => clearTimeout(timer);
  }, []);




  // Reveal JS
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      reveals.forEach((el) => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  // Show loader initially
  if (isLoading) {
    return <Loader />;
  }


  return (
    <div className='flex'>
      <NavBar />
      <div className='w-5/6'>
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Contact />
      </div>


      <a href='#hero'>
        <button className='fixed right-5 bottom-5 border-2 border-white/50 rounded-3xl p-2 bg-white/30 cursor-pointer'>
        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-up.png" alt="long-arrow-up"/>
        </button>
      </a>
    </div>
  );
}
