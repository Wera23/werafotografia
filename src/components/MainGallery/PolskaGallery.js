import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesPlaces from "./Images/ImagesPlaces";
import ImagesPolska from "./Images/ImagesPolska";
import ImagesDiff from "./Images/ImagesDiff";
import ImagesMazury from "./Images/ImagesMazury";
import ImagesSea from "./Images/ImagesSea";

import "./MainGalleryImages.css";

const PolskaGallery = () => {
  const gutter = "30px";

  return (
    <div className="galleryPoland">
      <div className="gallery">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesPolska.Nature[0].src} alt="" />
            <img src={ImagesPolska.Nature[1].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesDiff[3].src} alt="" />
            <img src={ImagesDiff[5].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMazury[2].src} alt="" />
            <img src={ImagesMazury[3].src} alt="" />
            <img src={ImagesMazury[4].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMazury[0].src} alt="" />
            <img src={ImagesMazury[1].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMazury[5].src} alt="" />
            <img src={ImagesMazury[6].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMazury[7].src} alt="" />
            <img src={ImagesMazury[11].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMazury[8].src} alt="" />
            <img src={ImagesMazury[9].src} alt="" />
            <img src={ImagesMazury[10].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesPlaces[0].src} alt="" />
            <img src={ImagesPlaces[1].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesPlaces[2].src} alt="" />
            <img src={ImagesPlaces[3].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesPlaces[4].src} alt="" />
            <img src={ImagesPlaces[5].src} alt="" />
            <img src={ImagesPlaces[6].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesPolska.Nature[3].src} alt="" />
            <img src={ImagesPolska.Nature[4].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesSea[0].src} alt="" />
            <img src={ImagesSea[1].src} alt="" />
            <img src={ImagesSea[2].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default PolskaGallery;
