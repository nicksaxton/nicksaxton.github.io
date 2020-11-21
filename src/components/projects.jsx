import React, { forwardRef } from "react"

const Projects = forwardRef(({}, ref) => {
  return (
    <div className="h-screen bg-black text-white text-center pt-28" ref={ref}>
      <h1 className="inline-block text-6xl pb-4 border-b-8 border-white border-solid tracking-wider">
        Projects
      </h1>
    </div>
  )
})

export default Projects
