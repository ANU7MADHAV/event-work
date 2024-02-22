import React from "react";
import Navbar from "../Navbar/Navbar";

const ServicePage = () => {
  return (
    <div className="w-screen overflow-x-hidden lg:grid lg:grid-cols-8">
      <nav className="lg:fixed lg:top-0 lg:col-start-1 lg:h-screen ">
        <section className="hidden h-screen lg:block">
          <Navbar />
        </section>
      </nav>
      <div className="w-screen lg:col-start-2 lg:col-end-9"></div>
    </div>
  );
};

export default ServicePage;
