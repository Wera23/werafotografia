import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesMazury from "./Images/ImagesMazury";
import "./MainGalleryImages.css";

const MazuryGallery = () => {
  const gutter = "30px";

  return (
    <div className="partOfgallery">
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
    </div>
  );
};

export default MazuryGallery;
