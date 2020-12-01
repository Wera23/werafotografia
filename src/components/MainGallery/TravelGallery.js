import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import mainImagesPortugal from "./Images/MainImagesData";
import ImagesMacedonia from "./Images/ImagesMacedonia";

import ImagesDiff from "./Images/ImagesDiff";

import "./MainGalleryImages.css";
import ImagesTravel from "./Images/ImagesTravel";

const TravelGallery = () => {
  const gutter = "30px";

  return (
    <div className="galleryTravels">
      <div className="gallery">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[0].src} alt="" />
            <img src={mainImagesPortugal[1].src} alt="" />
            <img src={mainImagesPortugal[2].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[3].src} alt="" />
            <img src={mainImagesPortugal[4].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[6].src} alt="" />
            <img src={mainImagesPortugal[5].src} alt="" />
            <img src={mainImagesPortugal[7].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[8].src} alt="" />
            <img src={mainImagesPortugal[9].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[15].src} alt="" />
            {/* <img src={mainImagesPortugal[10].src} alt="" /> */}
            <img src={mainImagesPortugal[11].src} alt="" />
            <img src={mainImagesPortugal[12].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[19].src} alt="" />
            <img src={mainImagesPortugal[14].src} alt="" />
            {/* <img src={mainImagesPortugal[13].src} alt="" /> */}
          </Masonry>
        </ResponsiveMasonry>

        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[15].src} alt="" />
          <img src={mainImagesPortugal[16].src} alt="" />
          <img src={mainImagesPortugal[17].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={mainImagesPortugal[18].src} alt="" />
            <img src={mainImagesPortugal[20].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[20].src} alt="" />
          <img src={mainImagesPortugal[21].src} alt="" />
          <img src={mainImagesPortugal[22].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}

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
            <img src={ImagesMacedonia[0].src} alt="" />
            <img src={ImagesMacedonia[1].src} alt="" />
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

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesMacedonia[9].src} alt="" />
            <img src={ImagesMacedonia[10].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesDiff[4].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesTravel.Budapest[0].src} alt="" />
            <img src={ImagesTravel.Budapest[1].src} alt="" />
            <img src={ImagesTravel.Budapest[2].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesTravel.Budapest[3].src} alt="" />
            <img src={ImagesTravel.Budapest[4].src} alt="" />
            <img src={ImagesTravel.Chorwacja[0].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
          className="partOfgallery"
        >
          <Masonry gutter={gutter}>
            <img src={ImagesTravel.Chorwacja[1].src} alt="" />
            <img src={ImagesTravel.Chorwacja[2].src} alt="" />
            <img src={ImagesTravel.Chorwacja[3].src} alt="" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default TravelGallery;
