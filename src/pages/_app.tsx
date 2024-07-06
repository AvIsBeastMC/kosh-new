import { type AppType } from "next/app";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import localFont from 'next/font/local'
import "~/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-tailwind/react";

export const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '400'
});
export const InterBold = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '700'
});

export const PlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '500'
});

export const ManropeFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '500'
});

export const PlayfairDisplayBold = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '800'
});

export const JioType = localFont({
  src: '../../public/fonts/JioType-Light.ttf',
  weight: '800'
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      mirror: true
    });

    setTimeout(() => {
      window.addEventListener('load', () => AOS.refresh());
    }, 200);
  }, [router.asPath]);

  return (
    <ThemeProvider>
      <main className={InterFont.className}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
