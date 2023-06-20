import React from 'react'
import IconBurger from 'assets/images/svg/burger.svg'
import IconLogo from 'assets/images/png/logo.png'
import { useState } from 'react'
import IconDropDown from 'assets/images/svg/arrowDown.svg'
import IconMore from 'assets/images/svg/more.svg'
import IconSearch from 'assets/images/svg/search.svg'
import IconUser from 'assets/images/png/avatar.png'
import IconBookmark from 'assets/images/svg/bookmark.svg'

const index = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__wrapper__left">
            <button onClick={() => setIsOpenMenu(prev => !prev)} className='header__wrapper__left__burger-menu'>
              <img src={IconBurger} alt="" />
            </button>
            <div className="header__wrapper__left__logo">
              <img src={IconLogo} alt="" className="header__wrapper__left__logo__item" />
            </div>
            <nav className="header__wrapper__left__nav navbar">
              <div className="header__wrapper__left__nav__logo">
                <img className='header__wrapper__left__nav__logo__itrm' src={IconLogo} alt="" />
              </div>
              <ul className='navbar__ul'>
                <li className='navbar__ul__item'>
                  <a className='navbar__ul__item__link'>Categories</a>
                  <img src={IconDropDown} alt="" className='navbar__ul__item__icon' />
                </li>
                <li className='navbar__ul__item'>
                  <a className='navbar__ul__item__link'>Pages</a>
                  <img src={IconDropDown} alt="" className='navbar__ul__item__icon' />
                </li>
                <li className='navbar__ul__item'>
                  <a className='navbar__ul__item__link'>Contact Us</a>
                </li>
                <li className='navbar__ul__item'>
                  <a className='navbar__ul__item__link'>About Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__wrapper__right">
            <div className="search">
              <div className="search-box">
                <span className='search-box-more'><img src={IconMore} alt="" /></span>
                <input placeholder='Search anything' type="text" className='search-box-input' />
                <span className='search-box-search'><img src={IconSearch} alt="" /></span>
              </div>
            </div>
            <div className="header-user">
              <div className="header-user-box">
                <div className="header-user-box-img">
                  <img src={IconUser} alt="" />
                </div>
                <h4 className="header-user-box-username">
                  Bekhzad
                  <img src={IconDropDown} alt="" className='header-user-box-username-icon' />
                </h4>
              </div>
              <button className='header-user-bookmark'>
                <img src={IconBookmark} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default index


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "assets/images/png/headerLogo.png";
// import IconMore from "assets/images/svg/more.svg";
// import IconBookmark from "assets/images/svg/bookmark.svg";
// import IconSearch from "assets/images/svg/search.svg";
// import IconBurger from "assets/images/svg/burger.svg";
// import IconClose from "assets/images/svg/close.svg";
// import IconArrowNext from "assets/images/svg/arrowNext.svg";
// import IconArrowDown from "assets/images/svg/arrowDown.svg";
// import UserNav from "assets/images/jpg/header-user.jpg";

// const index = () => {
//   const [burgerOpen, setBurgerOpen] = useState(false);
//   const [MenuItemOpen, setMenuItemOpen] = useState(1);
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header__wrapper">
//           <div className="header__left">
//             <div
//               onClick={() => setBurgerOpen((prev) => !prev)}
//               className={` header__burger ui__btn-header`}
//             >
//               <img src={IconBurger} alt="icon burger" />
//             </div>
//             <div className="header__logo">
//               <div className="logo__imgbox">
//                 <img src={Logo} alt="mega news logo" />
//               </div>
//             </div>
//             <div className={`header__menu ${burgerOpen ? "active" : ""}`}>
//               <nav>
//                 <div className="title-menu">
//                   <img className="in-navbarLogo" src={Logo} alt="logo" />
//                   <div
//                     className="close ui__btn-header"
//                     onClick={() => setBurgerOpen((prev) => !prev)}
//                   >
//                     <img src={IconClose} alt="" />
//                   </div>
//                 </div>
//                 <ul>
//                   <li
//                     onClick={() => setMenuItemOpen(1)}
//                     className={`menu-items  ${
//                       MenuItemOpen == 1 ? "active" : ""
//                     }`}
//                   >
//                     <span className={`border-nav`}></span>
//                     Categories
//                     <span>
//                       <img
//                         src={MenuItemOpen === 1 ? IconArrowNext : IconArrowDown}
//                         alt=""
//                       />
//                     </span>
//                   </li>
//                   <li
//                     className={`menu-items ${
//                       MenuItemOpen == 2 ? "active" : ""
//                     }`}
//                     onClick={() => setMenuItemOpen(2)}
//                   >
//                     <span className={`border-nav`}></span>
//                     Pages
//                     <span>
//                       <img
//                         onClick={() => setMenuItemOpen(false)}
//                         src={MenuItemOpen === 2 ? IconArrowNext : IconArrowDown}
//                         alt=""
//                       />
//                     </span>
//                   </li>
//                   <li className="page-items">Contact us</li>
//                   <li className="page-items">About us</li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//           <div className="header__right">
//             <div className="header__searchbox">
//               <span className="search-icon">
//                 <img src={IconMore} alt="moreIcon" />
//               </span>
//               <input type="text" placeholder="Search Anything" />
//               <span className="search-icon search">
//                 <img src={IconSearch} alt="searchIcon" />
//               </span>
//             </div>
//             <div className="header__user">
//               <div className="user-imgbox">
//                 <img src={UserNav} alt="user-admin" />
//               </div>
//               <h3 className="admin-name">Bekhzad</h3>
//               <img src={IconArrowDown} alt="icon down" />
//             </div>
//             <div className="header__bookMark ui__btn-header">
//               <img src={IconBookmark} alt="icon bookmark" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default index;
