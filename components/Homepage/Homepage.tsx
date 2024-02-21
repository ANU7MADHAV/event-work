import FirstSection from "@/components/Homepage/FirstSection";
import SecondSection from "./SecondSection";
import Navbar from "../Navbar/Navbar";
import ThirdSection from "./ThirSection";

export default function Home() {
  return (
    <main className="grid w-screen grid-cols-8 overflow-x-hidden">
      <nav className="fixed top-0 col-start-1 h-screen ">
        <Navbar />
      </nav>
      <div className="col-start-2 col-end-9 w-screen">
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
