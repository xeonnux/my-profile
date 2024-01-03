"use client";
import Link from "next/link";
import ThemeToggler from "./themeToggler";
import { Navbar as Nav } from "flowbite-react";

function Navbar() {
  return (
    <Nav fluid={true} rounded={true}>
      <Nav.Brand href="/">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Fabrice Madre
        </span>
      </Nav.Brand>
      <Nav.Toggle />
      <Nav.Collapse>
        <Nav.Link href="/blog" active={true}>
          My blog
        </Nav.Link>
        <Nav.Link>
          <ThemeToggler />
        </Nav.Link>
      </Nav.Collapse>
    </Nav>
  );
}

export default Navbar;
