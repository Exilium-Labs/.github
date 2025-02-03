import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyVIGLO from "./components/WhyVIGLO";
import Footer from "./components/Footer";

const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <p>Loading...</p>,
});

const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>VIGLO - AI-Powered Security</title>
        <meta name="description" content="AI-driven fraud detection and security on Solana blockchain." />
        <meta name="keywords" content="AI, Fraud Detection, Blockchain, Security, Solana" />
        <meta property="og:title" content="VIGLO - AI-Powered Security" />
        <meta property="og:description" content="Protect your assets with AI-driven fraud detection on Solana." />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <main className="bg-gray-900 text-white overflow-x-hidden">
      <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="use-cases">
          <UseCases />
        </section>
        <section id="why-viglo">
          <WhyVIGLO />
        </section>
        <section id="live-dashboard">
          <DynamicLiveDashboard />
        </section>
        <section id="join">
          <DynamicJoinRevolution />
        </section>
        <Footer />

      </main>
    </>
  );
}
