import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import "swiper/css/bundle";
import Header from "./components/header";
import Footer from "./components/footer";

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
