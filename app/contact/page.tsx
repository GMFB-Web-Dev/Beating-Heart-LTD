import type { Metadata } from "next";
import Image from "next/image";
import { BookingProcess, EnquiryForm, ReviewCarousel, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Contact BeatingHeart Limited | Auckland Cleaning",
  description: "Request a residential, commercial or Airbnb cleaning quote in Auckland.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main>
        <section className="contact-page-section">
          <div className="contact-page-inner">
            <h1>Contact Us</h1>
            <div className="contact-page-details">
              <a href="tel:02904309833">
                <Image src="/images/icon-phone.svg" alt="" width={34} height={34} />
                <span>029 043 09833</span>
              </a>
              <a href="mailto:beatingheartltd@gmail.com">
                <Image src="/images/icon-mail.svg" alt="" width={34} height={34} />
                <span>beatingheartltd@gmail.com</span>
              </a>
              <div>
                <Image src="/images/icon-clock.svg" alt="" width={34} height={34} />
                <span>Mon–Fri: 9am – 5pm<br />Weekends: By Appointment</span>
              </div>
            </div>
            <p className="contact-page-intro">
              Whether you’re ready to book your first clean or simply have a question, our team is here to help.
              Expect clear communication, fair pricing, and a seamless experience from the very first conversation.
              <br />
              Serving Auckland’s Central, Eastern, Southern &amp; North Shore Suburbs
              <br />
              We proudly service a wide range of Auckland communities
            </p>
            <EnquiryForm light firstName serviceLabel="Choose a service" />
          </div>
        </section>
        <ReviewCarousel />
        <BookingProcess contact />
      </main>
      <SiteFooter />
    </>
  );
}
