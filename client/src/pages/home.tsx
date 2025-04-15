import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { CtaSection } from "@/components/home/cta-section";
import { ContactSection } from "@/components/home/contact-section";
import { Footer } from "@/components/home/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { LoadingScreen } from "@/components/home/loading-screen";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>BIOBRIM - Biomass Pellet Trading Platform</title>
        <meta name="description" content="BIOBRIM is a revolutionary platform bridging the gap between farmers and manufacturing companies in the biomass pellet industry, fostering sustainable practices and circular economy." />
      </Helmet>
      
      <LoadingScreen />
      <CustomCursor />
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CtaSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
