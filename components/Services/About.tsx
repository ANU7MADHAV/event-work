import React from "react";

const About = () => {
  return (
    <div className="-ml-[20px] flex w-auto justify-between bg-pink-200 px-8 pb-3 lg:w-[1050px] lg:px-4 lg:py-10">
      <section className="flex w-[9500px] flex-col">
        <section className="py-4">
          <h1>Events and Weddings</h1>
          <section className="flex justify-between">
            <h1 className="text-2xl lg:text-4xl">About</h1>
            <button className=" mr-7 bg-black  px-2 py-1 text-sm text-white md:mr-5">
              See more
            </button>
          </section>
        </section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

export default About;
