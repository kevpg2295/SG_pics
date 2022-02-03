import react from "react";

const ImageList = ({ images }) => {
  const imgList = images.map((image) => {
    return <img src={image.urls.regular} key={image.id} />;
  });

  return <div> {imgList}</div>;
};

export default ImageList;
