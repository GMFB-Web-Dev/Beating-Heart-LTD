import type { Metadata } from "next";
import { ServiceDetailPage } from "../service-detail";
import { getService } from "../service-data";

const service = getService("airbnb-cleaning");

export const metadata: Metadata = {
  title: "Airbnb Cleaning Auckland | BeatingHeart Limited",
  description: "Consistent, guest-ready Airbnb turnover cleaning services across Auckland.",
};

export default function AirbnbCleaningPage() {
  return <ServiceDetailPage service={service} />;
}
