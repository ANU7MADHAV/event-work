import React from "react";
import Cards from "./Cards";

const ContactPage = () => {
  return (
    <div>
      <h1>Location</h1>
      <h1>CONTACT</h1>
      <div className="flex justify-center gap-x-6 ">
        <Cards
          firstHeading="address"
          secondHeading="Any where, Any city,445533"
        />
        <Cards
          firstHeading="Call Us"
          secondHeading="Call Us: +91888866668888"
        />
        <Cards firstHeading="Mail Us" secondHeading="info@kingsevents.com" />
      </div>
    </div>
  );
};

export default ContactPage;
