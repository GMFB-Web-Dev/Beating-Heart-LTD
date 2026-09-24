export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  copy: string;
  items: string[];
  detailHeading: string;
};

export const serviceSections: Service[] = [
  {
    id: "residential-cleaning",
    eyebrow: "Tailored Cleaning for Exceptional Living.",
    title: "Residential Cleaning",
    image: "/images/airbnb.jpg",
    copy: "Your home is your sanctuary — we treat it that way. Our residential cleaning service is designed to provide a deep, refined clean using high-end products and proven methods. Every clean is discreet, respectful, and detail-focused.",
    detailHeading: "A considered clean for every kind of home.",
    items: [
      "Routine home cleaning – weekly, fortnightly, or monthly",
      "Professional apartment cleaning tailored to compact living",
      "Move-in and move-out cleans for a seamless transition",
      "Detailed oven and rangehood cleaning",
      "Exterior water blasting for driveways, patios, and more",
      "One-off deep cleaning – including end-of-tenancy and pre-sale cleans",
    ],
  },
  {
    id: "commercial-cleaning",
    eyebrow: "Professional Presentation Starts with a Clean Space.",
    title: "Commercial Cleaning",
    image: "/images/commercial.jpg",
    copy: "A well-maintained workplace speaks volumes. We work quietly and efficiently to ensure your office, clinic, or commercial site is spotless, welcoming, and hygienic — so you can focus on business.",
    detailHeading: "Reliable cleaning that supports your working day.",
    items: [
      "Offices and corporate environments",
      "Childcare centres and schools",
      "Apartment and building common areas",
      "Retail stores and showrooms",
      "Clinics, studios, and more",
      "10+ staff ready to get cleaning",
    ],
  },
  {
    id: "airbnb-cleaning",
    eyebrow: "5-Star Standards for Every Guest Stay.",
    title: "Airbnb Cleaning",
    image: "/images/team-hero.webp",
    copy: "Airbnb turnovers require speed and precision — without sacrificing quality. We deliver consistent, guest-ready results that ensure glowing reviews and hassle-free hosting.",
    detailHeading: "Guest-ready presentation, every single stay.",
    items: [
      "Strip and remake all beds with fresh linen",
      "Bathroom and kitchen deep clean",
      "Floors vacuumed and mopped",
      "Dusting and spot cleaning",
      "Restocking essentials (if provided)",
      "Visual property check for any issues",
      "10+ staff ready to get cleaning",
    ],
  },
];

export function getService(id: string) {
  const service = serviceSections.find((item) => item.id === id);

  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }

  return service;
}
