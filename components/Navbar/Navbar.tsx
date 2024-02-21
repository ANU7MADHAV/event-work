import React from "react";
import Routes from "./Routes";
import SocialNetworks from "./SocialNetworks";

const Navbar = () => {
  return (
    <div className="flex h-full  w-full flex-col justify-around overflow-y-scroll bg-[#FFF7EA] px-8 text-center  shadow">
      <section>
        <h1>KING&apos;S</h1>
        <p className="text-[#A2783A]">events and weddings</p>
      </section>
      <section>
        <Routes />
      </section>
      <section>
        <p>+91 7907613290</p>
        <p>anumadhavan7@gmail.com</p>
      </section>
      <section className="flex w-full justify-center ">
        <SocialNetworks />
      </section>
    </div>
  );
};

export default Navbar;
