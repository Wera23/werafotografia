import React from "react";

import CatsGallery from "./CatsGallery";
import DogsSleedingGallery from "./DogsSleedingGallery";
import MacedoniaGallery from "./MacedoniaGallery";
import "./MainGalleryImages.css";
import MazuryGallery from "./MazuryGallery";
import MountainsGallery from "./MountainsGallery";
import PlacesGallery from "./PlacesGallery";
import SailingGallery from "./SailingGallery";
import TravelGallery from "./TravelGallery";

const Gallery = () => {
  return (
    <div className="mainGallery">    
      <MountainsGallery />
      <PlacesGallery />
      <TravelGallery />
      <CatsGallery />
      <MacedoniaGallery />
      <MazuryGallery />
      <DogsSleedingGallery />
      <SailingGallery />   
    </div>
  );
};

export default Gallery;
