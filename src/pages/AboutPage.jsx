import { Hero } from '../components/Hero'
import { NavBar } from '../components/NavBar'
import { useRef } from 'react'
import { About } from '../components/About'

export const AboutPage = () => {
  const divRef = useRef('home')

  const scrollToElement = () => {
    const { current } = divRef
    if (current !== null) {
      return (current.scrollIntoView ? current.scrollIntoView() : '')
    }
  }

  return (
    <>
      <NavBar
        Function={scrollToElement}
      />
      <Hero />
      <About />
    </>
  )
}
