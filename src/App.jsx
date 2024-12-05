import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import ScrollIndicator from './Components/ScrollIndicator'
import Hero from './Components/Hero'
import GithubRepoCard from './Components/GithubRepoCard'
import About from './Components/About'
import CardLanding from './Components/CardLanding'
import TypingEffectHeader from './Components/TypingEffectHeader'
import StackedCardsCarousel from './Components/StackedCardsCarousel'
import Clubs from './Components/Clubs'
import ContactEnvelope from './Components/ContactEnvelope'
import Footer from './Components/Footer'

export default function App() {
  const [opacity, setOpacity] = useState(1)
  const [navOpacity, setNavOpacity] = useState(0) // Initial opacity of navbar is 0 (invisible)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 200 // Adjust this value to control the fade-out for landing content
      const navFadeStart = 100 // Scroll position to start navbar fade-in
      const navFadeEnd = 200 // Scroll position to end navbar fade-in

      // Fade out landing content
      const fade = Math.max(1 - scrollPosition / maxScroll, 0)
      setOpacity(fade)

      // Fade in navbar
      if (scrollPosition > navFadeStart) {
        const navFade = Math.min(
          (scrollPosition - navFadeStart) / (navFadeEnd - navFadeStart),
          1
        )
        setNavOpacity(navFade)
      } else {
        setNavOpacity(0) // Keep navbar invisible if above fade start point
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Landing Section */}
      <section
        className="h-screen flex items-center justify-center transition-opacity duration-1000"
        style={{ opacity }}
      >
      <CardLanding />
      <ScrollIndicator />
      </section>

      {/* Main Page with Navbar */}
      <section className="main-page h-screen">
        <Navbar navOpacity={navOpacity} />
      
        {/* Main page content here */}
        <Hero />
        <About />
        {/* <TypingEffectHeader /> */}
        <GithubRepoCard />
        <StackedCardsCarousel />
        <Clubs />
        <ContactEnvelope />
        <Footer />
      </section>
    </div>
  )
}

