import img from "@/assets/about.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-black mb-4">
            All Set to get your Passion on the runway
          </h1>
          <p className="text-lg mb-6">
            Welcome to the Skills Insight Module! Explore the inner workings of
            your dream company and discover the essential skills required to
            thrive in its dynamic environment. Delve into a comprehensive
            overview of the company&apos;s operations, gaining valuable insights into
            the methodologies, technologies, and strategies employed to drive
            success.
          </p>
          <Link href="/skills">
            <Button>Get Started</Button>
          </Link>
        </div>
        <div>
          <Image
            alt="Skills Insight"
            className="w-full h-auto"
            height="400"
            src={img}
            width="600"
          />
        </div>
      </div>
    </div>
  );
}
