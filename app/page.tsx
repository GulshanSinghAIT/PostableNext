import Image from "next/image";
import Nav from "../Components/Nav";
import Hero from "../Components/Home";
import Share from "../Components/Share";
import How from "../Components/How";
import Help_you from "../Components/Help_you.jsx";
import OneSol from "../Components/OneSol";
import Engaging from "../Components/Engaging";
import Footer from "../Components/Footer";
import One from "../Components/One";
import Features from "../Components/Features";
import Optimixed from "../Components/Optimixed";
import Faq from "../Components/Faq";
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
