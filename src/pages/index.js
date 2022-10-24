import React, { useEffect } from "react"
import classnames from "classnames"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./projects.module.scss"

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia"} />
      <Layout>
        <div className={styles.projects}>
          <div className={styles.projectRow}>
            <div className={styles.projectEl}>
              <a className={styles.projectElLink} href="/mountains">
                <div
                  className={classnames(
                    styles.projectElImage,
                    styles.projectElImageMountains
                  )}
                >
                  {" "}
                  <h3>Góry</h3>
                </div>
              </a>
            </div>
            <div className={styles.projectEl}>
              <a className={styles.projectElLink} href="/travels">
                <div
                  className={classnames(
                    styles.projectElImage,
                    styles.projectElImageTravels
                  )}
                >
                  <h3>Podróże</h3>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.projectRow}>
            <div className={styles.projectEl}>
              <a className={styles.projectElLink} href="/poland">
                <div
                  className={classnames(
                    styles.projectElImage,
                    styles.projectElImagePoland
                  )}
                >
                  <h3>Polska</h3>
                </div>
              </a>
            </div>
            {/* <div className={styles.projectEl}>
              <a className={styles.projectElLink} href="/cats">
                <div
                  className={classnames(
                    styles.projectElImage,
                    styles.projectElImageCats
                  )}
                ></div>
                <h3>Koty</h3>
              </a>
            </div> */}

            <div className={styles.projectEl}>
              <a className={styles.projectElLink} href="/pets">
                <div
                  className={classnames(
                    styles.projectElImage,
                    styles.projectElImagePets
                  )}
                >
                  {" "}
                  <h3>Pets</h3>
                </div>
              </a>
            </div>
          </div>

          {/* <div className={styles.projectEl}>
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
          </div>*/}
        </div>
      </Layout>
    </>
  )
}

export default Projects
