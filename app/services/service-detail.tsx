import Image from "next/image";
import Link from "next/link";
import { BookingProcess, ContactPanel, ReviewCarousel, SiteFooter, SiteHeader } from "../components";
import type { Service } from "./service-data";

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <>
      <SiteHeader active="services" />
      <main>
        <section className="service-detail-hero">
          <Image src={service.image} alt={service.title} fill priority sizes="100vw" />
          <div className="service-detail-overlay" />
          <div className="service-detail-hero-content">
            <Link className="service-breadcrumb" href="/services">← All services</Link>
            <span>{service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p>{service.copy}</p>
            <div className="service-detail-actions">
              <Link className="hero-button primary" href="/contact">Request a quote <span aria-hidden="true">→</span></Link>
              <a className="hero-button secondary" href="tel:02904309833">Call our team <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="service-detail-inclusions">
          <div className="service-detail-heading">
            <span className="section-kicker">What’s included</span>
            <h2>{service.detailHeading}</h2>
            <p>Every service is discussed and tailored to your property, priorities, and preferred schedule before work begins.</p>
          </div>
          <ul>
            {service.items.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="service-detail-cta">
          <div>
            <span className="section-kicker">Ready when you are</span>
            <h2>Let’s create a cleaning plan that works for you.</h2>
          </div>
          <Link href="/contact">Start your enquiry <span aria-hidden="true">→</span></Link>
        </section>

        <BookingProcess alternate />
        <ReviewCarousel />
        <ContactPanel showMap />
      </main>
      <SiteFooter />
    </>
  );
}
