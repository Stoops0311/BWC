import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { AboutIndustries } from "@/components/site/about-industries";
import { ServicesCards } from "@/components/site/services-cards";
import { Partners } from "@/components/site/partners";
import { LogoCloud } from "@/components/site/logo-cloud";
import { WhyChoose } from "@/components/site/why-choose";
import { Testimonials } from "@/components/site/testimonials";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-background">
        <AboutIndustries />
        <ServicesCards />
        <Partners />
        <LogoCloud />
        <WhyChoose />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
