import Container from '@/components/container'
import Layout from '@/components/layout'
import Head from 'next/head'
import { initializeApp } from 'firebase/app';
import Link from 'next/link'

const config = {
  apiKey: "AIzaSyBn95PrrNn0tQv6Jc__PV38422Sxos7nTk",
  authDomain: "thank-fish-66490.firebaseapp.com",
  projectId: "thank-fish-66490",
  storageBucket: "thank-fish-66490.appspot.com",
  messagingSenderId: "1068681262860",
  appId: "1:1068681262860:web:5d50c0319568c3cb053b29",
  measurementId: "G-W0RX4ZJSS0"
 }
 
initializeApp(config);

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Thank Fish Demo</title>
        </Head>
        <Container sm>
          <ul>
            <li>
              <Link href="/journal">Introspect</Link>
            </li>
            <li>
              <Link href="/productivity">Pomo timer</Link>
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  )
}
