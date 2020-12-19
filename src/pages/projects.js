import React from "react"
import classnames from "classnames"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./projects.module.scss"

const Projects = () => {
  return (
    <>
      <SEO title={"Projekty"} />
      <Layout>
        <div className={styles.projects}>
          <div className={styles.projectEl}>
            <a className={styles.projectElLink} href="/mountains">
              <div
                className={classnames(
                  styles.projectElImage,
                  styles.projectElImageMountains
                )}
              ></div>
              <h3>Góry</h3>
            </a>
          </div>
          <div className={styles.projectEl}>
            <a className={styles.projectElLink} href="/travels">
              <div
                className={classnames(
                  styles.projectElImage,
                  styles.projectElImageTravels
                )}
              ></div>
              <h3>Podróże</h3>
            </a>
          </div>
          <div className={styles.projectEl}>
            <a className={styles.projectElLink} href="/poland">
              <div
                className={classnames(
                  styles.projectElImage,
                  styles.projectElImagePoland
                )}
              ></div>
              <h3>Polska</h3>
            </a>
          </div>
          <div className={styles.projectEl}>
            <a className={styles.projectElLink} href="/cats">
              <div
                className={classnames(
                  styles.projectElImage,
                  styles.projectElImageCats
                )}
              ></div>
              <h3>Koty</h3>
            </a>
          </div>

          <div className={styles.projectEl}>
            <a className={styles.projectElLink} href="/situations">
              <div
                className={classnames(
                  styles.projectElImage,
                  styles.projectElImageSituations
                )}
              ></div>
              <h3>Sytuacje</h3>
            </a>
          </div>

          <div className={styles.projectEl}>
            <a className={styles.projectElLink} href="/themes">
              <div className={classnames(styles.projectElImage)}></div>
              <h3>Wypatrzone</h3>
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Projects
