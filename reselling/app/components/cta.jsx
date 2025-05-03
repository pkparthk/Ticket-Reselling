import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
  return (
    <div className="scale-[1.3] flex items-center justify-center mt-48">
      <div className="grid">
        <h1 className="text-4xl font-bold mb-4">Interested?</h1>
        <div>
          <Link href="/search">
            <Button variant="outline" className="mr-4">
              Buy Tickets
            </Button>
          </Link>
          <Link href="/sell-tickets">
            <Button variant="outline">Sell Tickets</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
