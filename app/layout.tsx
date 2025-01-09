import type { Metadata } from "next";
import { Orbitron, Exo_2, Roboto, Audiowide } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: "400",
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className={orbitron.variable}>
          <div className={exo2.variable}>
            <div className={roboto.variable}>
              <div className={audiowide.variable}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}