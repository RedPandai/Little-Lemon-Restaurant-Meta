import { useState } from "react";
import "./menu.css";
function MenuPage({ images }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const renderedImages = images.map((image) => {
    return (
      <div key={image}>
        {!isImageLoaded && <div>Loading...</div>}
        <img
          className="menuimage"
          src={require(`../../imgs/${image}.jpg`)}
          alt="Meal name"
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
        <h4>{image}</h4>
        <div>$20</div>
      </div>
    );
  });
  return <div className="menu-container">{renderedImages}</div>;
}

export default MenuPage;
