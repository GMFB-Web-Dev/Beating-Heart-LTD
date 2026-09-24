import type { Metadata } from "next";
import { ServiceDetailPage } from "../service-detail";
import { getService } from "../service-data";

const service = getService("residential-cleaning");

export const metadata: Metadata = {
  title: "Residential Cleaning Auckland | BeatingHeart Limited",
  description: "Detail-focused residential and apartment cleaning services across Auckland.",
};

export default function ResidentialCleaningPage() {
  return <ServiceDetailPage service={service} />;
}
