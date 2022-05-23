import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from "firebase/functions";
import 'firebase/auth';
import 'firebase/functions';

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
 
//  export const app = firebase.app();
//  export const auth = firebase.auth();
export const functions = getFunctions();

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
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
