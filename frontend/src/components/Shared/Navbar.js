import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import Login from "../Auth/Login";
import Chatbot from "./Chatbot";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // State to control Login modal visibility

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLoginClick = () => setLoginOpen(true); // Open login modal
  const handleCloseLogin = () => setLoginOpen(false); // Close login modal

  return (
    <>
      <nav className="bg-gray-100 shadow-md">
        {/* Top Layer */}
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center bg-black text-white font-bold text-2xl py-2 px-4 rounded-md">
            <Link to="/">MindHaven</Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center border border-gray-400 rounded-lg px-4 py-2 w-1/3">
            <SearchIcon className="text-black" />
            <input
              type="text"
              placeholder="Search here"
              className="ml-2 w-full text-gray-600 placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Desktop Notification and Login */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Notification */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-black">
              <NotificationsNoneIcon fontSize="medium" />
              <span className="text-lg text-black font-medium">Notification</span>
            </div>

            {/* Login */}
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-black"
              onClick={handleLoginClick} // Open login modal
            >
              <PersonOutlineIcon fontSize="medium" />
              <span className="text-lg text-black">Login</span>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </div>
        </div>

        {/* Bottom Layer (Desktop Links) */}
        <div className="hidden lg:flex justify-center gap-8 mt-4 text-lg text-gray-700">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/assessment" className="hover:text-blue-600">
            Assessment Test
          </Link>
          <Link to="/news" className="hover:text-blue-600">
            News
          </Link>
          <Link to="/tasks" className="hover:text-blue-600">
            Task Creation
          </Link>
          <Link to="/mood" className="hover:text-blue-600">
            Mood Tracker
          </Link>
          <Link to="/sos" className="hover:text-blue-600">
            SOS
          </Link>
          <Link to={Chatbot} className="hover:text-blue-600">
            Chat Support
          </Link>
          <Link to="/video-recommendation" className="hover:text-blue-600">
            Video Recommendation
          </Link>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-gray-100 text-gray-700 rounded-lg p-4 shadow-md">
            <div className="flex flex-col gap-4">
              {/* Search */}
              <div className="relative">
                <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2">
                  <SearchIcon className="text-black" />
                  <input
                    type="text"
                    placeholder="Search here"
                    className="ml-2 w-full text-gray-600 placeholder-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Notification */}
              <div className="flex items-center gap-2 cursor-pointer hover:text-black">
                <NotificationsNoneIcon fontSize="medium" />
                <span>Notification</span>
              </div>

              {/* Login */}
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-black"
                onClick={handleLoginClick} // Open login modal
              >
                <PersonOutlineIcon fontSize="medium" />
                <span>Login</span>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 text-lg">
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
                <Link to="/assessment" className="hover:text-blue-600">
                  Assessment Test
                </Link>
                <Link to="/news" className="hover:text-blue-600">
                  News
                </Link>
                <Link to="/tasks" className="hover:text-blue-600">
                  Task Creation
                </Link>
                <Link to="/mood" className="hover:text-blue-600">
                  Mood Tracker
                </Link>
                <Link to="/sos" className="hover:text-blue-600">
                  SOS
                </Link>
                <Link to={Chatbot} className="hover:text-blue-600">
                  Chat Support
                </Link>
                <Link to="/video-recommendation" className="hover:text-blue-600">
                  Video Recommendation
                </Link>

              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <Login open={loginOpen} onClose={handleCloseLogin} />
    </>
  );
};

export default Navbar;