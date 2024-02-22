import Navbar from "../Navbar/Navbar";
import About from "./About";
import ServiesImages from "./ServiesImages";

const ServicePage = () => {
  return (
    <div className="w-screen flex-col  overflow-x-hidden bg-pink-200 lg:grid lg:grid-cols-8">
      <nav className="lg:fixed lg:top-0 lg:col-start-1 lg:h-screen ">
        <section className="hidden h-screen lg:block">
          <Navbar />
        </section>
      </nav>
      <div className="flex h-screen w-screen flex-col lg:col-start-3 lg:col-end-9">
        <ServiesImages />
        <section className="hidden lg:block">
          <About />
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
