import React from "react";
import Head from "next/head";

import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
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
