import Image from "next/image";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CompanyProfile from "./components/CompanyProfile";

export default async function Home() {
  return (
    <main>
      <nav className="bg-white">
        <Navbar />
      </nav>
      
      <section className="bg-white">
      <Landing />
      </section>
      
      <section className="bg-white">
        <CompanyProfile/>
      </section>
      <footer className="bg-white">
      <Footer/>
      </footer>

    </main>


  );
}
