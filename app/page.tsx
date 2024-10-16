import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Home";
import Share from "../components/Share";
import How from "../components/How";
import Help_you from "../components/Help_you.jsx";
import OneSol from "../components/OneSol";
import Engaging from "../components/Engaging";
import Footer from "../components/Footer";
import One from "../components/One";
import Features from "../components/Features";
import Optimixed from "../components/Optimixed";
import Faq from "../components/Faq";
import './globals.css';
export default function Home() {
  return (
    <div className="bg-white rounded-b-[64px] font-[family-name:var(--font-geist-sans)]">
      <div className="py-10">
{/* / */}
      </div>
      <Nav />
      <Hero />
      <Share />
      <How />
      <Optimixed />
      <Help_you />
      <Features />
      <OneSol />
      <Engaging />
      <Faq />
      <One />
      <Footer />
      
   
    </div>
  );
}
