import Image from "next/image";
import wedding from "@/public/wedding.png";
import event from "@/public/event.png";
import birthday from "@/public/birthday.png";

const ServiesImages = () => {
  return (
    <div className="mt-6 h-full  lg:p-0">
      <section>
        <h3>Events and Weddings</h3>
        <h1 className="text-2xl">Our services</h1>
      </section>
      <section className="flex w-[1000px] flex-col gap-3  lg:flex-row lg:gap-4 ">
        <Image
          src={wedding}
          alt="wedding"
          className="overflow-hidden rounded-md"
        />
        <Image
          src={birthday}
          alt="birthday"
          className="overflow-hidden rounded-md"
        />
        <Image src={event} alt="event" className="overflow-hidden rounded-md" />
      </section>
    </div>
  );
};

export default ServiesImages;
