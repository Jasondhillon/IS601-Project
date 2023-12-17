'use client';

import Link from 'next/link';
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Inter, Roboto, Outfit } from 'next/font/google'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button, Card, CardHeader, CardBody, Image, Avatar, User, CardFooter
} from "@nextui-org/react";
import bg from '../../../public/michal-parzuchowski-ItaV89TNkks-unsplash.jpg';
import img1 from "../../../public/roland-denes-24CcFvbRsBE-unsplash.jpeg"

export default function About() {
    var isFollowed: boolean = false;

    function setIsFollowed(follow: Boolean) {

    };

    return (
        <section className='Section-Setting mb-5' id='gallerySection' style={{zIndex:10000}}>
            <main className="" style={{
                //backgroundImage: `url(${bg.src})`,
            }}>
                <div className='flex justify-center '>
                    <h2 style={{ color: '#eee' }} >Gallery</h2>
                </div>
                
                <div className='flex justify-center mb-5'>
                    <h6 style={{ color: '#eee' }} >Join our community by tagging your photos with #JRCafe to see them feature here in wall of fame</h6>
                </div>

                <div className='flex justify-center'>

                    <div className="grid grid-flow-col gap-10 auto-cols-max">
                        <div>
                            <div className="grid grid-flow-row mt-12 gap-10 auto-rows-max">
                                <div className={'image-container'}>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>John Smith</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                            className={'image'}
                                                src="/roland-denes-24CcFvbRsBE-unsplash.jpg"
                                                alt="Comp Logo"
                                                width={250}
                                                height={200}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>Davin Russ</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/tyler-nix-lZyJ2f34190-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}

                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>Cody Goodwin</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/nathan-dumlao-YwhzwOA3RHY-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-flow-row  gap-10 auto-rows-max">
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>Jessica Haywood</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/brent-gorwin-vhQUnmnOLys-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>Lenox Flint</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/katie-drazdauskaite-bN35lDCllFM-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}

                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>Kathleen Rigby</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/nathan-dumlao-71u2fOofI-U-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-flow-row gap-10 mt-12 auto-rows-max">
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>NNima Ige</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/nathan-dumlao-eksqjXTLpak-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>Cynthia Russel</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/nathan-dumlao-V6WUpAOmioc-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}

                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="max-w-[250px] " >
                                        <CardHeader className="justify-between " >
                                            <div className="flex gap-1 w-full bg-zinc-900">
                                                <div className="h-6 mx-2 flex items-center bg-gradient-to-r from-cyan-500 to-green-500" style={{ borderRadius: '20px', overflow: 'hidden', width: '20px', height: '20px' }}>
                                                    <Avatar isBordered radius="sm" className='max-h-0' size="sm" src="" />
                                                </div>
                                                <span>Laurence Carmella</span>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-0 py-0 text-small text-default-400">
                                            <Image
                                                src="/nathan-dumlao-jRPxc8VGqco-unsplash.jpg"
                                                alt="Comp Logo"
                                                className=""
                                                width={250}
                                                height={200}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </section>
    );
}