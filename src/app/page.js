import Hero from './hero'
import NavBar from './navbar'
import AboutMe from './aboutme'
import Education from './education'

export default function Home() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='w-5/6'>
        <Hero />
        <AboutMe />
        <Education />
      </div>
      <a href='#hero'><button className='fixed right-5 bottom-5 border-2 p-2 bg-white cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" /></svg></button>
      </a>

    </div>
  );
}
