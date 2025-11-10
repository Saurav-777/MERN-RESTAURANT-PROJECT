import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { currentUser, signOut } = useAuth();

  return (
    <>
      <nav>
        {/* Removed the logo completely */}
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <ScrollLink
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>
          <div className="authLinks">
            {currentUser ? (
              <>
                <span className="userEmail">{currentUser?.email}</span>
                <button className="menuBtn" onClick={() => signOut()}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <RouterLink to="/login">
                  <button className="menuBtn">Login</button>
                </RouterLink>
                <RouterLink to="/signup">
                  <button className="menuBtn">Sign Up</button>
                </RouterLink>
              </>
            )}
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
