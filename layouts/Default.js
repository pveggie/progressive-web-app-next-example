import Head from 'next/head'
// import { useSession, signIn } from 'next-auth/client'
import { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useRouter } from 'next/router'
// import { fetchUserFromDb } from '../redux/slices/userSlice'


const DefaultLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <>
      <Head>
        <title>Test tile</title>
      </Head>
      <>
        {children}
      </>
    </>
  )
}

export default DefaultLayout
