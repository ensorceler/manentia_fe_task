"use client";

import { Button } from "@/ui";
import { useRouter } from "next/router";

const RouteLink = ({ route, href }: { route: string; href: string }) => {
  const router = useRouter();

  if (router.pathname === href) {
    return (
      <div className="relative">
        <div className="absolute h-2 w-2 rounded-full bg-[#08D3BB] -top-1 -left-2 animate-pulse" />
        <p className="text-primaryBlue">{route}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{route}</p>
      </div>
    );
  }
};

export default function Navbar() {
  return (
    <div className="w-full h-24 px-8 py-6 border border-b-neutral-300 flex flex-row justify-between items-center">
      <div className="">
        <p className="font-extrabold text-2xl text-primaryBlue">LOGO</p>
      </div>
      <div className="flex flex-row items-center gap-8">
        <RouteLink route="Home" href="/" />
        <RouteLink route="About Us" href="/about" />
        <RouteLink route="Services" href="/services" />
        <RouteLink route="Blog" href="/blog" />

        <Button>
          <p>Contact Us</p>
        </Button>
      </div>
    </div>
  );
}
