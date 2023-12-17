import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaFileDownload, FaLinkedinIn } from 'react-icons/fa';
import { Input } from "@nextui-org/react";
// Define the Footer component
export default function Footer() {
  return (
    <div className='footer-section'>
      <section className='' id='socialsection'>
        <footer className='text-white sticky '>
          <div className='flex gap-1 w-full bg-zinc-900' id="footer">
            <div className="grid grid-flow-col gap-10 auto-cols-max" id="footericon">
              <div className='flex items-center'>
                <Image
                  src="/jr-cafe-high-resolution-logo-white-transparent.png"
                  alt="Comp Logo"
                  className="mr-2"
                  width={150}
                  height={35}

                  priority
                />
              </div>
              <div id="socialicons">
                <div className='grid grid-flow-row gap-10 auto-rows-max'>
                  <SocialIcons></SocialIcons>
                </div>
              </div>

              <div id="location" className='flex justify-center items-center'>
                <span>
                  location
                  1234 Cafe Way
                  Queens, NY
                  11101
                </span>
              </div>
              <div >

              </div>
              <div >

              </div>
              <div >

              </div>              
              <div >

              </div>
              <div >

              </div>
              <div >

              </div>
              <div >

              </div>
              <div id='columnsubscribe' className='flex items-center'>
                <div className='grid grid-flow-row auto-rows-max'>
                    <div>
                      Signup for our Newsletter
                    </div>
                    <div className="flex justify-center items-center">
                      <Input type="email" label="Email" placeholder="Enter your email" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="footer-setting" flex gap-2>
      {/* GitHub icon */}
      <a
        href="mail:admin@jrcafe.com"
        target="_blank"
        rel="noopener noreferrer" id="Mail"
      >
        <Image className='' src='/OIP.jpeg' title='Mail Us' alt='Mail Us' width={30} height={30} priority />

      </a>

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
  );
}