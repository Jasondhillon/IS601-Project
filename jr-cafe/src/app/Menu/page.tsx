"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Inter, Roboto, Outfit, Bad_Script } from 'next/font/google'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
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

import bg from './../../../../jr-cafe/public/bg2.webp';

export default function Menu() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (

    <section className='Section-Setting mb-5' id='MenuSection'>
      <main className="border-white" style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'contain',
        //width: '75vw',
        //height: '50vh',
      }}>
        <div className='border-2 border-neutral-300' style={{backgroundColor: 'black', marginTop: "0%", marginLeft:"10%", marginRight:"10%", marginBottom:"5%"}}>
          <h2 className='flex justify-center ' style={{ color: '#eee', fontFamily: 'Bad_Script' }} >Menu</h2>

          <Accordion className='text-white' defaultExpandedKeys={["1"]} fullWidth={true} id="accordian">
            <AccordionItem key="1" className='' aria-label="Expresso Beverages" title="Expresso Beverages">

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
              <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ...">
                <div className="col-span-2"></div>
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div className="col-span-2 ">Iced Coffee.......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">Iced Macchiato......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">Iced Frappuccino.....................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Hot Chocolate" title="Hot Chocolate">
              <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ...">
                <div className="col-span-2"></div>
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div className="col-span-2 ">Hot Chocolate.......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">Mexican Hot Chocolate......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">Italian Hot Chocolate.....................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
              </div>
            </AccordionItem>

            <AccordionItem key="4" aria-label="Tea" title="Tea">
              <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ...">
                <div className="col-span-2"></div>
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div className="col-span-2 ">Earl Grey.......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">English Breakfast......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">Chai.....................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
              </div>
            </AccordionItem>

            <AccordionItem key="5" aria-label="Seasonal" title="Seasonal">
              <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ...">
                <div className="col-span-2"></div>
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div className="col-span-2 ">White Pepperment Mocha.......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">Gingerbread Latte......................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
                <div className="col-span-2">Cinnamon Chai.....................................</div>
                <div>2.95</div>
                <div>3.95</div>
                <div>4.95</div>
              </div>
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