const FirstSection = () => {
  return (
    <div className="h-[800px] w-full bg-[url('/home.png')] bg-cover  object-cover">
      <div className="ml-[180px] flex h-full items-end justify-start py-9 pb-[150px] ">
        <section className="w-auto bg-white p-6 ">
          <h3 className="pb-6">Dream Maker</h3>
          <h1 className="py-2 text-lg">YOUR PERSONAL DREAM MAKER</h1>
          <p className="text-sm">
            We believe that it is all about the BIG DREAMS and the small
            details!
          </p>
          <button className="my-2 bg-black px-4 py-2 text-white">
            Book now
          </button>
        </section>
      </div>
    </div>
  );
};

export default FirstSection;
