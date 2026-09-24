import Image from "next/image";
import Link from "next/link";
import { BookingProcess, ContactPanel, ReviewCarousel, SiteFooter, SiteHeader } from "./components";

const services = [
  { title: "Residential Cleaning", image: "/images/residential.jpg", href: "/services/residential-cleaning" },
  { title: "Commercial Cleaning", image: "/images/commercial.jpg", href: "/services/commercial-cleaning" },
  { title: "Airbnb Cleaning", image: "/images/airbnb.jpg", href: "/services/airbnb-cleaning" },
];

const team = [
  { name: "Owen Ing", role: "Manager", copy: "Committed to operational excellence.", icon: "/images/team-icon-gear.png" },
  { name: "Alan Su", role: "Owner/Director", copy: "Leading with vision and detail since 2020.", icon: "/images/team-icon-star.png" },
  { name: "Sneha", role: "Residential Cleaner", copy: "Trusted by dozens of households and hosts.", icon: "/images/team-icon-sparkles.png" },
  { name: "Long", role: "Residential Cleaner", copy: "Known for thoroughness and a warm smile.", icon: "/images/team-icon-sparkles.png" },
];

export default function Home() {
  return (
    <>
      <SiteHeader active="home" />
      <main>
        <section className="home-hero">
          <div className="hero-content">
            <span className="hero-eyebrow">Auckland cleaning specialists</span>
            <h1>Cleaning with Care, Precision, and Heart.</h1>
            <p>Thoughtful residential, commercial, and Airbnb cleaning delivered by a team that treats every space with respect.</p>
            <div className="hero-actions">
              <Link className="hero-button primary" href="/contact">Request a quote <span aria-hidden="true">→</span></Link>
              <Link className="hero-button secondary" href="/services">Explore services <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="hero-trust" aria-label="BeatingHeart at a glance">
            <div><strong>15+</strong><span>Years Combined Experience</span></div>
            <div><strong>100+</strong><span>Jobs all around Auckland</span></div>
            <div><strong>Auckland</strong><span>Region</span></div>
            <div><strong>100%</strong><span>Customer Satisfaction</span></div>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-grid">
            <div>
              <span className="section-kicker">Our promise</span>
              <h2>Our Mission</h2>
            </div>
            <p>
              At BeatingHeart Limited, our mission is to deliver exceptional cleaning that elevates comfort,
              restores harmony, and upholds the highest standards of hygiene in every space we care for. Guided
              by transparency, punctuality, and a trusted team of professionals — we clean with heart.
            </p>
          </div>
        </section>

        <section className="specialities-section section-pad">
          <div className="section-heading centered-copy dark-copy">
            <h2>Our Specialities</h2>
            <p>We specialise in luxury residential, commercial, and Airbnb cleaning — delivering spotless results with precision, reliability, and a personal touch.</p>
          </div>
          <div className="speciality-grid">
            {services.map((service, index) => (
              <Link className="speciality-card" href={service.href} key={service.title}>
                <div className="speciality-image">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="card-index">0{index + 1}</span>
                </div>
                <div className="speciality-card-title"><h3>{service.title}</h3><span aria-hidden="true">↗</span></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="team-section section-pad">
          <div className="section-heading centered-copy dark-copy team-heading">
            <span className="eyebrow">The People Behind Every Impeccable Clean.</span>
            <h2>Our Team</h2>
            <p>Our team brings years of hands-on experience and a shared commitment to delivering quality in every detail.</p>
          </div>
          <div className="team-layout">
            <div className="team-grid">
              {team.map((member) => (
                <article className="team-card" key={member.name}>
                  <Image src={member.icon} alt="" width={80} height={80} />
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.copy}</p>
                </article>
              ))}
            </div>
            <div className="team-photo">
              <Image src="/images/team-group.jpeg" alt="The BeatingHeart cleaning team" fill sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          </div>
        </section>

        <BookingProcess />
        <ReviewCarousel />
        <ContactPanel showMap />
      </main>
      <SiteFooter />
    </>
  );
}
