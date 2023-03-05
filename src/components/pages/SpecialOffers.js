import { specialImages } from "../assets/SlidesData";
import { Link } from "react-router-dom";
function SpecialOffers() {
  const renderedImages = specialImages.map((image) => {
    return (
      <div key={image}>
        <Link to="/menu">
          <img
            className="menuimage"
            src={require(`../../imgs/${image}.jpg`)}
            alt="Meal name"
          />
        </Link>
        <h4>{image}</h4>
      </div>
    );
  });
  return <div className="menu-container">{renderedImages}</div>;
}

export default SpecialOffers;
