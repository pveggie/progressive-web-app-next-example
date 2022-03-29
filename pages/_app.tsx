import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'

import DefaultLayout from '../layouts/Default'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>

      </Provider>

    </>
  )
}
