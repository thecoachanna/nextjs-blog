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
        <p>Hi! I'm Anna, a weight-inclusive fitness coach turned Software Engineer Intern.who is looking for her first full time role in tech where she can combine her newly acquired technical skills with her love of connecting with and supporting humans.
She attributes part of her career change from fitness to moving to Atlanta and being exposed to so many peers working within the tech industry. It sparked an interest in her that she has been relentlessly pursuing for the past year through a 6 month coding boot camp and now, internship.
Anna believes strongly in representation in the tech industry - specifically among women and people of color - and how seeing people who have similar backgrounds to you can help to build self-efficacy and the belief that “if they can do it, I can too.” If it wasn’t for that representation she would have never considered this career change for herself.
Anna loves living in Atlanta, walking the BeltLine, lifting weights, watching reality dating shows with her fiance’, and making new friends in tech!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}