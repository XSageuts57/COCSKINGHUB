import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";

const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    const detectDimension = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  
    useEffect(() => {
      window.addEventListener("resize", detectDimension);
      windowDimension.width > 800 && setNavBarOpen(false);
      return () => {
        window.removeEventListener("resize", detectDimension);
      };
    }, [windowDimension]);
  
    const links = [
      { id: 1, link: "Home" },
      { id: 2, link: "Services" },
      { id: 3, link: "HowWeWork" },
      { id: 4, link: "Benefits" },
    ];
  
    const scrollPosition = useScrollPosition();
  
    return (
        <div
          className={
            navBarOpen
              ? styles.navOpen
              : scrollPosition > 0
              ? styles.navOnScroll
              : styles.navBar
          }
        >
          {!navBarOpen && <p className={styles.logo}>COOKINGHUB | Cocinando el éxito digital</p>}
          {!navBarOpen && windowDimension.width < 800 ? (
            <AiOutlineMenu
              color="#f1f1f1"
              onClick={() => setNavBarOpen(!navBarOpen)}
              size={25}
            />
          ) : (
            windowDimension.width < 800 && (
              <AiOutlineClose
                onClick={() => setNavBarOpen(!navBarOpen)}
                color="#f1f1f1"
                size={25}
              />
            )
          )}
          {navBarOpen && (
            <ul className={styles.linksContainer}>
              {links.map(({ id, link }) => (
                <div>
                  <Link
                    key={id}
                    onClick={() => setNavBarOpen(false)}
                    to={link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                  >
                    {link === "HowWeWork" ? "How we work" : link}
                  </Link>
                  <div className={styles.border}></div>
                </div>
              ))}
            </ul>
          )}
          {windowDimension.width > 800 && (
            <ul className={styles.linksContainer}>
              {links.map(({ link, id }) => (
                <div>
                  <Link
                    onClick={() => setNavBarOpen(false)}
                    to={link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                  >
                    {link === "HowWeWork" ? "How we work" : link}
                  </Link>
                  <div className={styles.border}></div>
                </div>
              ))}
              <Link
                onClick={() => setNavBarOpen(false)}
                to="Contact"
                smooth
                duration={500}
                className={`${styles.contactLink} btn btn-success`}
              >
                Contact
              </Link>
            </ul>
          )}
        </div>
      );
    };

export default Navbar;