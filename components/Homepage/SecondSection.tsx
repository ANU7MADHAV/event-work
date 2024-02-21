import Image from "next/image";
import birthday from "@/public/birthday.png";
import event from "@/public/event.png";
import wedding from "@/public/wedding.png";

const SecondSection = () => {
  return (
    <div className="ml-[150px] w-[1000px] bg-[#FFF7EA] px-8">
      <section className="py-6">
        <h1 className="text-lg">Events and Weddings</h1>
        <h1 className="text-4xl font-bold">Our services</h1>
      </section>

      <section className="flex gap-[80px]">
        <Image src={birthday} alt="birthday" />
        <Image src={event} alt="event" />
        <Image src={wedding} alt="wedding" />
      </section>
    </div>
  );
};

export default SecondSection;
