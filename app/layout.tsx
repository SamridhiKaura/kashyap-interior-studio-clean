import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-LIVE-DOMAIN-OR-NETLIFY-URL"), // e.g. https://kashyap-interior-studio.netlify.app
  title: "Kashyap Interior Studio – Interior & Wooden Work",
  description: "Interior & wooden work across Chandigarh, Mohali, Kharar and nearby areas.",
  openGraph: {
    title: "Kashyap Interior Studio",
    description: "Designing spaces that tell your story.",
    images: ["/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashyap Interior Studio",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
