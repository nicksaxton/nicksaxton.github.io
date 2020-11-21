import React from "react"

import { scrollTo } from "../utils/scroll"

const DownButton = () => {
  const handleClick = () => {
    scrollTo(window.innerHeight)
  }

  return (
    <div className="flex-none flex justify-center pb-4">
      <svg
        className="h-12 text-black  animate-bounce cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handleClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    </div>
  )
}

export default DownButton
