import type { Metadata } from "next";
import { ServiceDetailPage } from "../service-detail";
import { getService } from "../service-data";

const service = getService("commercial-cleaning");

export const metadata: Metadata = {
  title: "Commercial Cleaning Auckland | BeatingHeart Limited",
  description: "Reliable office, retail, clinic and commercial cleaning services across Auckland.",
};

export default function CommercialCleaningPage() {
  return <ServiceDetailPage service={service} />;
}
