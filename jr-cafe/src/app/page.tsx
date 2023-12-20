'use client';
import { Input } from "@nextui-org/react";
import Image from 'next/image';
import { useState } from "react";
import bg1 from '../../public/rr-abrot-pNIgH0y3upM-unsplash.jpg';
import bg from '../../public/bg1.webp';

import Subscribe from "./Subscribe/page";
export default function Home() {
  const [checked, setChecked] = useState(false);

  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });
    if (response.ok) {
      setSuccess(true);
    }
    const subscribeDialog = document.getElementById("my_modal_11") as any;
    subscribeDialog?.close();

    setChecked(true);
  };

  const openModal = () => {
    const subscribeDialog = document.getElementById("my_modal_11") as any;
    subscribeDialog?.showModal();
  };
  return (
    <section id="herosection" >

      <main className="flex justify-center items-center" style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'contain',
        //width: '75vw',
        height: '50vh',
      }} >


        <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">

          <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex grid place-items-stretch place-content-stretch gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/jr-cafe-high-resolution-logo-white-transparent.png"
                alt="Comp Logo"
                className=""
                width={450}
                height={400}
                priority
              />
            </a>
          </div>
        </div>
      </main>

      <section id="subsection">
        <div style={{ width: "50%", marginLeft: "25%" }} className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">

          <span className='text-center' style={{ fontSize: "xxx-large" }}>A Café That Stays up as late you do...
          </span>
          <p className="group rounded-lg border border-transparent " style={{ fontSize: "400" }}>J&R Café, Established in 2023, is designed around the students, starting off as humble college students ourselves, We tackled our fair share of late night cram sessions before our tests. But, as the nights went on our energy dwindled, and big chains
            like Starbucks and Dunkin` arent open when we need them. We Know we werent the first to face the situation, but hopefully we can be the last. Proudly presenting J&R Café open all night long.
          </p>
        </div>
        <div style={{ width: "100%", marginLeft: "15%" }} className="mb-32 grid text-center flex justify-between lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <div className="grid grid-flow-row mt-12 gap-10 flex justify-end auto-rows-max">
            <div className="flex items-center" style={{}}>
              <p className='text-center' style={{ fontSize: "xx-large" }}>Sign up to receive a free coffee!</p>
            </div>

            <div className="" style={{ alignItems: "center", marginTop: "-8%" }}>
              <p className='text-center'>Need a little pick me up? Join our mailing list and receive one free coffee on the house *</p>
            </div>

            <div className="" style={{ marginTop: '-10%' }}>
              <Subscribe/>
              {/* <Input
                isClearable
                type="email"
                label="Email"
                variant="bordered"
                placeholder="Enter your email"
                defaultValue=""
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                labelPlacement="outside"
              /> */}
            </div>
          </div>
          <div className="grid grid-flow-col gap-10 auto-cols-max flex justify-center">

            <div className="flex" style={{ borderRadius: '300px', overflow: 'hidden', width: '300px', height: '300px' }}>

              <Image
                className='HomepageLogo'
                //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/rizky-subagja-1k7TnX5GAww-unsplash.jpg"
                alt="Subscribe Logo"

                width={400}
                height={400}
                style={{ objectFit: "cover" }}
                priority

              />
            </div>
          </div>
        </div>

        {/* <div className=" mt-1">
              <div className="flex mb-1">
                <svg
                  width="26px"
                  height="24px"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                      fill="#080341"
                    ></path>{" "}
                  </g>
                </svg>
                <span>Signup for Newsletter</span>
              </div>
              
              <div className="flex gap-4 items-center">
                
                  <Input
      type="email"
      label="Email"
      value={email}
      defaultValue="junior@nextui.org"
      labelPlacement={"inside"}
      description="We'll never share your email with anyone else."
      className="max-w-xs"
      onChange={(e) => setEmail(e.target.value)}
    />
          

                <button
                  className="btn btn-primary bg-[#4C199F]"
                  onClick={openModal}
                >
                  Subscribe
                </button>
                <dialog id="my_modal_11" className="modal">
                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Subscribe</h3>
                    <div className="modal-action">
                      <div className="form-control">
                        <div className="flex items-center ">
                          <span className=" mr-2 mb-6">Email:</span>
                          <input
                            type="text"
                            placeholder="Your Email Address"
                            className="input w-80 max-w-xs ml-6 mb-6 disabled"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center mb-6">
                          <input
                            type="checkbox"
                            onChange={toggleCheckbox}
                            className="checkbox"
                          />
                          <p className=" ml-4">
                            Continue means that you will agree with our terms
                            and{" "}
                            <a className=" underline" href="/privacy">
                              privacy policy
                            </a>
                          </p>
                        </div>
                        <button
                          id="submit_btn_id"
                          type="button"
                          disabled={!checked}
                          className="btn btn-primary bg-[#4C199F]"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                        <button className="btn">Close</button>
                      </div>
                    </div>
                  </form>
                </dialog>

                {success && <p className="text-white">Success!</p>}
              </div>
              </div> */}
      </section>
    </section>

  )
}