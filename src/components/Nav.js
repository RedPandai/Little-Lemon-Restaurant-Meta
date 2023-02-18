import "./Nav.css";
function Nav() {
  return (
    <div className="Navbar">
      <img className="logo" src="logo.png" />
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservation</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Account</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
