import Hero from './hero'
import NavBar from './navbar'
import AboutMe from './aboutme'

export default function Home() {
  return (
    <div className='flex'>
      <NavBar/>
      <div className='w-5/6'>
        <Hero/>
        <AboutMe/>
      </div>
    </div>
  );
}
