import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import ImagesMountains from "../../../components/MainGallery/Images/ImagesMountains"
import ImagesDiff from "../../../components/MainGallery/Images/ImagesDiff"
import ImagesPolska from "../../../components/MainGallery/Images/ImagesPolska"

import mainImagesPortugal from "../../../components/MainGallery/Images/MainImagesData"

import styles from "./Galleries.module.scss"

const Themes = () => {
  const gutter = "30px"

  return (
    <div className={styles.galleryMountains}>
      <div className={styles.gallery}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[4].src} alt="" />
            <img src={ImagesPolska.Nature[0].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesDiff[6].src} alt="" />
            <img src={ImagesMountains[38].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Themes