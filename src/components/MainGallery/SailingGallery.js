import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesSailing from "./Images/ImagesSailing";
import "./MainGalleryImages.css";

const SailingGallery = () => {
  const gutter = "30px";

  return (
    <div className="gallery">
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

      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesSailing[8].src} alt="" />
          <img src={ImagesSailing[9].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}
    </div>
  );
};

export default SailingGallery;