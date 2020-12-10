import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

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

const Overview = () => {
  return (
    <div className={styles.overviewFull}>
      <img src={ImagesPlaces[3].src} className={styles.imageMobile} />
      <img src={ImagesDiff[11].src} className={styles.imageMobile} />
      <img src={ImagesMountains[47].src} className={styles.imageMobile} />
      <img src={ImagesMountains[19].src} className={styles.imageMobile} />

      <img src={ImagesSituations.Dogs[3].src} className={styles.imageMobile} />
      <img src={ImagesSituations.Teatr[3].src} className={styles.imageMobile} />
      <img
        src={ImagesSituations.Sails[15].src}
        className={styles.imageMobile}
      />
      <img src={ImagesMountains[3].src} className={styles.imageMobile} />
      <img src={ImagesMountains[25].src} className={styles.imageMobile} />

      <img src={ImagesPortugal[4].src} className={styles.imageMobile} />
      <img src={ImagesPortugal[3].src} className={styles.imageMobile} />
      <img src={ImagesMacedonia[0].src} className={styles.imageMobile} />
      <img src={ImagesDiff[4].src} className={styles.imageMobile} />
    </div>
  )
}

export default Overview
