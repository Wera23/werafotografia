import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesPlaces from "./Images/ImagesPlaces";
import "./MainGalleryImages.css";

const PlacesGallery = () => {
    
    const gutter = "30px";

    return (
    <div className="gallery">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesPlaces[0].src} alt="" />
          <img src={ImagesPlaces[1].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesPlaces[2].src} alt="" />
          <img src={ImagesPlaces[3].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesPlaces[4].src} alt="" />
          <img src={ImagesPlaces[5].src} alt="" />
          <img src={ImagesPlaces[6].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesPlaces[7].src} alt="" />
          <img src={ImagesPlaces[8].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesPlaces[9].src} alt="" />
          <img src={ImagesPlaces[10].src} alt="" />
          <img src={ImagesPlaces[11].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesPlaces[12].src} alt="" />
          <img src={ImagesPlaces[13].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default PlacesGallery;
