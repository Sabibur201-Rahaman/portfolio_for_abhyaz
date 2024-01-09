import React, { useEffect, useRef } from "react";

function Header() {
  const elm = useRef();
  const handleScroll = () => {
    const scrolledvalue = window.scrollY;
    if (scrolledvalue >= 600) {
      elm.current.classList.add("nav-bg");
      document.querySelector(".scrollTopIcon").classList.add("visible");
    } else {
      elm.current.classList.remove("nav-bg");
      document.querySelector(".scrollTopIcon").classList.remove("visible");
    }
    // console.log(window.scrollY)
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" ref={elm}>
      <div className="container ms">
        <a className="navbar-brand" href="#">
          <img src="img/main-logo.png" alt="main-logo" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#banner-part">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-part">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#video-part">
                VIDEO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-part">
                EXPERTISE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                TEAMS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                WORKS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team-two">
                {" "}
                PEOPLE SAY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
