import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BookingProcess, ContactPanel, ReviewCarousel, SiteFooter, SiteHeader } from "../components";
import { serviceSections } from "./service-data";

export const metadata: Metadata = {
  title: "Cleaning Services Auckland | BeatingHeart Limited",
  description: "Residential, commercial and Airbnb cleaning services across Auckland.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader active="services" />
      <main>
        <section className="services-hero"><div><h1>Our Services</h1><p>Whether you’re maintaining a home, managing a commercial space, or hosting guests through Airbnb — we deliver a standard of clean that reflects quality, reliability, and trust.<br />Luxury Cleaning Services Across Mount Eden, Saint Heliers, Mission Bay, Newmarket, and More.</p></div></section>
        <section className="service-list">
          {serviceSections.map((service, index) => (
            <article className={`service-feature ${index % 2 === 1 ? "reverse" : ""}`} id={service.id} key={service.id}>
              <div className="service-copy"><span className="eyebrow">{service.eyebrow}</span><h2>{service.title}</h2><p>{service.copy}</p><p className="included">What’s included:</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="service-cta" href={`/services/${service.id}`}>Explore service <span aria-hidden="true">→</span></Link></div>
              <div className="service-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            </article>
          ))}
        </section>
        <BookingProcess alternate />
        <ReviewCarousel />
        <ContactPanel showMap />
      </main>
      <SiteFooter />
    </>
  );
}
