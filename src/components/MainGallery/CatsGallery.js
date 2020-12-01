import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesDiff from "./Images/ImagesDiff";
import ImagesCats from "./Images/ImagesCats";
import "./MainGalleryImages.css";

const CatsGallery = () => {
  const gutter = "30px";

  return (
    <div className="galleryCats">
      <div className="gallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[0].src} alt="" />
          <img src={ImagesCats[2].src} alt="" />
          <img src={ImagesCats[1].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[6].src} alt="" />
          <img src={ImagesCats[9].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesDiff[7].src} alt="" />
          <img src={ImagesCats[10].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[5].src} alt="" />
          <img src={ImagesCats[4].src} alt="" />
          <img src={ImagesCats[11].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[8].src} alt="" />
          <img src={ImagesCats[13].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 1 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[12].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default CatsGallery;
