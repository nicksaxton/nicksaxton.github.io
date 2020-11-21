import React, { useRef } from "react"

import { scrollTo } from "../utils/scroll"

import About from "../components/about"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import TopSection from "../components/top-section"

const Home = () => {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <>
      <TopSection />
      <div className="relative">
        <Navbar>
          <div
            className="cursor-pointer hover:border-solid border-transparent border-b-4 hover:border-black pb-1"
            onClick={() => scrollTo(aboutRef.current.offsetParent.offsetTop)}
          >
            About
          </div>
          <div
            className="cursor-pointer hover:border-solid border-transparent border-b-4 hover:border-black pb-1"
            onClick={() =>
              scrollTo(
                projectsRef.current.offsetParent.offsetTop +
                  projectsRef.current.offsetTop
              )
            }
          >
            Projects
          </div>
          <div className="cursor-pointer hover:border-solid border-transparent border-b-4 hover:border-black pb-1">
            Contact
          </div>
        </Navbar>
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
      </div>
    </>
  )
}

export default Home
