import React from "react";
import Routes from "./Routes";
import SocialNetworks from "./SocialNetworks";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex h-full  w-full flex-col justify-around overflow-y-scroll bg-pink-200 px-8 text-center  shadow">
      <section className="w-full">
        <Link href="/" className="flex justify-center">
          <Image src={logo} alt="logo" width={150} />
        </Link>

        <p className="text-[#A2783A]">events and weddings</p>
      </section>
      <section>
        <Routes />
      </section>
      <section>
        <Link href="tel:+917907613290">
          <p>+91 7907613290</p>
        </Link>
        <Link href="mailto:anumadhavan7@gmail.com">
          <p>anumadhavan7@gmail.com</p>
        </Link>
      </section>
      <section className="flex w-full justify-center ">
        <SocialNetworks />
      </section>
    </div>
  );
};

export default Navbar;
