import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex h-full w-screen items-center justify-between bg-black px-2 py-6 text-left text-sm lg:px-[150px] lg:py-8 ">
      <div className="flex w-full flex-col lg:ml-[210px]  lg:items-center lg:justify-center">
        <div className=" py-4 text-center text-white">
          <Image src={logo} alt="logo" width={150} />
          <p className="text-white">Events and Weddings</p>
        </div>
        {/* <div>
          <p className="text-white">News Letter</p>
          <input
            type="text"
            className="my-2 border bg-black placeholder:px-2"
            placeholder="email"
          />
          <button className="mx-2 bg-white px-2 text-black">Subscribe</button>
          <p className="text-white">
            Sign up with your email address to receive news and updates
          </p>
        </div> */}
      </div>

      <div className="w-full text-center text-white md:space-y-3 md:text-base lg:space-y-2 lg:py-6">
        <p>CONTACT US</p>
        <p>Any where, Any city,445533</p>
        <p>Call Us: +91888866668888</p>
        <p>info@kingsevents.com</p>
      </div>
    </div>
  );
};

export default Footer;
