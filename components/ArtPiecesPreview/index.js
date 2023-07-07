import react from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div key={piece.slug} className="art-piece-details">
      <Image src={image} width={200} height={300} alt="artpiece" />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
