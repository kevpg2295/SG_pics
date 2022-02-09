import react from "react";
import "./imageList.css"
import ImageCard from "./ImageCard"



const ImageList = ({ images }) => {
  
  const imgList = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list"> {imgList}</div>;
};

export default ImageList;
