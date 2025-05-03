import React from 'react';
import { Button } from '@/components/ui/button';
import './HeroSection.css';
import Link from 'next/link';

function HeroSection() {
  return (
    <>
      {/* <div className="hero-container">
        <h1>Reticketer</h1>
        <p>The Ultimate Ticket Reselling Platform</p>
        <div className="hero-btns scale-[1.15]">
          <Link href="/search" className="mr-2">
            <Button variant="outline">Buy Tickets</Button>
          </Link>
          <Link href="/sell-tickets" className="mr-2">
            <Button variant="outline">Sell Tickets</Button>
          </Link>
          <Link href="#how-it-works" scroll={true}>
            <Button variant="outline">Learn How It Works</Button>
          </Link>
        </div>
      </div> */}
      <div className="hero-container">
        <h1 className="text-5xl md:text-[5rem] xl:text-[7.5rem] font-semibold">
          Reticketer
        </h1>
        <p className="text-center md:text-left text-xl mb-8">
          The Ultimate Web3.0 based Ticket Reselling Platform
        </p>
        <div className="grid grid-cols-2 scale-[1.15] gap-2 mb-4">
          <Link href="/search">
            <Button variant="outline">Buy Tickets</Button>
          </Link>
          <Link href="/sell-tickets">
            <Button variant="outline">Sell Tickets</Button>
          </Link>
        </div>
        <Link href="#how-it-works" scroll={true} className="scale-[1.15]">
          <Button variant="outline">Learn How It Works</Button>
        </Link>
      </div>
    </>
  );
}

export default HeroSection;
