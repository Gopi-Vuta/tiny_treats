import NavBar from "./NavBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

const Header = () => {
  const [showHeaderBg, setShowHeaderBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsOpen(true);
  };
  const handleMenuClose = () => {
    setIsOpen(false);
  };
  const handleScroll = () => {
    window.scrollY > 80 ? setShowHeaderBg(true) : setShowHeaderBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);
  return (
    <div
      className={`w-full md:px-12 ${
        showHeaderBg && "backdrop-blur-lg"
      } fixed top-0  md:flex justify-between items-center z-20 ${
        isOpen && "bg-white"
      }`}
    >
      {isOpen ? (
        <MdClose
          className="md:hidden text-brown-shade-2 text-3xl absolute top-8 mx-7"
          onClick={handleMenuClose}
          type="button"
        />
      ) : (
        <GiHamburgerMenu
          className="md:hidden text-brown-shade-2 text-3xl absolute top-8 mx-7"
          onClick={handleMenuOpen}
          type="button"
        />
      )}
      <h1 className="lg:text-left text-center font-[900] font-milea text-3xl text-brown-shade-2 py-6">
        Tinhearts
      </h1>

      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
