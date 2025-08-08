import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container justify-content-center">
        <ul className="navbar-nav gap-4">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/quotes">Quotes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/location">Location</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contactus">Contactus</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
