"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import Logo from "./Logo";
import { MyLink } from "./LinkDesign";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/#works" },
    { label: "About", href: "/about-me" },
    { label: "Resume", href: "/resume.pdf" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <Navbar
    isBordered
    position="static"
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    isBlurred={false}
    className="custom-navbar bg-transparent"
    role="navigation"
    aria-label="Main navigation"
  >
      
      <NavbarContent className="md:hidden pr-3 text-white" justify="center">
        <NavbarBrand>
          <Logo aria-label="Go to homepage" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:hidden text-white" justify="end">
        <NavbarMenuToggle
          className="focus:outline-orange"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen} 
          aria-controls="navbar-menu"
        />
      </NavbarContent>

     
      <NavbarContent
        className="hidden md:flex gap-4 font-piersansmedium"
        justify="end"
      >
        <NavbarBrand>
          <Logo aria-label="Go to homepage"/>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.label}>
            <MyLink href={item.href} aria-label={item.label === "Resume" ? "Open Resume" : `Go to ${item.label}`}
            >{item.label}</MyLink>
            
          </NavbarItem>
        ))}
      </NavbarContent>

      
      {isMenuOpen && (
        <NavbarMenu
          className="bg-black pt-8"
          id="navbar-menu"
          aria-hidden={!isMenuOpen} 
        >
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.label} className="pt-4">
              <MyLink
                className="w-full text-white focus:outline focus:outline-orange"
                href={item.href}
                size="lg"
                onClick={handleMenuItemClick} 
                aria-label={item.label === "Resume" ? "Open Resume" : `Go to ${item.label}`}
              >
                {item.label}
              </MyLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
