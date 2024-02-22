import FirstSection from "@/components/Homepage/FirstSection";
import Navbar from "../Navbar/Navbar";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirSection";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden lg:grid lg:grid-cols-8">
      <nav className="lg:fixed lg:top-0 lg:col-start-1 lg:h-screen ">
        <section className="hidden h-screen lg:block">
          <Navbar />
        </section>
      </nav>

      <div className="w-screen lg:col-start-2 lg:col-end-9">
        <div>
          <FirstSection />
        </div>
        <div>
          <SecondSection />
        </div>
        <div>
          <ThirdSection />
        </div>
      </div>
    </main>
  );
}
