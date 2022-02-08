import react from "react";
import "./imageList.css"
import ImageCard from "./ImageCard"



const ImageList = ({ images }) => {
  const imgList = images.map(({description, urls, id }) => {
    return <img alt={description} src={urls.regular} key={id} />;
  });

  return <div className="image-list"> {imgList}</div>;
};

export default ImageList;
