//imported from NextUI https://nextui.org/docs/components/navbar#controlled-menu
"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Logo from './Logo';



export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
      { label: "Home", href: "/" },
      { label: "Hiro Project Page", href: "/hiro-project-page" },
      { label: "About", href: "/about-me" },
      { label: "Resume", href: "https://www.google.com/" },
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

      <NavbarContent className="md:hidden pr-3 text-white" justify="center">
            <NavbarBrand>
            <Logo />
            </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:hidden text-white" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>


      <NavbarContent className="hidden md:flex gap-4 font-piersansmedium " justify="end">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-white focus:outline focus:orange" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" aria-current="page" href="#works">
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/about-me">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="https://www.google.com/">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu className="bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="pt-4">
            <Link
              className="w-full text-white"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}