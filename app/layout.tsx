import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import '../styles/reset.scss'
import '../styles/main.scss'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={`${roboto.className} page_pokedex`}>{children}</body>
    </html>
  );
}
