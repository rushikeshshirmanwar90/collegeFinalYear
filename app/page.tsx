import { ScrollHeroSection } from "@/components/custom/paller-scroll";
import About_1 from "@/components/home_page/About_1";
import About from "@/components/home_page/About";
import { TextGenerateEffectDemo } from "@/components/home_page/autoTextgenerate";
import { BackgroundBeamsDemo } from "@/components/home_page/background-beem";
import College from "@/components/home_page/college";

export default function Home() {
  return (
    <>
      <ScrollHeroSection />
      <About_1 />
      <About />
      <BackgroundBeamsDemo />
      <College />
    </>
  );
}
