import { Audiowide, Cal_Sans, Golos_Text } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golostext = Golos_Text({
  weight: "400",
  variable: "--font-golostext",
  subsets: ["latin"],
});

const calsans = Cal_Sans({
  weight: "400",
  variable: "--font-calsans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Interior Design",
  description: "A modern interior design website showcasing beautiful spaces and innovative designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${calsans.variable}`}
      >
        <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
