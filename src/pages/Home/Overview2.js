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
import ImagesSituations from "../../components/MainGallery/Images/ImagesSituation"

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
        className={classnames(styles.overviewScreen, styles.overviewElmPadding)}
      >
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImg100H}
            src={ImagesMountains[25].src}
            alt=""
          ></img>
        </div>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImgSmall}
            src={ImagesMountains[19].src}
            alt=""
          />
        </div>
      </div>

      <div className={styles.overviewScreen}>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImg100H}
            src={ImagesSituations.Sails[18].src}
            alt=""
          ></img>
        </div>

        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImgSmall}
            src={ImagesSituations.Sails[17].src}
            alt=""
          />
        </div>
      </div>

      <div className={classnames(styles.overviewScreen, styles.overviewElmPadding)}>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImgSmall}
            src={ImagesMacedonia[0].src}
            alt=""
          />
        </div>

        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImg100H}
            src={ImagesPortugal[4].src}
            alt=""
          ></img>
        </div>
      </div>

      <div className={classnames(styles.overviewScreen, styles.overviewElmPadding)}>
        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImg100H}
            src={ImagesDiff[16].src}
            alt=""
          ></img>
        </div>

        <div className={styles.overviewElement}>
          <img
            className={styles.overviewImgSmall}
            src={ImagesSituations.Dogs[2].src}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Overview2
