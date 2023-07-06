import ArtPieces from "@/components/ArtPieces";
import { useEffect } from "react";
import useSWR from "swr";
import { useState } from "react";
import Spotlight from "@/components/Spotlight";
const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(url);
  function getRandomPiece() {
    const length = data.length;
    const randomIndex = Math.floor(Math.random() * length);
    return randomIndex;
  }

  if (error) {
    return <div> Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      <h1>Art Gallery !</h1>
      <section className="Gallery">
        {/* <ArtPieces pieces={data} />
        <Spotlight
          image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
          artist="rubens"
        /> */}
      </section>
    </div>
  );
}
