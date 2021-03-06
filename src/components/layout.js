import React from "react"
import classnames from "classnames"

import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.page}>
      <ul className={styles.menu}>
        <li className={styles.menuLi}>
          <i className={classnames("icon-pagelines", styles.menuIcon)} />
          <a className={styles.menuLink} href="/" onClick={scrollToTop}>
            Strona główna
          </a>
        </li>

        <li className={styles.menuLi}>
          <i className={classnames("icon-fog-sun", styles.menuIcon)} />
          <a className={styles.menuLink} href="/projects" onClick={scrollToTop}>
            Tematy
          </a>
        </li>

        <li className={styles.menuLi}>
          <i className={classnames("icon-paper-plane", styles.menuIcon)} />
          <a className={styles.menuLink} href="/about" onClick={scrollToTop}>
            Kontakt
          </a>
        </li>

        <li className={styles.menuLi}>
          <a
            className={styles.menuLink}
            href="https://www.instagram.com/werachodanionek/"
            target="_blank"
            rel="noreferrer"
          >
            <i className={classnames("icon-instagram", styles.menuIcon)} />
          </a>
        </li>

        <li className={styles.menuLi}>
          <a
            className={styles.menuLink}
            href="https://www.facebook.com/profile.php?id=100008104848404"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={classnames("icon-facebook-circled", styles.menuIcon)}
            />
          </a>
        </li>
      </ul>

      <a href="/" className={styles.pageTitle} onClick={scrollToTop}>
        Wera Chodanionek
      </a>

      {children}

      <div className={styles.layoutLegend}>
        <div className={styles.layoutSeeMore}>
          <h2>
            Zobacz galerie
            <i
              className={classnames("icon-pagelines", styles.layoutSeeMoreIcon)}
            />
          </h2>

          <div className={styles.layoutSeeGaleries}>
            <a
              href="/mountains"
              className={styles.layoutSeeMoreElement}
              onClick={scrollToTop}
            >
              Góry
            </a>

            <a
              className={styles.layoutSeeMoreElement}
              href="/travels"
              onClick={scrollToTop}
            >
              Podróże
            </a>

            <a
              className={styles.layoutSeeMoreElement}
              href="/cats"
              onClick={scrollToTop}
            >
              Koty
            </a>

            <a
              className={styles.layoutSeeMoreElement}
              href="/poland"
              onClick={scrollToTop}
            >
              Polska
            </a>

            <a
              className={styles.layoutSeeMoreElement}
              href="/situations"
              onClick={scrollToTop}
            >
              Sytuacje
            </a>
          </div>
        </div>
        <div className={styles.menuBottom}>
          <li className={styles.menuLi}>
            <i className={classnames("icon-paper-plane", styles.menuIcon)} />
            <a className={styles.menuLink} href="/about" onClick={scrollToTop}>
              Kontakt
            </a>
          </li>
          <li className={styles.menuLi}>
            <a
              className={styles.menuLink}
              href="https://www.instagram.com/werachodanionek/"
              target="_blank"
              rel="noreferrer"
            >
              <i className={classnames("icon-instagram", styles.menuIcon)} />
            </a>
          </li>

          <li className={styles.menuLi}>
            <a
              className={styles.menuLink}
              href="https://www.facebook.com/profile.php?id=100008104848404"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={classnames("icon-facebook-circled", styles.menuIcon)}
              />
            </a>
          </li>
        </div>
      </div>

      <p className={styles.footerText}>Wera Chodanionek Fotografia | 2020</p>
    </div>
  )
}

export default Layout
