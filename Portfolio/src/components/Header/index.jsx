import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  NavbarContainer,
  Navbar,
  NavLogo,
  NavItemsContainer,
  NavItems,
  HamburgerMenu,
  CloseIcon,
  MobNavContainer,
  MobNavItems,
  MobNavLink,
} from "./style";
import Wallet from "../wallet/wallet"; // Make sure Wallet is imported

const Header = ({ saveState }) => {
  const [showMobNav, setShowMobNav] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  AOS.init();

  // Function to toggle mobile nav visibility
  const onClickNavBtn = () => {
    if (showMobNav) {
      setIsClosing(true);
      setTimeout(() => {
        setShowMobNav(false);
        setIsClosing(false);
      }, 1400);
    } else {
      setShowMobNav(true);
    }
  };

  // Function to render the mobile nav items
  const onRenderMobileNav = () => (
    <MobNavContainer>
      {[
        "home",
        "about",
        "skills",
        "project",
        "experience",
        // "education",
        "contact",
      ].map((section, index) => (
        <MobNavItems
          key={section}
          color={index % 2 === 0 ? "#FD8B51" : "#912100"}
          className={!isClosing ? "slide-in" : "slide-out"}
          duration="0.4s"
          delay={`${0.2 * index}s`}
          closeDelay="0.4s"
          onClick={onClickNavBtn}
        >
          <MobNavLink href={`#${section}`}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </MobNavLink>
        </MobNavItems>
      ))}
    </MobNavContainer>
  );

  return (
    <>
      <NavbarContainer>
        <Navbar>
          <NavLogo>{"<PK/>"}</NavLogo>
          <NavItemsContainer>
            {[
              "Home",
              "About",
              "Skills",
              "Project",
              "Experience",
              // "Education",
              "Contact",
            ].map((section) => (
              <NavItems key={section} as="a" href={`#${section.toLowerCase()}`}>
                {section}
              </NavItems>
            ))}
            <div style={{ marginLeft: "20rem" }}>
              <Wallet saveState={saveState} /> {/* Pass saveState to Wallet */}
            </div>
          </NavItemsContainer>

          {showMobNav ? (
            <CloseIcon onClick={onClickNavBtn} />
          ) : (
            <HamburgerMenu onClick={onClickNavBtn} />
          )}
        </Navbar>
      </NavbarContainer>
      {showMobNav && onRenderMobileNav()}
    </>
  );
};

export default Header;
