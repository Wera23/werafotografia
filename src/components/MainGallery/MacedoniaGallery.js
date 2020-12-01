import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesMacedonia from "./Images/ImagesMacedonia";

import ImagesDiff from "./Images/ImagesDiff";
import "./MainGalleryImages.css";

const MacedoniaGallery = () => {
  const gutter = "30px";

  return (
    <div className="partOfgallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMacedonia[0].src} alt="" />
          <img src={ImagesMacedonia[1].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMacedonia[2].src} alt="" />
          <img src={ImagesMacedonia[3].src} alt="" />
          <img src={ImagesMacedonia[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMacedonia[5].src} alt="" />
          <img src={ImagesMacedonia[6].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesMacedonia[7].src} alt="" />
          <img src={ImagesMacedonia[8].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesDiff[2].src} alt="" />
          <img src={ImagesDiff[3].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesDiff[5].src} alt="" />
          <img src={ImagesDiff[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesDiff[6].src} alt="" />
          <img src={ImagesDiff[7].src} alt="" />
          <img src={ImagesDiff[8].src} alt="" />

        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MacedoniaGallery;
