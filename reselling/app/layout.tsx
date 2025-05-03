import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { WagmiProviderWrapper } from "@/utils/wagmiConfig";
import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Reticketer",
//   description: "Easily Resell Event Tickets",
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProviderWrapper>
          <NavBar />
          <main className="min-h-screen">{children}</main>
          <Analytics />
          <Footer />
        </WagmiProviderWrapper>
      </body>
    </html>
  );
}
