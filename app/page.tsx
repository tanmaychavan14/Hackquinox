'use client';

import { About } from "@/components/About";
import Faq from "@/components/FAQs";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import ScheduleCard from "@/components/schedule";
import Theme from "@/components/Theme";

export default function Home() {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      window.scrollTo({
        top: faqSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col gap-20">
      <section id="home">
        <Main />
      </section>
      <section className="py-11">
        <About />
      </section>
      <section id="theme" className="py-11">
        <Theme />
      </section>
      <section id="timeline" className="py-11 mb-80">
        <div className="relative inline-flex overflow-hidden rounded-xl ml-3 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A42A93_0%,#E2CBFF_50%,#A42A93_100%)]" />
          <span className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-black px-6 py-5 text-6xl text-white backdrop-blur-3xl"
            style={{ fontFamily: 'var(--font-exo2)' }}>
            Timeline
          </span>
        </div>
        <ScheduleCard />
      </section>
      <section id="faq" className="py-11 mt-80">
        <div
          className="relative inline-flex overflow-hidden rounded-xl ml-3 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={scrollToFAQ}
        >
          <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A42A93_0%,#E2CBFF_50%,#A42A93_100%)]" />
          <span className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-black px-6 py-5 text-6xl text-white backdrop-blur-3xl"
            style={{ fontFamily: 'var(--font-exo2)' }}>
            FAQs
          </span>
        </div>
        <Faq />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}