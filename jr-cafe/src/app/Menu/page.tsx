"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Inter, Roboto, Outfit, Bad_Script } from 'next/font/google'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button, Accordion, AccordionItem
  } from "@nextui-org/react";

  export default function Menu() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return(
        
        <section className='Section-Setting mb-5' id='MenuSection'>
            <main className="border-white">
                <h2 className='flex justify-center '  style={{color: '#eee', fontFamily:'Bad_Script'}} >Menu</h2>
<div className='border-2 border-neutral-300'>
                <Accordion defaultExpandedKeys={["1"]} fullWidth={true} id="accordian">
      <AccordionItem key="1" aria-label="Expresso Beverages" title="Expresso Beverages">
        
      <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ...">
<div className="col-span-2"></div>
<div>Small</div>
<div>Medium</div>
<div>Large</div>
<div className="col-span-2 ">Cafe Latte.......................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Cuppuccino......................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Caffe Mocha.....................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">White Chocolate Mocha................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Caramel Macchiato.....................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Cafe Americano...................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
</div>
 
      </AccordionItem>
      <AccordionItem key="2" aria-label="Iced Beverages" title="Iced Beverages">
        
      </AccordionItem>
      <AccordionItem key="3" aria-label="Hot Chocolate" title="Hot Chocolate">
    
      </AccordionItem>

      <AccordionItem key="4" aria-label="Tea" title="Tea">
        
      </AccordionItem>

      <AccordionItem key="5" aria-label="Seasonal" title="Seasonal">
        
      </AccordionItem>

      <AccordionItem key="6" aria-label="Bakery" title="Bakery">
      <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ...">
<div className="col-span-2"></div>
<div>Small</div>
<div>Medium</div>
<div>Large</div>
<div className="col-span-2 ">Croissant.......................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Bagel......................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Cookie.....................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
</div>
      </AccordionItem>

      <AccordionItem key="7" aria-label="Soft Drinks" title="Soft Drinks">
        
      <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ...">
<div className="col-span-2"></div>
<div>Small</div>
<div>Medium</div>
<div>Large</div>
<div className="col-span-2 ">Coke.......................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Sprite......................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Fanta.....................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Dr. Pepper................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
<div className="col-span-2">Root Beer.....................................</div>
<div>2.95</div>
<div>3.95</div>
<div>4.95</div>
</div>
      </AccordionItem>
    </Accordion>
    </div>
           </main>
        </section>
    );
}