import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2
        className="mt-8 font-semibold 
      text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark
       dark:text-light dark:font-normal"
      >
        Есть вопросы? Можете связаться со мной 📞{" "}
        <Link className="!underline underline-offset-2" href="/contact">
          здесь.
        </Link>{" "}
        И если не победим,то возглавим.
      </h2>
    </>
  );
}
