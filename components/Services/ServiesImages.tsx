import Image from "next/image";
import wedding from "@/public/wedding.png";
import event from "@/public/event.png";
import birthday from "@/public/birthday.png";

const ServiesImages = () => {
  return (
    <div className="mt-6 h-full px-4 lg:p-0">
      <section>
        <h3>Events and Weddings</h3>
        <h1>Our services</h1>
      </section>
      <section className="flex w-[1000px] flex-col lg:flex-row lg:gap-4 ">
        <Image src={wedding} alt="wedding" />
        <Image src={birthday} alt="birthday" />
        <Image src={event} alt="event" />
      </section>
    </div>
  );
};

export default ServiesImages;
