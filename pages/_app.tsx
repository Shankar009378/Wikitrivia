import React from "react";
import { AppProps } from "next/app";
import { polyfill } from "seamless-scroll-polyfill";
import "../styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'

const noAuthRequired = ['/', '/login', '/signup']

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    polyfill();
  }, []);

  const router = useRouter()

  return <AuthContextProvider>
  <Navbar />
  {noAuthRequired.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <ProtectedRoute>
      <Component {...pageProps} />
    </ProtectedRoute>
  )}
</AuthContextProvider>;
}

export default App;
