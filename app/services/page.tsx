import Image from "next/image";
import type { Metadata } from "next";
import { BookingProcess, ContactPanel, ReviewCarousel, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Cleaning Services Auckland | BeatingHeart Limited",
  description: "Residential, commercial and Airbnb cleaning services across Auckland.",
};

const serviceSections = [
  { id: "residential-cleaning", eyebrow: "Tailored Cleaning for Exceptional Living.", title: "Residential Cleaning", image: "/images/airbnb.jpg", copy: "Your home is your sanctuary — we treat it that way. Our residential cleaning service is designed to provide a deep, refined clean using high-end products and proven methods. Every clean is discreet, respectful, and detail-focused.", items: ["Routine home cleaning – weekly, fortnightly, or monthly", "Professional apartment cleaning tailored to compact living", "Move-in and move-out cleans for a seamless transition", "Detailed oven and rangehood cleaning", "Exterior water blasting for driveways, patios, and more", "One-off deep cleaning – including end-of-tenancy and pre-sale cleans"] },
  { id: "commercial-cleaning", eyebrow: "Professional Presentation Starts with a Clean Space.", title: "Commercial Cleaning", image: "/images/commercial.jpg", copy: "A well-maintained workplace speaks volumes. We work quietly and efficiently to ensure your office, clinic, or commercial site is spotless, welcoming, and hygienic — so you can focus on business.", items: ["Offices and corporate environments", "Childcare centres and schools", "Apartment and building common areas", "Retail stores and showrooms", "Clinics, studios, and more", "10+ staff ready to get cleaning"] },
  { id: "airbnb-cleaning", eyebrow: "5-Star Standards for Every Guest Stay.", title: "Airbnb Cleaning", image: "/images/team-hero.webp", copy: "Airbnb turnovers require speed and precision — without sacrificing quality. We deliver consistent, guest-ready results that ensure glowing reviews and hassle-free hosting.", items: ["Strip and remake all beds with fresh linen", "Bathroom and kitchen deep clean", "Floors vacuumed and mopped", "Dusting and spot cleaning", "Restocking essentials (if provided)", "Visual property check for any issues", "10+ staff ready to get cleaning"] },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader active="services" />
      <main>
        <section className="services-hero"><div><h1>Our Services</h1><p>Whether you’re maintaining a home, managing a commercial space, or hosting guests through Airbnb — we deliver a standard of clean that reflects quality, reliability, and trust.<br />Luxury Cleaning Services Across Mount Eden, Saint Heliers, Mission Bay, Newmarket, and More.</p></div></section>
        <section className="service-list">
          {serviceSections.map((service, index) => (
            <article className={`service-feature ${index % 2 === 1 ? "reverse" : ""}`} id={service.id} key={service.id}>
              <div className="service-copy"><span className="eyebrow">{service.eyebrow}</span><h2>{service.title}</h2><p>{service.copy}</p><p className="included">What’s included:</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
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
