import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
