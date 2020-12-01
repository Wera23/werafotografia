import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesDogsSleeding from "./Images/ImagesDogsSleeding";
import "./MainGalleryImages.css";

const DogsSleedingGallery = () => {
  const gutter = "30px";

  return (
    <div className="gallery">
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
    </div>
  );
};

export default DogsSleedingGallery;