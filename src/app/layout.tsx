import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sirinevlerfinal.com'),
  title: {
    default: 'Şirinevler Final Dershanesi',
    template: '%s | Şirinevler Final Dershanesi',
  },
  description: "Bahçelievler — Şirinevler Final Dershanesi. YKS'de hedef üniversiteye giden yol.",
  authors: [{ name: 'Şirinevler Final Dershanesi', url: 'https://www.sirinevlerfinal.com' }],
  creator: 'Şirinevler Final Dershanesi',
  publisher: 'Şirinevler Final Dershanesi',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/logos/final%20logo%20png.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Şirinevler Final Dershanesi',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sirinevlerfinal',
    creator: '@sirinevlerfinal',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
