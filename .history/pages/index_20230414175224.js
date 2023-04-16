import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Anna! A weight-inclusive fitness coach turned Software Engineer Intern.
        </p>
        <p>
          I live in Atlanta and enjoy walking the BeltLine, lifting weights, watching reality dating shows with my fiance’, and making new friends in tech!
        </p>
        <p>Follow me on <a>Twitter</a></p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}