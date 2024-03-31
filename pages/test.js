import Head from "next/head";
import { getHomePage } from "../lib/api";
import parse from "html-react-parser";
import TestComponent from "@/components/test-page-sections/test-component";

export default function Index({
  
  test_component = [],
}) {
    return (
        <div>
            <Head>
                <title>Test</title>
            </Head>
            <TestComponent fields = { test_component }/>
        </div>
    );
}

export async function getStaticProps() {
    const homePageData = await getHomePage();
    const {
      test_component = [],

    } = homePageData.fields;

    return {
        props: {
          test_component,
        },
    };
}