import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark  ">
          <div className="navbar nav navbar-brand text-white">
            Wellcome to E-commrece Store
          </div>
          <div className="container-fluid justify-content-end  ">
            <ul className="navbar-nav text-white">
              <li className="nav-item active ">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/About">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <div className="navbar-brand">
          <span className="navbar-brand">Shopping Cart</span>
        </div>
        <div className="container-fluid justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
               <CgProfile/> Login
              </Link>
            </li>
             
            <li className="nav-item text-dark">
              <Link className="nav-link" to="/favroite">
                <MdFavoriteBorder/>  Favorite
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
              <BsCartCheckFill />  
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="Container ">
        <nav className=" nav navbar-nav navbar navbar-expand-sm navbar-light bg-light">
          <ul className="navbar-nav navbar-inverse nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/ShopAll">
                Shop All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Computer">
                Computer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tablet">
                Tablet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Drones">
                Drones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cemra">
                Cemra
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mobile">
                Mobile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/audio">
                Audio devices
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv">
                T.V
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/homecinema">
                Home Cinema
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wearable">
                wearable tech
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watch">
                Watch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sale">
                Sale
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
