import React, { forwardRef } from "react"

const About = forwardRef(({}, ref) => (
  <div className="bg-gray-200 py-44 px-20 text-center s" ref={ref}>
    <p className="text-4xl">
      I am currently working as a software engineer for BluJay Solutions, a
      leader in the logistics and transportation software and services industry.
    </p>
    <p className="text-3xl mt-6">
      At BluJay, I work as part of an agile team to develop best-in-class,
      cloud-based applications.
    </p>
    <p className="text-2xl mt-6">
      Previously I worked at Nexteer Automotive on embedded software for
      electric power steering systems. I graduated with a degree in computer
      engineering from Michigan State University.
    </p>
  </div>
))

export default About
