import React, { useState } from "react";
import "../components/header.scss";
import { FaFacebook, FaInstagram, FaShoppingBag } from "react-icons/fa";
import { BsPerson, BsYoutube } from "react-icons/bs";
import { BiHeart, BiSearch } from "react-icons/bi";
import TopDrawer from "../components/pages/Drawer.jsx";
import Model from "../components/pages/Model.jsx"; // ✅ import your modal

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="mainheader">
        <div className="top">
          <a href="">NEW IN</a>
          <a href="">FREE UK DELIVERY</a>
          <a href="">BULK BUY OPTIONS AVAILABLE</a>
        </div>

        <div className="middle">
          <div className="icons">
            <FaInstagram />
            <FaFacebook />
            <BsYoutube />
          </div>
          <div>
            <img
              src="https://evengreener.com/cdn/shop/files/EG_FULL_COLOUR_B_302x.png?v=1749039981"
              alt="logo"
            />
          </div>
          <div className="icons">
            <BiSearch />
            <span>search</span>
            <BiHeart />

            {/* ✅ Person icon opens modal */}
            <BsPerson onClick={openModal} style={{ cursor: "pointer" }} />

            <FaShoppingBag />
          </div>
        </div>

        <div className="bottomone">
          <ul>
            <li onClick={toggleDrawer} style={{ cursor: "pointer" }}>
              GARDEN COMPOSTING
            </li>
            <li onClick={toggleDrawer} style={{ cursor: "pointer" }}>
              FOOD WASTE COMPOSTING
            </li>
            <li onClick={toggleDrawer} style={{ cursor: "pointer" }}>
              WATER SAVING
            </li>
            <li onClick={toggleDrawer} style={{ cursor: "pointer" }}>
              GARDENING
            </li>
            <li onClick={toggleDrawer} style={{ cursor: "pointer" }}>
              BRANDS
            </li>
            <li onClick={toggleDrawer} style={{ cursor: "pointer" }}>
              BLOGS
            </li>
          </ul>
        </div>

        <div className="bottomtwo">
          <span>20+ Years Trading Online</span>
        </div>
      </div>

      {/* ✅ Drawer Component */}
      <TopDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* ✅ Your Model Component */}
      <Model open={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
