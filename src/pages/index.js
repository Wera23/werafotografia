import React, { useState, useEffect } from "react"
import classnames from "classnames"

import styles from "./Home.module.scss"
import OverviewMobile from "./Home/OverviewMobile"
import OverviewDesktop from "./Home/OverviewDesktop"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <div className={classnames(styles.homepage)}>
        <div className={styles.displayMobile}>
          <OverviewMobile />
        </div>
        <div className={styles.displayDesktop}>
          <OverviewDesktop />
        </div>
      </div>
    </Layout>
  )
}

export default Home
