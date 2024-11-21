//imported from NextUI https://nextui.org/docs/components/navbar#controlled-menu
"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Logo from './Logo';



export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "",
    "Home",
    "Works",
    "About Me",
    "Resume",
  ];

  return (
    <Navbar
      isBordered
      position="static"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className="custom-navbar bg-transparent" 
    >

      <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
            <Logo />
            </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-4 font-piersansmedium" justify="end">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="../App.jsx">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" aria-current="page">
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu className="bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}