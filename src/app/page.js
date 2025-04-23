'use client';
import { useEffect, useState } from 'react';
import Hero from './hero';
import NavBar from './navbar';
import AboutMe from './aboutme';
import Education from './education';
import Loader from './loader';
import Contact from './contact';

export default function Home() {



  const [isLoading, setIsLoading] = useState(true);
  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
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
        <Contact />
      </div>


      <a href='#hero'>
        <button className='fixed right-5 bottom-5 border-2 border-black/50 rounded-3xl p-2 bg-white/30 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18'
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
