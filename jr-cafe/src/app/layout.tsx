import type { Metadata } from 'next'
import './globals.css'
import Header from './Header/page';
import Footer from './Footer/page';
import GoogleAnalytics from './GoogleAnalytics/page';
import CookieBanner from './CookieBanner/page';
import { GA_MEASUREMENT_IDS } from './Public/constants';
import { Inter, Medula_One, Maven_Pro, Bad_Script } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from './Providers/page';

const inter = Medula_One({ weight: '400', subsets: ['latin'], fallback: ['Medula_One'] })

export const metadata: Metadata = {
  title: 'JR Care',
  description: 'Cafe with a twist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <head>
        <title>JR Cafe - Home</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="JR Cafe" />
        <meta name="keywords" content="CAFE, cafe, JR, jr, cafe with a twist, jr cafe, JR CAFE" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" as="style" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Work+Sans:wght@400;500&display=swap" as="style" />
        <style>
        </style>
      </head>
      <body className={inter.className}>

        <div className='container'>
          <Providers>
            <Header />
            <main className='{inter.className}'>{children}</main>
            <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_IDS} />
            <CookieBanner />
            <Footer />
          </Providers>

        </div>

      </body>
    </html>
  );
}