import React, { forwardRef } from "react"

const About = forwardRef(({}, ref) => (
  <div
    className="bg-gray-200 min-h-screen flex text-center justify-center items-center"
    ref={ref}
  >
    <div className="w-3/4 py-4">
      <h1 className="inline-block text-6xl pb-4 border-b-8 border-black border-solid tracking-wider">
        About
      </h1>
      <p className="text-4xl mt-14">
        I am currently working as a software engineer for BluJay Solutions, a
        leader in the logistics and transportation software and services
        industry.
      </p>
      <p className="text-3xl mt-6">
        At BluJay, I work as part of an agile team to develop best-in-class,
        cloud-based applications.
      </p>
      <p className="text-2xl mt-6">
        Previously I worked at Nexteer Automotive on embedded software for
        electric power steering systems. Prior to that, I attended Michigan
        State University and graduated with a bachelor's degree in computer
        engineering.
      </p>
    </div>
  </div>
))

export default About
