import { SheetDemo } from "@/components/Navbar/MobileNavbar";
import About from "@/components/Services/About";
import ServicePage from "@/components/Services/ServicePage";

const page = () => {
  return (
    <div>
      <section className="visible bg-none p-5 lg:hidden">
        <SheetDemo />
      </section>
      <div className="pt-6">
        <ServicePage />
      </div>
      <div className="block lg:hidden">
        <About />
      </div>
    </div>
  );
};

export default page;
