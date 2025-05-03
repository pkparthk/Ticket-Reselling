import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-96 pb-12">
      <div className="flex-col justify-center items-center">
        <div className="flex-row justify-between items-center md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px] border-t-2 pt-10">
          <div className="grid md:grid-cols-2 gap-4 items-center justify-between mb-2">
            <Link
              href="/"
              className="text-lg font-semibold text-foreground mr-4"
            >
              Reticketer
            </Link>
            <div className="flex justify-end">
              <ul className="flex flex-row items-center text-sm text-muted-foreground">
                <li className="mr-6 scale-150 hover:text-black cursor-pointer">
                  {/* Place repo link once public */}
                  <a
                    href="https://github.com/pkparthk/Ticket-Reselling"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className="hidden md:visible mr-4">Created by:</li>
                <li className="mr-3">
                  <a
                    href="https://0xparthdev.netlify.app/"
                    target="_blank"
                    className="hover:underline hover:text-black"
                  >
                    Parth
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          © All rights reserved. 2024-present.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
