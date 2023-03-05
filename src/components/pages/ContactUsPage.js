import "./contact.css";
import map from "../../imgs/map.png";
function ContactUsPage() {
  return (
    <div className="contactUs-Page">
      <h2>About Us</h2>
      <p>
        At Little Lemon, we're passionate about bringing the bold and diverse
        flavors of Asia to your table. Our menu is a carefully crafted blend of
        traditional and modern Asian cuisine, inspired by the vibrant street
        food culture of the region. From sizzling stir-fries to comforting
        noodle dishes and fresh, vibrant salads, our dishes are made with the
        freshest ingredients and authentic seasonings. We believe that food is
        an experience, and we strive to create an atmosphere that reflects the
        warmth and hospitality of Asian culture. Our restaurant is a place where
        you can come to unwind, relax, and savor the tastes of Asia. Whether
        you're joining us for a quick lunch or a leisurely dinner with friends
        and family, we're committed to providing you with an unforgettable
        dining experience. We're proud to be part of the Mushroom Moutain
        community and to share our love of Asian cuisine with our customers.
        Thank you for choosing Little Lemon – we can't wait to welcome you!
      </p>
      <div className="contactUs-subPage">
        <div className="contactUs">
          <h3 className="address">Contact Us</h3>
          <div className="address">Phone:12345678910</div>
          <div className="address">Email:Bear@bearmail.com</div>
          <div className="address">Address: Bear Tree</div>
          <div className="address">Fluffy Mountain</div>
          <div className="address">Stone Town</div>
          <div className="address">12A 3B</div>
        </div>
        <div className="openhour">
          <h3>Opening Hours</h3>
          <div>Tuesday to Sunday</div>
          <div>12:00 to 21:00</div>
          <img src={map} alt="map" />
        </div>
        <div className="otherinfor">
          <h3>More</h3>
          <div>Nutrition & Allerges</div>
          <div>Community</div>
          <div>FAQs</div>
          <div>Cookie Policy</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
export default ContactUsPage;
