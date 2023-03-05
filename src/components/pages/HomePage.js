import Banner from "./Banner";
import "./Homepage.css";
import SpecialOffers from "./SpecialOffers";

function HomePage() {
  return (
    <div className="homepage">
      <Banner />
      <SpecialOffers />

      <div className="openhour">
        <h3>Address</h3>
        <div>Bear Tree</div>
        <div>Fluffy Mountain</div>
        <div>Stone Town</div>
        <div>12A 3B</div>
        <h3>Opening Hours</h3>
        <div>Tuesday to Sunday</div>
        <div>12:00 to 21:00</div>
      </div>
    </div>
  );
}

export default HomePage;
