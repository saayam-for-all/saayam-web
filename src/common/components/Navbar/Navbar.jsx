import "./NavBar.css";
import React from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import languages from "../../i18n/languagesData";
import LOGO from "../../../assets/logo.svg";

const handleLogin = () => {
    window.location.href = "https://saayamforall.auth.us-east-1.amazoncognito.com/login?client_id=5e48q521poh26763dt4rvmi23m&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fwww.saayamforall.org%2Fcallback";
  };

const Navbar = () => {
	const { i18n, t } = useTranslation();
	return (
		<header>
			<div className='px-10 navbar navbar-sm navbar-gradient-bg rounded-3xl'>
				<div className='navbar-start'>
					<Link to='/' className='text-3xl font-semibold'>
						<img src={LOGO} alt='logo' className='w-14 h-14' />
					</Link>
				</div>

				<div className='gap-10 navbar-end'>
					<div className='dropdown'>
						<div
							tabIndex={0}
							className='font-semibold cursor-pointer'
						>
							{t("about")}
						</div>
						<ul
							tabIndex={0}
							className='menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a>
									<NavLink to='/directors'>
										{t("directors")}
									</NavLink>
								</a>
							</li>
							<li>
								<NavLink to='/how-we-operate'>
									{t("how_we_operate")}
								</NavLink>
							</li>
							<li>
								<a>
									<NavLink to='/contact'>
										{t("contact")}
									</NavLink>
								</a>
							</li>
							<li>
								<a>
									<NavLink to='/mission-and-vision'>
										{t("mission")}
									</NavLink>
								</a>
							</li>
							<li>
								<a>
									<NavLink to='/mission-and-vision'>
										{t("vision")}
									</NavLink>
								</a>
							</li>
						</ul>
					</div>
					<NavLink to='/donate' className='font-semibold'>
						{t("donate")}
					</NavLink>
					<button onClick={handleLogin} to = 'login' className="btn btn-sm">
						{t("login")}
					</button>
					
					{/* <select
						className='p-1 rounded-lg outline-none'
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
