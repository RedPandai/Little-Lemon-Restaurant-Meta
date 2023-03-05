import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../assets/SlidesData";

function Banner() {
  const [currentImage, setCurrtentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = useRef(null);

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextImage();
      }, 3000);
  });
  const length = imgUrl.length;

  if (!Array.isArray(imgUrl) || length <= 0) return null;
  const prevImage = () => {
    setCurrtentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };
  const nextImage = () => {
    setCurrtentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };
  const goToImage = (index) => {
    setCurrtentImage(index);
  };
  return (
    <section className="banner">
      <BiLeftArrow
        className="leftArrow"
        onClick={prevImage}
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
          clearTimeout(timeOut);
        }}
      />
      <BiRightArrow
        className="rightArrow"
        onClick={nextImage}
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
          clearTimeout(timeOut);
        }}
      />
      {imgUrl.map((image, index) => {
        return (
          <div
            className={
              index === currentImage ? "banner-item active" : "banner-item"
            }
            key={index}
            onMouseEnter={() => {
              setAutoPlay(false);
              clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
              setAutoPlay(true);
              clearTimeout(timeOut);
            }}
          >
            {index === currentImage && (
              <Link to="/menu">
                <img className="banner-img" src={image} alt="heroimage" />
              </Link>
            )}
          </div>
        );
      })}
      <div className="dots-container">
        {imgUrl.map((image, index) => {
          return (
            <div
              className={index === currentImage ? "dots" : "dots active"}
              key={index}
              onClick={() => goToImage(index)}
            >
              •
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Banner;
