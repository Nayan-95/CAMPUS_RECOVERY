import { useState } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector((state) => state.user);
  // console.log(currentUser);

  return (
    <nav>
      <div className="left">
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>
            <span className="logo-1">Campus</span>Recover
          </span>
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/list">Items</NavLink>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            {currentUser.image.length ? (<img src={currentUser.image} alt="" />):
            (<img src="/noavatar.jpg" alt="" />)}
            {/* <img src={currentUser.image || "/noavatar.jpg"} alt="" /> */}
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <NavLink to="/login">Sign in</NavLink>
            <NavLink to="/register" className="register">
              Sign up
            </NavLink>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/list">Items</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
