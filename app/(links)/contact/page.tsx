import ContactPage from "@/components/contact/ContactPage";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <ContactPage />
      <Link href="https://www.google.com/maps/place/TinkerSpace/@10.046985,76.3326249,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080d6f3a60778b:0x810be95c9816e984!8m2!3d10.0469797!4d76.3351998!16s%2Fg%2F11tcfbjyyn?entry=ttu">
        Google map link
      </Link>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.63461230284!2d76.3351998!3d10.0469797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d6f3a60778b%3A0x810be95c9816e984!2sTinkerSpace!5e0!3m2!1sen!2sin!4v1708610254704!5m2!1sen!2sin"
        width="600"
        height="450"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      >
        Hello world
      </iframe>
    </div>
  );
};

export default page;
