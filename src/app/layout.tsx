import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janakiram Vallapu | Data Analyst Portfolio",
  description:
    "Data Analyst specializing in SQL, Power BI, Excel and Python. Explore projects, dashboards and case studies.",
  keywords: [
    "Data Analyst",
    "SQL",
    "Power BI",
    "Excel",
    "Python",
    "Portfolio",
    "Business Intelligence",
  ],
  authors: [{ name: "Janakiram Vallapu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}