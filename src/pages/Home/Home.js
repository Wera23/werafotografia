import React, { useState, useEffect } from "react"
import classnames from "classnames"

import Gallery from "../../components/MainGallery/MainGallery"
import "./Home.css"

const Home = () => {
  const [bgColor, setBgColor] = useState("bgHP1")

  const scrollPage = e => {
    if (window.scrollY < 50) {
      return setBgColor("bgHP1")
    } else if (window.scrollY > 50) {
      return setBgColor("bgHP2")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollPage)

    return () => window.removeEventListener("scroll", scrollPage)
  })

  return (
    <div className={classnames("homepage", bgColor)}>
      <Gallery />
    </div>
  )
}

export default Home
