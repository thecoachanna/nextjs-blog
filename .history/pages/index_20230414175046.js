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
          Hi! I'm Anna, a weight-inclusive fitness coach turned Software Engineer Intern.
        </p>
        <p>
          Anna loves living in Atlanta, walking the BeltLine, lifting weights, watching reality dating shows with her fiance’, and making new friends in tech!
        </p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}