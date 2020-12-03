import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, Myself Arjun Kava. I am co-founder at Zujo. You can contact me
          on <Link href="https://www.linkedin.com/in/arjun-kava">LinkedIn</Link>
          ,<Link href="https://twitter.com/Arjun_Kava">Twitter</Link>
        </p>
      </section>
    </Layout>
  );
}
