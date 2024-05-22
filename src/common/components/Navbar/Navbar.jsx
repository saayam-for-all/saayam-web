import "./NavBar.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import languages from "../../i18n/languagesData";
import LOGO from "../../../assets/logo.svg";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <header>
      <div className="navbar navbar-sm navbar-gradient-bg rounded-3xl px-10">
        <div className="navbar-start">
          <Link to="/" className="text-3xl font-semibold">
            <img src={LOGO} alt="logo" className="w-14 h-14" />
          </Link>
        </div>

        <div className="navbar-end gap-10">
          <div className="dropdown">
            <div
              tabIndex={0}
              className={`cursor-pointer font-semibold ${
                isDropdownOpen ? "active" : ""
              }`}
              onClick={handleDropdownClick}
            >
              {t("about")}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <a onClick={handleLinkClick}>
                  <NavLink to="/directors">{t("directors")}</NavLink>
                </a>
              </li>
              <li>
                <NavLink to="/how-we-operate" onClick={handleLinkClick}>
                  {t("how_we_operate")}
                </NavLink>
              </li>
              <li>
                <a onClick={handleLinkClick}>
                  <NavLink to="/contact">{t("contact")}</NavLink>
                </a>
              </li>
              <li>
                <a onClick={handleLinkClick}>
                  <NavLink to="/mission-and-vision">{t("mission")}</NavLink>
                </a>
              </li>
              <li>
                <a onClick={handleLinkClick}>
                  <NavLink to="/mission-and-vision">{t("vision")}</NavLink>
                </a>
              </li>
            </ul>
          </div>
          <NavLink to="/donate" className="font-semibold" onClick={handleLinkClick}>
            {t("donate")}
          </NavLink>
          <button className="btn btn-sm">{t("login")}</button>
          {/* <select
						className='p-1 outline-none rounded-lg'
						onChange={(e) => i18n.changeLanguage(e.target.value)}
					>
						{languages?.map((language) => (
							<option key={language.code} value={language.code}>
								{language.name}
							</option>
						))}
					</select> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;