import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janakiram Vallapu | Data Analyst Portfolio",
  description:
    "Data Analyst specializing in SQL, Power BI, Excel, VBA and Python. Explore analytics projects, dashboards, automation systems and case studies.",
  keywords: [
    "Data Analyst",
    "SQL",
    "Power BI",
    "Excel",
    "VBA",
    "Python",
    "Portfolio",
    "Business Intelligence",
    "Excel Automation",
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