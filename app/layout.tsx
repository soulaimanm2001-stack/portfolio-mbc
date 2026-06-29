import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soulaiman Messaya | Candidature MBC",
  description:
    "Portfolio premium de Soulaiman Messaya pour une candidature au poste d'Aspirant Conducteur de bus MBC."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
