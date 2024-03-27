import { AppProps } from 'next/app'

import { RootLayout } from "@/layouts/RootLayout"
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/@chakra-ui/theme'

import { roboto, roboto_slab } from '@/lib/fonts'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
            --font-roboto_slab: ${roboto_slab.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <RootLayout>
          {getLayout(<Component {...pageProps} />)}
        </RootLayout>
      </ChakraProvider>
    </>
  )
}
