import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import ImagesSituations from "../../../components/MainGallery/Images/ImagesSituation"

import styles from "./Galleries.module.scss"

const SituationsGallery = () => {
  const gutter = "30px"

  return (
    <div className={styles.galleryCats}>
      <div className={styles.gallery}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Dogs[0].src} alt="" />
            <img src={ImagesSituations.Dogs[1].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Dogs[3].src} alt="" />
            <img src={ImagesSituations.Dogs[2].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Teatr[0].src} alt="" />
            <img src={ImagesSituations.Teatr[1].src} alt="" />
            <img src={ImagesSituations.Teatr[2].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Teatr[3].src} alt="" />
            <img src={ImagesSituations.Teatr[4].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Sails[11].src} alt="" />
            <img src={ImagesSituations.Sails[15].src} alt="" />
            <img src={ImagesSituations.Sails[13].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Sails[12].src} alt="" />
            <img src={ImagesSituations.Sails[9].src} alt="" />
            <img src={ImagesSituations.Sails[10].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        {/* <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Sails[14].src} alt="" />
            <img src={ImagesSituations.Sails[8].src} alt="" />
            <img src={ImagesSituations.Sails[16].src} alt="" />
          </Masonry>
        </ResponsiveMasonry> */}

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Sails[0].src} alt="" />
            <img src={ImagesSituations.Sails[1].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Sails[5].src} alt="" />
            <img src={ImagesSituations.Sails[6].src} alt="" />
            <img src={ImagesSituations.Sails[7].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        {/* <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSituations.Sails[2].src} alt="" />
            <img src={ImagesSituations.Sails[3].src} alt="" />
            <img src={ImagesSituations.Sails[4].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

       */}
      </div>
    </div>
  )
}

export default SituationsGallery
