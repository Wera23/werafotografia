import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

import styles from "./Projects.module.scss"

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/mountains">
          <div
            className={classnames(
              styles.projectElImage,
              styles.projectElImageMountains
            )}
          ></div>
          <h3>Góry</h3>
        </Link>
      </div>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/travels">
          <div
            className={classnames(
              styles.projectElImage,
              styles.projectElImageTravels
            )}
          ></div>
          <h3>Podróże</h3>
        </Link>
      </div>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/poland">
          <div
            className={classnames(
              styles.projectElImage,
              styles.projectElImagePoland
            )}
          ></div>
          <h3>Polska</h3>
        </Link>
      </div>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/cats">
          <div
            className={classnames(
              styles.projectElImage,
              styles.projectElImageCats
            )}
          ></div>
          <h3>Koty</h3>
        </Link>
      </div>

      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/situations">
          <div
            className={classnames(
              styles.projectElImage,
              styles.projectElImageSituations
            )}
          ></div>
          <h3>Sytuacje</h3>
        </Link>
      </div>

      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/themes">
          <div
            className={classnames(
              styles.projectElImage,
            )}
          ></div>
          <h3>Wypatrzone</h3>
        </Link>
      </div>
    </div>
  )
}

export default Projects
