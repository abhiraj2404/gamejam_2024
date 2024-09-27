import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
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
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <div>
            <p className="font-bold text-inherit text-white hover:opacity-80 cursor-pointer">
              GAMEJAM 2024
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem className="font-semibold">
          <div
            onClick={scrollToTop}
            className="text-white hover:opacity-80 cursor-pointer"
          >
            Home
          </div>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link
            to="Events"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            onSetActive={handleSetActive}
          >
            <div className="text-white hover:opacity-80 cursor-pointer">
              Events
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link
            to="FAQs"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1200}
            onSetActive={handleSetActive}
          >
            <div className="text-white hover:opacity-80 cursor-pointer">
              FAQs
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {/* <Button as={Link} color="primary" href="/signin" variant="flat">
              Register Now
            </Button> */}
          <button className="batman text-white font-bold">
            <span className="text-white">REGISTER</span>
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <div
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-white hover:opacity-80 cursor-pointer"
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
