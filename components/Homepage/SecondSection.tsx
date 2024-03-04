import Image from "next/image";
import birthday from "@/public/birthday.png";
import event from "@/public/event.png";
import wedding from "@/public/wedding.png";

const SecondSection = () => {
  return (
    <div className=" px-8 text-white lg:ml-[150px] lg:w-[1000px]">
      <section className="py-6">
        <h1 className="text-lg">Events and Weddings</h1>
        <h1 className="text-4xl font-bold">Our services</h1>
      </section>
      <section className="flex flex-col lg:flex-row lg:gap-[80px]">
        <Image src={birthday} alt="birthday" />
        <Image src={event} alt="event" />
        <Image src={wedding} alt="wedding" />
      </section>
    </div>
  );
};

export default SecondSection;
