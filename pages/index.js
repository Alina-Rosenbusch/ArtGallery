import ArtPieces from "@/components/ArtPieces";
import React from "react";
import useSWR from "swr";
const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(url);
  if (error) {
    return <div> Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div> Loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <h1>Art Gallery !</h1>
      <section className="Gallery">
        <ArtPieces pieces={data} />
      </section>
    </div>
  );
}
