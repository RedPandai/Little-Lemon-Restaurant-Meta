import MobileNav from "./mobileNav";
import NormalNav from "./normalNav";

function Navbar() {
  return (
    <div className="Navbar">
      <img className="logo" src="logo.png" alt="logo" />
      <MobileNav />
      <NormalNav />
    </div>
  );
}

export default Navbar;
