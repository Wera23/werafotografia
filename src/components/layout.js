import React from "react"
import classnames from "classnames"

import styles from "./layout.module.scss"

//import { useDisplayNameScroll } from "../hooks/useDisplayName"

const Layout = ({ children }) => {
  // const isDisplayName = useDisplayNameScroll()

  return (
    <div className={styles.page}>
      <ul className={styles.menu}>
        <li className={styles.menuLi}>
          <i className={classnames("icon-pagelines", styles.menuIcon)} />
          <a className={styles.menuLink} href="/">
            Strona główna
          </a>
        </li>

        <li className={styles.menuLi}>
          <i className={classnames("icon-fog-sun", styles.menuIcon)} />
          <a className={styles.menuLink} href="/projects">
            Tematy
          </a>
        </li>

        <li className={styles.menuLi}>
          <i className={classnames("icon-paper-plane", styles.menuIcon)} />
          <a className={styles.menuLink} href="/about">
            Kontakt
          </a>
        </li>
      </ul>
      <a href="/" className={styles.pageTitle}>
        Wera Chodanionek
      </a>

      {/* {isDisplayName === true && (
        <div className={styles.pageTitleScroll}>Wera Chodanionek</div>
      )} */}

      {children}

      <p className={styles.footerText}>Wera Chodanionek Fotografia | 2020</p>
    </div>
  )
}

export default Layout
