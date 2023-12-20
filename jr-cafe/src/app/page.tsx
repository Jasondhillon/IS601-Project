'use client';
import { Input } from "@nextui-org/react";
import Image from 'next/image';
import { useState } from "react";
import bg from '../../public/rr-abrot-pNIgH0y3upM-unsplash.jpg';
import Subscribe  from "./Subscribe/page";
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
          {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */}
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex grid place-items-stretch place-content-stretch gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* By{' '} */}
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
        {/* <div className="mt-0 grid text-center  w-full lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-left"> */}
        {/* <div className="mb-32 grid text-center  w-full lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-left"> */}

        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full
        before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl 
        before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 
        after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] 
        before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 
        after:dark:fro m-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
        {/* <Image
            className='HomepageLogo'
          //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/rr-abrot-pNIgH0y3upM-unsplash.jpg"
          alt="JR Cafe Logo"
          width={100}
          height={100}
          priority
        />
      </div> */}
      </main>

      <section id="subsection">

        <div style={{ width: "50%", marginLeft: "25%" }} className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">

          <span className='text-center' style={{ fontSize: "xxx-large" }}>A Café That Stays up as late you do...
          </span>
          <p className="group rounded-lg border border-transparent " style={{ fontSize: "400" }}>J&R Café, Established in 2023, is designed around the students, starting off as humble college students ourselves, We tackled our fair share of late night cram sessions before our tests. But, as the nights went on our energy dwindled, and big chains
            like Starbucks and Dunkin` arent open when we need them. We Know we werent the first to face the situation, but hopefully we can be the last. Proudly presenting J&R Café open all night long.
          </p>
          {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
        </div>
        <div className="mb-32 grid text-center flex justify-between lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className="grid grid-flow-row mt-12 gap-10 flex justify-end auto-rows-max">
          <div className="flex items-center" style={{ }}>
                <p className='text-center' style={{fontSize: "xx-large"}}>Sign up to receive a free coffee!</p>
          </div>
            
          <div className="" style={{ alignItems: "center", marginTop:"-8%" }}>
                <p className='text-center'>Need a little pick me up? Join our mailing list and receive one free coffee on the house *</p>
          </div>

          <div className="" style={{marginTop:'-10%'}}>
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
            />  */}
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
                style={{objectFit:"cover"}}
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