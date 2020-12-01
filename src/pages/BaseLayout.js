import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

import styles from "./BaseLayout.module.scss"

const BaseLayout = ({ children }) => {
  return (
    <div className={styles.page}>
      <ul className={styles.menu}>
        <li className={styles.menuLi}>
          <i className={classnames("icon-pagelines", styles.menuIcon)} />
          <Link className={styles.menuLink} to="/">
            Strona główna
          </Link>
        </li>

        <li className={styles.menuLi}>
          <i className={classnames("icon-fog-sun", styles.menuIcon)} />
          <Link className={styles.menuLink} to="/projects">
            Tematy
          </Link>
        </li>

        <li className={styles.menuLi}>
          <i className={classnames("icon-paper-plane", styles.menuIcon)} />
          <Link className={styles.menuLink} to="/about">
            Informacja
          </Link>
        </li>
      </ul>
      <div className={styles.pageTitle}>Wera Chodanionek</div>
      {/* <Header /> */}
      {children}

      <p className={styles.footerText}>Wera Chodanionek Fotografia | 2020</p>
    </div>
  )
}

export default BaseLayout
