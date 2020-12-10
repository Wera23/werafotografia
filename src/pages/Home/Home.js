import React, { useState, useEffect } from "react"
import classnames from "classnames"

//import Gallery from "../../components/MainGallery/MainGallery";
import styles from "./Home.module.scss"
import Overview from "./Overview"
import Overview2 from "./Overview2"

const Home = () => {
  return (
    <div className={classnames(styles.homepage)}>
    <div className={styles.displayMobile}>
    <Overview />
    </div>
    <div className={styles.displayDesktop}>
    <Overview2 />
    </div>
     
    </div>
  )
}

export default Home
