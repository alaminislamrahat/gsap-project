import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Sections/Hero'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <div className='h-dvh border border-red-500'></div>
    </main>
  )
}

export default App