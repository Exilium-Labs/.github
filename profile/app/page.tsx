import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyVIGLO from "./components/WhyVIGLO";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LoadingSpinner from "./components/LoadingSpinner";

const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>VIGLO - AI-Powered Security</title>
      </Head>
      <motion.main
        className="bg-gray-900 text-white overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ThemeSwitcher />
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
        <ScrollToTop />
        <Footer />
      </motion.main>
    </>
  );
}
