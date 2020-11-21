import React, { forwardRef } from "react"

const Contact = forwardRef(({}, ref) => (
  <div className="h-screen bg-gray-200 p-28 text-center" ref={ref}>
    <h1 className="inline-block text-6xl pb-4 border-b-8 border-black border-solid tracking-wider">
      Contact
    </h1>
  </div>
))

export default Contact
