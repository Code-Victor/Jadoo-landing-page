import Head from "next/head";
import Image from "next/image";
import {
  Hero,
  Section,
  Category,
  Destination,
  BookCard,
  Testimonials,
  CompanyCarousel,
  Subscribe,
  Footer,
  TripStep
} from "../components";
import { ChooseDestination, Payment, Transport } from "../components/icons";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    headText: "Choose Destination",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    background: "icons-1",
    icon: <ChooseDestination />,
  },
  {
    headText: "Make Payment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    background: "icons-2",
    icon: <Payment />,
  },
  {
    headText: "Reach Airport on Selected Date",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    background: "icons-3",
    icon: <Transport />,
  },
];
export default function Home() {
  const heroRef = useRef(null);

  return (
    <>
      <Hero />
      <Section title={"category"} headText="We Offer Best Services">
        <Category />
      </Section>
      <Section title={"Top Selling"} headText="Top Destinations">
        <Destination />
      </Section>
      <div className="grid lg:grid-cols-2 container mx-auto px-4 lg:px-0 relative">
        <div className="w-[360px] h-[360px] rounded-full bg-sky-blue absolute bottom-10 left-[50%] -translate-x-[50%] md:-translate-x-0 md:top-0 md:right-[10%] blur-[70px] -z-10"></div>
        <Section
          title={"easy and fast"}
          headText="Book your next trip in 3 easy steps"
          textAlign="left"
        >
          {steps.map((step) => {
            return <TripStep {...step} />;
          })}
        </Section>
        <div className="grid place-items-center ">
          <BookCard />
        </div>
      </div>
      <Testimonials />
      <CompanyCarousel />
      <Subscribe />
      <Footer/>
    </>
  );
}
