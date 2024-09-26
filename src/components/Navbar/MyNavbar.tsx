import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import "./MyNavbar.css"

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">GAMEJAM 2024</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem className="font-semibold">
          <Link href="/" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link
            href="/"
           
          >
            Events
          </Link>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link
            href="/"
          >
            FAQs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        {/* <Button as={Link} color="primary" href="/signin" variant="flat">
              Register Now
            </Button> */}
            <button className='batman text-white font-bold' >
                <span className='text-white'>REGISTER</span>
            </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default MyNavbar;