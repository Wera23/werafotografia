import React, { useState, useEffect } from "react"
import classnames from "classnames"

//import Gallery from "../../components/MainGallery/MainGallery";
import styles from "./Home.module.scss"
import Overview from "./Overview"

const Home = () => {
  const [bgColor, setBgColor] = useState(styles.bgHP1)

  const scrollPage = e => {
    if (window.scrollY < 50) {
      return setBgColor(styles.bgHP1)
    } else if (window.scrollY > 50) {
      return setBgColor(styles.bgHP2)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollPage)

    return () => window.removeEventListener("scroll", scrollPage)
  })

  return (
    <div className={classnames(styles.homepage, bgColor)}>
      <div className={styles.homepageGallery}>
        <Overview />
      </div>
    </div>
  )
}

export default Home
