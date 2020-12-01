import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import styles from "./Overview.module.scss"

import ImagesDiff from "../../components/MainGallery/Images/ImagesDiff"
import ImagesCats from "../../components/MainGallery/Images/ImagesCats"
import ImagesPlaces from "../../components/MainGallery/Images/ImagesPlaces"
import ImagesMountains from "../../components/MainGallery/Images/ImagesMountains"
import ImagesPortugal from "../../components/MainGallery/Images/MainImagesData";
import ImagesMacedonia from "../../components/MainGallery/Images/ImagesMacedonia";
import ImagesMazury from "../../components/MainGallery/Images/ImagesMazury";


const Overview = () => {
  const gutter = "30px"

  return (
    <div className={styles.overview}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[4].src} alt="" />
          <img src={ImagesDiff[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesDiff[5].src} alt="" />
          <img src={ImagesPlaces[3].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[1].src} alt="" />
          <img src={ImagesDiff[11].src} alt="" />
          <img src={ImagesCats[2].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesPortugal[3].src} alt="" />
          <img src={ImagesPortugal[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[0].src} alt="" />
          <img src={ImagesMountains[1].src} alt="" />
          <img src={ImagesPlaces[13].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMacedonia[0].src} alt="" />
          <img src={ImagesMacedonia[1].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesPortugal[9].src} alt="" />
          <img src={ImagesMacedonia[2].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

            
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[3].src} alt="" />
          <img src={ImagesMountains[9].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className={styles.partOfGallery}
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[25].src} alt="" />
          <img src={ImagesMountains[24].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

  

    </div>
  )
}

export default Overview
