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
        </NavbarBrand>

        
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
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <div className='flex gap-2 grid grid-flow-col gap-10 auto-cols-max mr-2' >

      <a
        href="https://instagram.com/JRcafe"
        target="_blank"
        rel="noopener noreferrer"
        id="InLink"
      >
        <Image className='' src='/Instagram-Logo-White-png.png' title='Instagram' alt='instagram' width={30} height={30} priority />
      </a>

      <a
        href="https://twitter.com/jrcafe"
        target="_blank"
        rel="noopener noreferrer"
        id="TwitterLink"
      >
        <Image className='' src='/white-twitter-logo-icon-8.png' title='Twitter Handle' alt='Twitter Handle' width={30} height={30} priority />
      </a>
    </div>
    </Navbar>
     </header>
    </section>
  );
}

function buttonClic() {
  throw new Error('Function not implemented.');
}
