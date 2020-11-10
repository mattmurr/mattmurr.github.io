import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import * as gtag from "../lib/gtag";

import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Matthew Murray</title>
        <meta
          name="description"
          content="I'm a data engineer, looking to expand knowledge to become a technology polyglot. I also blog about BSD, Linux and self-hosting open-source software."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
