import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Head from 'next/head'
import DemoForm from '@/components/demo-form'

export default function Create() {
  return (
    <>
      <Layout>
        <Head>
          <title>New message</title>
        </Head>
        <Container>
          <Intro />
          <DemoForm />
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
