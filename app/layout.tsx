import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub — Create and manage your notes easily",
  description:
    "NoteHub is a simple and fast way to create, organize and manage your notes with tags.",
  openGraph: {
    title: "NoteHub — Create and manage your notes easily",
    description:
      "NoteHub is a simple and fast way to create, organize and manage your notes with tags.",
    url: "https://notehub.example.com",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub preview",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "NoteHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteHub — Create and manage your notes easily",
    description:
      "NoteHub is a simple and fast way to create, organize and manage your notes with tags.",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main>
              {children}
              {modal}
            </main>
            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
