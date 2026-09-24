import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auckland’s Trusted Cleaning Services | BeatingHeart Ltd.",
  description:
    "Luxury residential, commercial and Airbnb cleaning services across Auckland, delivered with care, precision and heart.",
  icons: {
    icon: "/beatingheart-logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
