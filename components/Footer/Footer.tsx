import React from "react";

const Footer = () => {
  return (
    <div className="flex w-screen justify-between bg-black text-left lg:px-[150px] lg:py-8 ">
      <div className="flex w-full flex-col  lg:ml-[210px]">
        <div className="my-4 text-center text-white">
          <h1 className="text-2xl text-white">KING&apos;S</h1>
          <p className="text-white">Events and Weddings</p>
        </div>
        <div>
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
        </div>
      </div>

      <div className="w-full space-y-2 py-6 text-center text-white">
        <p>CONTACT US</p>
        <p>Any where, Any city,445533</p>
        <p>Call Us: +91888866668888</p>
        <p>info@kingsevents.com</p>
      </div>
    </div>
  );
};

export default Footer;
