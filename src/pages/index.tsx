import Head from "next/head";
import HomePage from "../Components/Home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thuy Duong - Blog and About Me</title>
        <meta
          name="description"
          content="Hi everybody, I am Thuy Duong"
        />
        <meta property="title" content="Welcome, I’m glad you’re here" />
        <meta
          property="og:description"
          content="Hi everybody, I am Thuy Duong"
        />
        <meta name="author" content="Thuy Duong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
