import { SheetDemo } from "../Navbar/MobileNavbar";

const FirstSection = () => {
  return (
    <div className="flex h-screen w-screen bg-[url('/home.png')] bg-cover object-cover  lg:h-[800px]">
      <section className="visible bg-none lg:hidden">
        <SheetDemo />
      </section>
      <div className="-ml-10 mb-5 flex w-[300px] items-end justify-start md:w-full lg:ml-[180px] ">
        <section className="tex-xs md:[600px] w-auto bg-white px-4 py-2 md:text-sm lg:p-6 ">
          <h3 className="pb-3 lg:pb-6">Dream Maker</h3>
          <h1 className="py-2 text-sm font-bold md:text-lg">
            YOUR PERSONAL DREAM MAKER
          </h1>
          <p className="text-sm">
            We believe that it is all about the BIG DREAMS and the small
            details!
          </p>
          <button className="my-2 bg-black px-4 py-2 text-sm text-white md:text-base">
            Book now
          </button>
        </section>
      </div>
    </div>
  );
};

export default FirstSection;
