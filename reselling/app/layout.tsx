// app/layout.tsx
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { TicketProvider } from "./contexts/TicketContext";
import { UserProvider } from "./contexts/UserContext"; // Correct path for UserProvider
import "./globals.css";

// Import the Inter font properly from next/font/google
import { Inter } from "next/font/google";

// Initialize the font correctly
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket Reselling",
  description: "A platform for buying and selling event tickets.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>{/* Your head content goes here */}</head>
      <body className={inter.className}>
        {" "}
        {/* Add the font className to body */}
        <AuthProvider>
          <TicketProvider>
            <UserProvider>
              {" "}
              {/* Wrap with UserProvider */}
              <Header />
              <main>{children}</main>
              <Footer />
            </UserProvider>
          </TicketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
