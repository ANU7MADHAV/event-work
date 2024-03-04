const ThirdSection = () => {
  return (
    <div className="flex w-auto justify-between px-8 pb-3 text-white lg:ml-[160px] lg:w-[980px] lg:px-4 lg:py-10">
      <section className="flex w-[9500px] flex-col">
        <section className="py-4">
          <h1>Events and Weddings</h1>
          <section className="flex justify-between">
            <h1 className="text-2xl lg:text-4xl">About</h1>
            <button className="rounded-lg bg-orange-400 px-2 py-1 text-sm text-white">
              See more
            </button>
          </section>
        </section>

        <p className="text-slate-200">
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

export default ThirdSection;
