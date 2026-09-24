"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

type ActivePage = "home" | "services" | "contact";

const navigation = [
  { label: "Home", href: "/", key: "home" },
  { label: "Services", href: "/services", key: "services" },
  { label: "Contact Us", href: "/contact", key: "contact" },
] as const;

export function SiteHeader({ active }: { active: ActivePage }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="BeatingHeart Limited home">
          <Image
            src="/logo-hd.png"
            alt="BeatingHeart Limited Cleaning Services"
            width={420}
            height={120}
            priority
            unoptimized
          />
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              className={active === item.key ? "active" : ""}
              href={item.href}
              key={item.key}
              scroll
              onClick={() => {
                setOpen(false);
                if (item.key === "services") {
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className={`menu-toggle ${open ? "is-open" : ""}`} type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav aria-label="Footer navigation">
        <Link href="/contact">Contact Us</Link>
        <Link href="/services" scroll onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>Services</Link>
        <Link href="/">Home</Link>
      </nav>
      <Link className="footer-brand" href="/" aria-label="BeatingHeart Limited home">
        <Image
          src="/logo-hd.png"
          alt="BeatingHeart Limited Cleaning Services"
          width={420}
          height={120}
          unoptimized
        />
      </Link>
      <a href="https://gmfb.co.nz" target="_blank" rel="noreferrer">Developed By GMFB LTD</a>
    </footer>
  );
}

export function BookingProcess({ alternate = false, contact = false }: { alternate?: boolean; contact?: boolean }) {
  return (
    <section className={`booking-process ${alternate ? "alternate" : ""} ${contact ? "contact" : ""}`}>
      <div className="booking-overlay" />
      <div className="booking-content">
        <h2>Our Booking Process</h2>
        <ol>
          <li>Request a Quote – Get in touch via email or phone.</li>
          <li>Onsite Estimation – We visit the property to assess.</li>
          <li>Receive a Fixed Quote – Detailed email with inclusions.</li>
          <li>Accept the Quote – Confirm with a simple reply.</li>
          <li>Schedule the Job – Lock in your first clean.</li>
        </ol>
      </div>
    </section>
  );
}

const reviews = [
  { quote: "Alan and his team do a great clean. We now have them coming every 2 weeks. Very reliable and honest people.", job: "House cleaning", location: "Kohimarama, Auckland" },
  { quote: "Alan and his team were wonderful! They completed the cleaning jobs around the home as requested and they had great attention to detail. Easy to communicate with and schedule in quickly. Thank you!", job: "Home Cleaning", location: "Kohimarama, Auckland" },
  { quote: "Alan and his team did a fantastic job cleaning the house. I was very impressed with their attention to detail and would absolutely hire them again.", job: "Deep cleaning", location: "Auckland" },
  { quote: "Great experience with Alan and work partner. Thorough, professional and satisfactory on all fronts. Will always recommend to others.", job: "Housekeeping", location: "Auckland" },
  { quote: "Alan was brilliant. Friendly and good communication. Excellent job, completed ahead of budget.", job: "Complete Interior Cleaning", location: "Auckland" },
];

export function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const move = (direction: number) => setIndex((value) => (value + direction + reviews.length) % reviews.length);
  const review = reviews[index];

  return (
    <section className="review-section" aria-label="Customer reviews">
      <button className="review-arrow previous" type="button" onClick={() => move(-1)} aria-label="Previous review">
        <Image src="/images/chevron-right.svg" alt="" width={26} height={26} />
      </button>
      <div className="review-card" aria-live="polite">
        <Image src="/images/stars.svg" alt="Rated five out of five" width={116} height={19} />
        <blockquote>“{review.quote}”</blockquote>
        <p>{review.job}</p>
        <span>{review.location}</span>
        <div className="review-dots" aria-hidden="true">
          {reviews.map((_, dot) => <span className={dot === index ? "active" : ""} key={dot} />)}
        </div>
      </div>
      <button className="review-arrow next" type="button" onClick={() => move(1)} aria-label="Next review">
        <Image src="/images/chevron-right.svg" alt="" width={26} height={26} />
      </button>
    </section>
  );
}

export function EnquiryForm({
  light = false,
  firstName = false,
  serviceLabel = "Services",
}: {
  light?: boolean;
  firstName?: boolean;
  serviceLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return (
    <form className={`enquiry-form ${light ? "light" : ""}`} onSubmit={submit}>
      <label>{firstName ? "First name" : "Name"}<input required name="name" placeholder={firstName ? "First name" : "Name"} /></label>
      <label>Email<input required name="email" type="email" placeholder="Enter your email" /></label>
      <label>{serviceLabel}<select name="service" defaultValue="Residential cleaning"><option>Residential cleaning</option><option>Commercial Cleaning</option><option>AirBnb Cleaning</option></select></label>
      <label>Message<textarea required name="message" placeholder="Type your message here..." /></label>
      <label className="terms"><input required type="checkbox" /><span>I agree to the terms and conditions</span></label>
      <button type="submit">Submit</button>
      {submitted && <p className="form-success">Thanks — we’ll be in touch soon.</p>}
    </form>
  );
}

export function ContactPanel({ showMap = false }: { showMap?: boolean }) {
  return (
    <section className="contact-panel">
      <div className={`contact-panel-inner ${showMap ? "with-map" : ""}`}>
        {showMap && <iframe className="contact-map" title="BeatingHeart service area in Auckland" src="https://maps.google.com/maps?q=auckland&t=m&z=10&output=embed&iwloc=near" loading="lazy" />}
        <div className="contact-content">
          <h2>Contact us</h2>
          <p className="contact-lead">Serving Auckland’s Central, Eastern, Southern &amp; North Shore Suburbs<br />We proudly service a wide range of Auckland communities<br /><br />Not sure if your area is included? Just get in touch — we’re happy to help.</p>
          <div className="contact-details">
            <a href="tel:02904309833"><Image src="/images/icon-phone.svg" alt="" width={24} height={24} />029 043 09833</a>
            <a href="mailto:beatingheartltd@gmail.com"><Image src="/images/icon-mail.svg" alt="" width={24} height={24} />beatingheartltd@gmail.com</a>
            <div><Image src="/images/icon-clock.svg" alt="" width={24} height={24} /><span>Mon–Fri: 9am – 5pm<br />Weekends: By Appointment</span></div>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
