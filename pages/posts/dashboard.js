import Head from 'next/head'
import Container from '@/components/container'
import Heading from '@/components/heading'
import Layout from '@/components/layout'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import { getAllPostsForHome } from '@/lib/api'

export default function Dashboard({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Container>
          <Heading />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.metadata.cover_image}
              date={heroPost.created_at}
              author={heroPost.metadata.author}
              slug={heroPost.slug}
              excerpt={heroPost.metadata.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}
