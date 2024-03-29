// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { ReactNode, Suspense } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Next.js Prisma Postgres Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#FFF",
};

const HTML = ({
  inter,
  children,
}: {
  inter: NextFontWithVariable;
  children: ReactNode;
}) => (
  <html lang="en">
    <body className={inter.variable}>
      <Toaster />
      <Suspense fallback="Loading...">
        <AuthStatus />
      </Suspense>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return process.env.ENV === "local" ? (
    <HTML inter={inter}>{children}</HTML>
  ) : (
    <h1>hi</h1>
  );
 
}
