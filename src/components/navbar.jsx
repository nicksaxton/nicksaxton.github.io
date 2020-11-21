import React from "react"

import { scrollTo } from "../utils/scroll"

const Navbar = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-4 sticky top-0 bg-white shadow-sm items-center">
      <div
        className="font-bold text-2xl sm:text-base cursor-pointer text-center sm:text-left pb-1 border-b-4 border-transparent"
        onClick={() => scrollTo(0)}
      >
        Nick Saxton
      </div>
      <div className="flex mt-4 sm:mt-0 flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-center">
        {children}
      </div>
    </div>
  )
}

export default Navbar
