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
import ImagesPolska from "../../components/MainGallery/Images/ImagesPolska"

const OverviewMobile = () => {
  return (
    <div className={styles.overviewFull}>
      <img src={ImagesPlaces[3].src} className={styles.imageMobile} alt="" />
      <img src={ImagesDiff[11].src} className={styles.imageMobile} alt="" />
      <img src={ImagesCats[1].src} className={styles.imageMobile} alt="" />
      <img src={ImagesCats[15].src} className={styles.imageMobile} alt="" />
      <img src={ImagesPortugal[2].src} className={styles.imageMobile} alt="" />
      <img src={ImagesMacedonia[0].src} className={styles.imageMobile} alt="" />
      <img src={ImagesPortugal[4].src} className={styles.imageMobile} alt="" />
      <img src={ImagesPortugal[20].src} className={styles.imageMobile} alt="" />
      <img src={ImagesMacedonia[1].src} className={styles.imageMobile} alt="" />
      <img src={ImagesMacedonia[6].src} className={styles.imageMobile} alt="" />
      <img
        src={ImagesMountains[47].src}
        className={styles.imageMobile}
        alt=""
      />
      <img
        src={ImagesMountains[19].src}
        className={styles.imageMobile}
        alt=""
      />
      <img
        src={ImagesMountains[25].src}
        className={styles.imageMobile}
        alt=""
      />
      <img src={ImagesMountains[1].src} className={styles.imageMobile} alt="" />
      <img
        src={ImagesMountains[31].src}
        className={styles.imageMobile}
        alt=""
      />
      <img src={ImagesMountains[3].src} className={styles.imageMobile} alt="" />

      <img
        src={ImagesSituations.Sails[15].src}
        className={styles.imageMobile}
        alt=""
      />
      <img
        src={ImagesSituations.Sails[19].src}
        className={styles.imageMobile}
        alt=""
      />
      <img
        src={ImagesSituations.Sails[13].src}
        className={styles.imageMobile}
        alt=""
      />

      <img
        src={ImagesSituations.Dogs[3].src}
        className={styles.imageMobile}
        alt=""
      />
      <img
        src={ImagesSituations.Dogs[0].src}
        className={styles.imageMobile}
        alt=""
      />
      <img
        src={ImagesSituations.Teatr[3].src}
        className={styles.imageMobile}
        alt=""
      />

      <img src={ImagesDiff[5].src} className={styles.imageMobile} alt="" />
      <img src={ImagesDiff[3].src} className={styles.imageMobile} alt="" />
      <img
        src={ImagesPolska.Nature[7].src}
        className={styles.imageMobile}
        alt=""
      />

      <img src={ImagesMazury[2].src} className={styles.imageMobile} alt="" />
      {/* <img src={ImagesPlaces[4].src} className={styles.imageMobile} /> */}

      <img src={ImagesCats[9].src} className={styles.imageMobile} alt="" />
      <img src={ImagesCats[12].src} className={styles.imageMobile} alt="" />
    </div>
  )
}

export default OverviewMobile
