// @ts-nocheck
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isWebAppDetected, setIsWebAppDetected] = useState(null)
  const router = useRouter()
  

  useEffect(() => {
    const path = router.pathname
    const isPwaPath = router.asPath.includes('source=pwa')
    const isIosPw = !!window.navigator.standalone
    const isPwa = isPwaPath || isIosPwa
    const isPwaRoot = isPwa && path === '/'
    if (isPwaRoot) {
      router.push('/pwa/')
    }    

    // router.push('/pwa/')
    // const searchParams = new URLSearchParams(window.location.search)
    // console.log(window.location.search)
    // console.log(searchParams)
    // if (searchParams && searchParams.get('source') === 'pwa') {
    //   console.log('is pwa')
    //   router.push('/pwa/')
    // } else {
    //   console.log('not pwa')
    //   setIsWebAppDetected(false)
    // }
  }, [])

  if (isWebAppDetected === null) {
    return null
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
