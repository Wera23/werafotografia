import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/mountains">
          <div className={styles.projectElImage, styles.projectElImageMountains}></div>
          <h3>Góry</h3>
        </Link>
      </div>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/travels">
          <div className={styles.projectElImage, styles.projectElImageTravels}></div>
          <h3>Podróże</h3>
        </Link>
      </div>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/poland">
          <div className={styles.projectElImage, styles.projectElImagePoland}></div>
          <h3>Polska</h3>
        </Link>
      </div>
      <div className={styles.projectEl}>
        <Link className={styles.projectElLink} to="/cats">
          <div className={styles.projectElImage, styles.projectElImageCats}></div>
          <h3>Koty</h3>
        </Link>
      </div>
    </div>
  )
}

export default Projects
