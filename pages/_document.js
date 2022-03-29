/* eslint-disable @next/next/no-page-custom-font */
// Disabling eslint rule @next/next/no-page-custom-font because this is
// the correct file but the rules is currently not correctly recognizing
// function expressions in this file
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32" 
        />*/}
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />


        {/* <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#396b53" />
        <link rel="apple-touch-icon" href="/app-icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#396b53" />

        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
