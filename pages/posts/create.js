import { useEffect } from 'react'
import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Head from 'next/head'

export default function Create() {
  const [email, setEmail] = useEffect('')

  function updateEmail({ target: { value }}) {
    setEmail(value);
  }

  async function sendMessageRequest() {
    if (email !== '') {
      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    }
  }
  return (
    <>
      <Layout>
        <Head>
          <title>New message</title>
        </Head>
        <Container>
          <Intro />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            <input onChange={updateEmail} placeholder='Email' type="email" className="form-input px-4 py-3 rounded"></input>
            {/* <textarea placeholder='Content' className="form-textarea px-4 py-3 rounded"></textarea> */}
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded" type="button" onClick={sendMessageRequest}>Send</button>
          </div>
        </Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ preview }) {
//   const allPosts = (await getAllPostsForHome(preview)) || []
//   return {
//     props: { allPosts },
//   }
// }
