import GlobalStyle from "../styles";

import useSWR from "swr";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "./global.css";

async function myFetcher(url) {
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}
const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(url, myFetcher);

  if (error) {
    return <div> Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} pieces={data} />
      <Layout />
    </>
  );
}
