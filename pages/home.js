import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import withAnalytics from "../src/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Title>Home</Title>
    <img src="/static/todoroki.png" width="200" />
    <Link href="/users">
      <a>Users</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
