'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Inter, Roboto, Outfit } from 'next/font/google'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button
  } from "@nextui-org/react";
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

// Define the Header component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Home",
        "Menu",
        "Gallery",
        "Newsletter"
        // "Analytics",
        // "Help & Feedback",
        // "Log Out",
      ];
    const icons = {
        // chevron: <ChevronDown fill="currentColor" size={16} />,
        // scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        // lock: <Lock className="text-success" fill="currentColor" size={30} />,
        // activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        // flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        // server: <Server className="text-success" fill="currentColor" size={30} />,
        // user: <TagUser className="text-danger" fill="currentColor" size={30} />,
      };
  

  return (   
    <section className='flex-container row text-white sticky top-1 z-50 style={{ height: "5%" }}' id='headersection'>
      <header className="header-width">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <a href="/">
      
        <Image
              src="/jr-cafe-high-resolution-logo-white-transparent.png"
              alt="Comp Logo"
              className="mr-2"
              width={100}
              height={24}

              priority
            />
            
              {/* <p className="font-bold text-inherit">JR Cafe</p> */}
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" aria-current="page" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/Menu" >
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Gallery">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Newsletter">
            Newsletter
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              Size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
     </header>
    </section>
  );
}

function buttonClic() {
  throw new Error('Function not implemented.');
}
