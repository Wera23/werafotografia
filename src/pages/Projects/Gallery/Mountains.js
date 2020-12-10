import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import ImagesMountains from "../../../components/MainGallery/Images/ImagesMountains"
import ImagesDiff from "../../../components/MainGallery/Images/ImagesDiff"
import ImagesPlaces from "../../../components/MainGallery/Images/ImagesPlaces"

import styles from "./Galleries.module.scss"

const MountainsGallery = () => {
  const gutter = "30px"

  return (
    <div className={styles.galleryMountains}>
      <div className={styles.gallery}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[3].src} alt="" />
            <img src={ImagesMountains[29].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[0].src} alt="" />
            <img src={ImagesMountains[4].src} alt="" />
            <img src={ImagesMountains[1].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[8].src} alt="" />
            <img src={ImagesMountains[9].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[10].src} alt="" />
            <img src={ImagesMountains[13].src} alt="" />
            <img
              className={styles.photoMobileHidden}
              src={ImagesMountains[12].src}
              alt=""
            />
          </Masonry>
        </ResponsiveMasonry>

        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}>
        <Masonry gutter="20px">
          <img src={ImagesMountains[13].src} alt="" />
          <img src={ImagesMountains[14].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[25].src} alt="" />
            <img
              className={styles.photoMobileHidden}
              src={ImagesMountains[24].src}
              alt=""
            />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesDiff[0].src} alt="" />
            <img src={ImagesDiff[1].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[17].src} alt="" />
            <img
              className={styles.photoMobileHidden}
              src={ImagesMountains[16].src}
              alt=""
            />
            <img src={ImagesMountains[15].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[47].src} alt="" />
            <img src={ImagesMountains[6].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img
              className={styles.photoMobileHidden}
              src={ImagesMountains[7].src}
              alt=""
            />
            <img src={ImagesMountains[19].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[20].src} alt="" />
            {/* <img src={ImagesMountains[21].src} alt="" /> */}
            <img src={ImagesDiff[10].src} alt="" />
            <img
              className={styles.photoMobileHidden}
              src={ImagesMountains[21].src}
              alt=""
            />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesPlaces[7].src} alt="" />
            <img src={ImagesPlaces[8].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesPlaces[9].src} alt="" />
            <img
              className={styles.photoMobileHidden}
              src={ImagesPlaces[10].src}
              alt=""
            />
            <img
              className={styles.photoMobileHidden}
              src={ImagesPlaces[11].src}
              alt=""
            />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[32].src} alt="" />
            <img src={ImagesPlaces[3].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[26].src} alt="" />
            <img src={ImagesMountains[28].src} alt="" />
            <img src={ImagesMountains[31].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[33].src} alt="" />
            <img src={ImagesMountains[34].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[35].src} alt="" />
            <img src={ImagesMountains[37].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesDiff[6].src} alt="" />
            <img src={ImagesMountains[36].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[42].src} alt="" />
            <img src={ImagesMountains[41].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>
        {/* 
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[11].src} alt="" />
            <img src={ImagesMountains[12].src} alt="" />
          </Masonry>
        </ResponsiveMasonry> */}

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[43].src} alt="" />
            <img src={ImagesMountains[44].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        {/* <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMountains[45].src} alt="" />
            <img src={ImagesMountains[46].src} alt="" />
          </Masonry>
        </ResponsiveMasonry> */}
      </div>
    </div>
  )
}

export default MountainsGallery
