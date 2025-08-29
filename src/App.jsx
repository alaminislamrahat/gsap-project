import NavBar from './Components/NavBar'
import Hero from './Sections/Hero'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import MessageSection from './Sections/MessageSection';
import FlavourSection from './Sections/FlavourSection';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  })

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavourSection />
          <div className='h-dvh border border-red-500'></div>
        </div>
      </div>

    </main>
  )
}

export default App