import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesMazury from "./Images/ImagesMazury";
import ImagesDogsSleeding from "./Images/ImagesDogsSleeding";
import "./MainGalleryImages.css";
import ImagesSailing from "./Images/ImagesSailing";

const ActivitiesGallery = () => {
  const gutter = "30px";

  return (
    <div className="gallery">
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
          <img src={ImagesMazury[8].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesDogsSleeding[0].src} alt="" />
          <img src={ImagesDogsSleeding[1].src} alt="" />
          <img src={ImagesDogsSleeding[2].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesDogsSleeding[3].src} alt="" />
          <img src={ImagesDogsSleeding[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesDogsSleeding[5].src} alt="" />
          <img src={ImagesDogsSleeding[6].src} alt="" />
          <img src={ImagesDogsSleeding[7].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesSailing[0].src} alt="" />
          <img src={ImagesSailing[1].src} alt="" />
          <img src={ImagesSailing[2].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesSailing[3].src} alt="" />
          <img src={ImagesSailing[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesSailing[5].src} alt="" />
          <img src={ImagesSailing[6].src} alt="" />
          <img src={ImagesSailing[7].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ActivitiesGallery;
