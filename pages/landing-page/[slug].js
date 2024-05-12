import Head from 'next/head'
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import camelcaseKeys from 'camelcase-keys';

import { getLandingPage, getLandingPages, getPostsData } from '@/lib/api'

import LandingPageSection from '@/components/landing-page-sections/landing-page-section'
import Blog from "@/components/blog/blog";
import Preloader from '@/components/preloader';

export default function LandingPage({ page, blogPosts }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Preloader />
  }

  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{page.fields.seo.title}</title>
        <meta name="description" content={page.fields.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="https://buttercms.com/static/v2/images/favicon.png" />
      </Head>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66405d0207f59932ab3e9c9a/1htlmml37';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

      {page.fields.body.map(({ type, fields: sectionData }, index) =>
        <LandingPageSection
          key={index}
          type={type}
          sectionData={sectionData}
        />
      )}
      <Blog posts={blogPosts} />
    </>
  )
}

export async function getStaticProps({ params }) {
  try {
    const page = await getLandingPage(params.slug);
    const blogPosts = (await getPostsData({page: 1, pageSize: 2})).posts

    return { props: { page: camelcaseKeys(page), blogPosts: camelcaseKeys(blogPosts) } };
  } catch (e) {
    console.error(`Couldn't load content for Landing page ${params.slug}.`, e)

    return {
      notFound: true
    }
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY

  if (butterToken) {
    try {
      const landingPages = await getLandingPages();

      return {
        paths: landingPages.map((page) => `/landing-page/${page.slug}`),
        fallback: true,
      };
    } catch (e) {
      console.error("Couldn't load content for Landing pages.", e)
    }

    return {
      paths: [],
      fallback: false,
    };
  }
}
