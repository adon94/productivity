import Container from '@/components/container'
import Heading from '@/components/heading'
import Layout from '@/components/layout'
import DemoForm from '@/components/demo-form'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Introspect</title>
        </Head>
        <Container sm>
          <Heading mainText="What inspires you?" subText="1/3" />
          <DemoForm />
        </Container>
      </Layout>
    </>
  )
}
