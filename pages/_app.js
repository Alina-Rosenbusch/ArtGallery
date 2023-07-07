import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Header from "@/components/Header";

import Layout from "@/components/Layout";
import "./global.css";

async function myFetcher(url) {
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(url);

  if (error) {
    return <div> Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher: myFetcher }}>
        <Header />
        <Component {...pageProps} pieces={data} />
        <Layout />
      </SWRConfig>
    </>
  );
}
