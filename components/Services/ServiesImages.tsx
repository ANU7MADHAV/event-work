import Image from "next/image";
import wedding from "@/public/wedding.png";
import event from "@/public/event.png";
import birthday from "@/public/birthday.png";

const ServiesImages = () => {
  return (
    <div className="mt-4 mt-6 h-full  lg:p-0">
      <section>
        <h3>Events and Weddings</h3>
        <h1 className="text-2xl">Our services</h1>
      </section>
      <section className="grid w-auto grid-cols-1 gap-y-6 space-y-3 pr-4 md:grid-cols-2 md:space-y-0 lg:w-[1050px] lg:grid-cols-3 lg:space-y-0 ">
        <Image
          src={wedding}
          alt="wedding"
          className="overflow-hidden rounded-md lg:w-[300px]"
        />
        <Image
          src={birthday}
          alt="birthday"
          className="overflow-hidden rounded-md lg:w-[300px]"
        />
        <Image
          src={event}
          alt="event"
          className="overflow-hidden rounded-md lg:w-[300px]"
        />
      </section>
    </div>
  );
};

export default ServiesImages;
