'use client';

import { cn } from '@/lib/utils';
import { BookOpen, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { Dialog, DialogClose } from './ui/dialog';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
// import ModeToggle from "../mode-toggle"
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
// import ModeToggle from "./mode-toggle"
import { IoSearchOutline } from 'react-icons/io5';
import WalletConnect from "./WalletConnect";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center z-[50] mt-4">
      <div className="flex justify-between md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-80 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Reticketer</SheetTitle>
              <SheetDescription>Re-sell event tickets easily</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/search">
                  <Button variant="outline" className="w-full">
                    <IoSearchOutline className="mr-2" />
                    Search
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/sell-tickets">
                  <Button variant="" className="w-full">
                    Sell Tickets
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <WalletConnect />
              </DialogClose>
              {/* <ModeToggle /> */}
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <h1 className="font-bold">Reticketer</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="/search">
            <Button variant="outline">
              <IoSearchOutline className="mr-2" />
              Search
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
          <Link href="/sell-tickets">
            <Button variant="">Sell Tickets</Button>
          </Link>
          <WalletConnect />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
