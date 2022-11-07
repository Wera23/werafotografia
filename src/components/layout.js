import React from "react"
import classnames from "classnames"

import styles from "./layout.module.scss"

const Layout = ({ children, data }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <a href="/" className={styles.pageTitle} onClick={scrollToTop}>
          Wera Chodanionek Fotografia
        </a>
        <div className={styles.menuLi}>
          <i className="icon-fog-sun" />
          <a className={styles.menuLink} href="/" onClick={scrollToTop}>
            Portfolio
          </a>
        </div>

        <div className={styles.menuLi}>
          <i
            className={classnames("icon-paper-plane-empty", styles.menuIcon)}
          />
          <a className={styles.menuLink} href="/about" onClick={scrollToTop}>
            Kontakt
          </a>
        </div>

        <div className={styles.menuLi}>
          <i className={classnames("icon-umbrella", styles.menuIcon)} />
          <a className={styles.menuLink} href="/stories" onClick={scrollToTop}>
            Historie
          </a>
        </div>
      </div>

      {children}

      <div className={styles.layoutLegend}>
        <div className={styles.layoutSeeMore}>
          <h2>Zobacz galerie</h2>

          <div className={styles.layoutSeeGaleries}>
            <div className={styles.footerLink}>
              <i className={classnames("icon-bicycle")} />
              <a
                className={styles.layoutSeeMoreElement}
                href="/poland"
                onClick={scrollToTop}
              >
                Podroże po Polsce
              </a>
            </div>
            <div className={styles.footerLink}>
              <i className={classnames("icon-tree")} />
              <a
                href="/mountains"
                className={styles.layoutSeeMoreElement}
                onClick={scrollToTop}
              >
                Góry
              </a>
            </div>

            <div className={styles.footerLink}>
              <i className={classnames("icon-flight-1")} />
              <a
                className={styles.layoutSeeMoreElement}
                href="/travels"
                onClick={scrollToTop}
              >
                Podróże
              </a>
            </div>

            <div className={styles.footerLink}>
              <i className={classnames("icon-paw")} />
              <a
                className={styles.layoutSeeMoreElement}
                href="/pets"
                onClick={scrollToTop}
              >
                Pets
              </a>
            </div>
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

      <p className={styles.footerText}>Wera Chodanionek Fotografia | 2022</p>
    </div>
  )
}

export default Layout
