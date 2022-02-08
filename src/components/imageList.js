import react from "react";

const ImageList = ({ images }) => {
  const imgList = images.map(({description, urls, id }) => {
    return <img alt={description} src={urls.regular} key={id} />;
  });

  return <div> {imgList}</div>;
};

export default ImageList;
