import { useEffect, useState } from "react";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import "./MyNavbar.css";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const navbarClass = isScrolled
    ? "bg-black/80 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSetActive = (to: any) => {
    console.log(to);
  };

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/",
    },
    {
      name: "FAQs",
      link: "/",
    },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-20 px-8 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden text-white" />
        <NavbarBrand>
          <div className="cursor-pointer">
            <p className="text-2xl font-bold tracking-widest text-white hover:opacity-80 transition-opacity duration-300">
              GAMEJAM <span className="text-purple-400">2025</span>
              <span className="block text-xs mt-0.5">
                <span className="bg-gradient-to-r from-red-500 via-purple-400 to-red-500 bg-clip-text text-transparent animate-pulse">
                  POWERED BY
                </span>
                <span className="ml-1 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent font-extrabold">
                  RED BULL
                </span>
              </span>
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-16" justify="center">
        <NavbarItem>
          <div
            onClick={scrollToTop}
            className="text-white text-lg font-semibold hover:text-purple-400 transition-colors duration-300 cursor-pointer px-4 py-2"
          >
            Home
          </div>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="Events"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            onSetActive={handleSetActive}
          >
            <div className="text-white text-lg font-semibold hover:text-purple-400 transition-colors duration-300 cursor-pointer px-4 py-2">
              Events
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="FAQs"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1200}
            onSetActive={handleSetActive}
          >
            <div className="text-white text-lg font-semibold hover:text-purple-400 transition-colors duration-300 cursor-pointer px-4 py-2">
              FAQs
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <button className="batman text-white font-bold flex items-center justify-center">
            <span className="text-white tracking-wider text-lg">REGISTER</span>
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black/95 backdrop-blur-md pt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <div
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer text-xl font-semibold py-4"
            >
              {item.name}
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default MyNavbar;
