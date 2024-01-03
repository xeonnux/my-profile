"use client";
import { Navbar as Nav } from "flowbite-react";
import { Container } from "postcss";
import ThemeToggler from "./themeToggler";

function Navbar() {
  return (
    <>
      <Nav fluid={true} rounded={false}>
        <Nav.Brand href="/">
          <span className="self-center ml-3 text-xl font-semibold text-gray-500 whitespace-nowrap dark:text-white">
            Fabrice Madre
          </span>
        </Nav.Brand>
        <Nav.Toggle />
        <Nav.Collapse>
          <Nav.Link href="/blog" active={true}>
            <span className="self-center mr-3 text-xl font-semibold text-gray-500 whitespace-nowrap dark:text-white">
              My blog
            </span>
          </Nav.Link>
          <Nav.Link href="/projects">
            <span className="self-center mr-3 text-xl font-semibold text-gray-500 whitespace-nowrap dark:text-white">
              Projects
            </span>
          </Nav.Link>
        </Nav.Collapse>
      </Nav>
      <div className="flex items-center justify-end px-3 py-1">
        <ThemeToggler />
      </div>
    </>
  );
}

export default Navbar;
