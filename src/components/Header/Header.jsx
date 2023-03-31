import React from "react";
import "./Header.css";
import user from "../../images/user.jpg";

const Header = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <h3 className="text-4xl font-bold">BlogoSphere</h3>
        <div className="menu-items">
          <p>Home</p>
          <p>Blogs</p>
          <p>Login</p>
          <div>
            <img className="w-12 rounded-full" src={user} alt="" />
          </div>
        </div>
          </nav>
        <hr  className="mt-5"/>
    </div>
  );
};

export default Header;
