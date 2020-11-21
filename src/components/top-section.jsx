import React from "react"

import DownButton from "../components/down-button"
import Hero from "../components/hero"

const TopSection = () => (
  <div className="bg-main-background bg-left h-screen flex flex-col">
    <Hero />
    <DownButton />
  </div>
)

export default TopSection
