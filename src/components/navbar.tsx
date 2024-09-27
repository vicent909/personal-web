"use client";

import React, { useEffect, useState } from "react";
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
import { AcmeLogo } from "./AcmeLogo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const changeScrolled = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener only on the client-side after the component has mounted
    window.addEventListener("scroll", changeScrolled);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeScrolled);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={scrolled === true ? "navbar scrolled" : "navbar"}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p
            className={
              scrolled
                ? "font-bold text-inherit font-mono text-lg text-white"
                : "font-bold text-inherit font-mono text-lg"
            }
          >
            Vincent.
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 !justify-center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={
              scrolled
                ? "navbar-link-scrolled font-mono py-1"
                : "navbar-link font-mono py-1"
            }
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/#projects"
            className={
              scrolled
                ? "navbar-link-scrolled font-mono py-1"
                : "navbar-link font-mono py-1"
            }
          >
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={
              scrolled
                ? "navbar-link-scrolled font-mono py-1"
                : "navbar-link font-mono py-1"
            }
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={
              scrolled
                ? "navbar-link-scrolled font-mono py-1"
                : "navbar-link font-mono py-1"
            }
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          <Link className="cursor-pointer" href="https://github.com/vicent909">
            <img
              src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
              height={38}
              width={38}
              className="rounded-lg"
            />
          </Link>
          <Link
            className="cursor-pointer"
            href="https://www.linkedin.com/in/vincent-vincent-b81058141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              height={38}
              width={38}
              className="rounded-lg"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col">
          <Link
            color="foreground"
            href="#"
            className={"navbar-link font-mono py-1"}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            color="foreground"
            href="/#projects"
            className={"navbar-link font-mono py-1"}
            onClick={() => setIsMenuOpen(false)}
          >
            Works
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}