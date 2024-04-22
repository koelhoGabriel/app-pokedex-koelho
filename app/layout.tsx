import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/reset.scss'
import '../styles/main.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex - Gabriel Oliveira",
  description: "Only pokedex for Arvo's test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
