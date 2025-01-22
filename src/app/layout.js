import Navbar from "../components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio of Nirajan Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
