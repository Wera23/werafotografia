import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import classnames from "classnames"

import styles from "./Overview.module.scss"
import { Parallax } from "react-scroll-parallax"

import ImagesDiff from "../../components/MainGallery/Images/ImagesDiff"
import ImagesCats from "../../components/MainGallery/Images/ImagesCats"
import ImagesPlaces from "../../components/MainGallery/Images/ImagesPlaces"
import ImagesMountains from "../../components/MainGallery/Images/ImagesMountains"
import ImagesPortugal from "../../components/MainGallery/Images/MainImagesData"
import ImagesMacedonia from "../../components/MainGallery/Images/ImagesMacedonia"
import ImagesMazury from "../../components/MainGallery/Images/ImagesMazury"

const Overview2 = () => {
  return (
    <div className={styles.overviewFull}>
      <div className={styles.overviewScreen}>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImg100H}
            src={ImagesDiff[11].src}
            alt=""
          ></img>
        </div>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImgSmall}
            src={ImagesPlaces[3].src}
            alt=""
          />
        </div>
      </div>

      <div className={styles.overviewScreen}>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImgSmall}
            src={ImagesCats[6].src}
            alt=""
          />
        </div>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImg100H}
            src={ImagesCats[1].src}
            alt=""
          ></img>
        </div>
      </div>

      <div
        className={classnames(styles.overviewScreen, styles.overviewScreenNorm)}
      >
        <img
          className={styles.overviewImgNormal}
          src={ImagesMountains[25].src}
          alt=""
        />

        <div
          className={classnames(styles.overviewElementNorm, styles.overviewEnd)}
        >
          <img
            className={styles.overviewImgSmaller}
            src={ImagesMountains[24].src}
            alt=""
          ></img>
        </div>
      </div>

      <div
        className={classnames(styles.overviewScreen, styles.overviewScreenNorm)}
      >
        <img
          className={styles.overviewImgNormal}
          src={ImagesMountains[4].src}
          alt=""
        />

        <div
          className={classnames(styles.overviewElementNorm, styles.overviewEnd)}
        >
          <img
            className={styles.overviewImgSmaller}
            src={ImagesMountains[9].src}
            alt=""
          ></img>
        </div>
      </div>



      

      <div
        className={classnames(styles.overviewScreen, styles.overviewScreenNorm)}
      >
        <div className={styles.overviewElementNorm}>
          <img
            className={styles.overviewImgSmaller}
            src={ImagesMountains[1].src}
            alt=""
          ></img>
        </div>

        <img
          className={styles.overviewImgNormal}
          src={ImagesPlaces[8].src}
          alt=""
        />
      </div>
    </div>
  )
}

export default Overview2
