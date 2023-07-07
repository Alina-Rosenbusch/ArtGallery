import ArtPieces from "@/components/ArtPieces";

export default function RenderArtPieces({ pieces }) {
  return (
    <section className="Gallery">
      <ArtPieces pieces={pieces} />;
    </section>
  );
}
