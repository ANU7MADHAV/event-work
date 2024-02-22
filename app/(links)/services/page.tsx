import About from "@/components/Services/About";
import ServicePage from "@/components/Services/ServicePage";

const page = () => {
  return (
    <div>
      <div>
        <ServicePage />
      </div>
      <div className="block lg:hidden">
        <About />
      </div>
    </div>
  );
};

export default page;
