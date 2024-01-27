import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { IoLocationOutline } from "react-icons/io5";
import { CgPlayButtonO } from "react-icons/cg";

const videos = [
  {
    id: 1,
    img:
      "https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2platinum1.jpg",
  },
  {
    id: 2,
    img:
      "https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2platinum1.jpg",
  },
  {
    id: 3,
    img:
      "https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2platinum3.jpg",
  },
  {
    id: 4,
    img:
      "https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2platinum4.jpg",
  },
  {
    id: 5,
    img:
      "https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2platinum5.jpg",
  },
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % videos.length);
    }, 1500);

    return () => clearInterval(interval); 

  }, []); 

  return (
    <>
      <div className="Parent_Carousel">
        <div className="Subparent_Carpousel">
          <div className="left_Child">
            <h1>PLATINUM THEATRE</h1>
            <button className="btn2">  <IoLocationOutline style={{color:" #4b0e91e4"}}/> Hitec City</button>
            <p className="p-1">₹2799 for 6 or less people (Rs 400 per extra person) </p>
            <p className="p-1">
              Mega 150 inch enhanced 4k Video Powerful 100W Dolby atoms sound
              system (In-wall speakers). Ideal for family and friends
            </p>
            <p className="p-1">Food & Beverages can be ordered at the theater.</p>
          
            
            <div className="btn3"><CgPlayButtonO style={{fontSize:"30px", display:"inline-block"}}/>Sample decoration video</div>
           
            
          </div>
          <div className="right_Child">
            <img
              src={videos[currentImage].img}
              alt={`carousel-image-${currentImage}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
