import React from "react";
import Head from "next/head";
const Title = ({ pageName }) => {
  return (
    <Head>
      <meta
        name="description"
        content="Decentralised Launchpad bought to you by Lena Instruments"
      />
      <title>{!pageName ? "CloudFunding" : `CloudFunding | ${pageName}`}</title>
    </Head>
  );
};

export default Title;
