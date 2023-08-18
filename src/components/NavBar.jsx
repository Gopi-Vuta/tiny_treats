import { Link } from "react-router-dom";
const NavBar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Track",
      path: "/track",
    },
    {
      id: 5,
      name: "About",
      path: "/about",
    },
    {
      id: 6,
      name: "Change Name",
      path: "/change-name",
    },
    {
      id: 7,
      name: "Login",
      path: "/login",
    },
  ];
  const handleMenuButtonClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <nav>
      <ul
        className={`md:flex md:opacity-100 justify-center items-center gap-7 md:shadow-2xl 
        md:bg-transparent md:border-brown-shade-2/10 md:border-2 md:px-8 md:rounded-full md:static absolute 
        ${
          isOpen ? "bg-white w-full h-screen relative left-0 top-0" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            id={item.id}
            to={item.path}
            className="block text-center font-montserrat uppercase text-brown-shade-1 hover:font-semibold md:my-2 my-7"
            onClick={handleMenuButtonClick}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
