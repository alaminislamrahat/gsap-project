import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Sections/Hero'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import MessageSection from './Sections/MessageSection';
import FlavourSection from './Sections/FlavourSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <MessageSection/>
      <FlavourSection/>
      <div className='h-dvh border border-red-500'></div>
    </main>
  )
}

export default App