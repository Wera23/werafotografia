import React from "react"
import classnames from "classnames"

import styles from "./Home.module.scss"
import OverviewMobile from "./OverviewMobile"
import OverviewDesktop from "./OverviewDesktop"

const Home = () => {
  return (
    <div className={classnames(styles.homepage)}>
      <div className={styles.displayMobile}>
        <OverviewMobile />
      </div>
      <div className={styles.displayDesktop}>
        <OverviewDesktop />
      </div>
    </div>
  )
}

export default Home
