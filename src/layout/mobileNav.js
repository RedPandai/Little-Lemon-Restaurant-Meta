import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import Nav from "./Nav";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenu className="hamburger" size="40px" onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CgClose className="hamburger" size="40px" onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <div className="mobile-Navbar">
      {open ? closeIcon : hamburgerIcon}
      {open && <Nav isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
}

export default MobileNav;
