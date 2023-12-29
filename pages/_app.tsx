import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react";
import State from '../context/State';
import { ThemeProvider as NextThemesProvider } from "next-themes";

function MyApp({ Component, pageProps }:AppProps) {
  return (
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <State>
              <Component {...pageProps} />
          </State>
        </NextThemesProvider>
      </NextUIProvider>
  )
}

export default MyApp
