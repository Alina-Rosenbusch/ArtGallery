import Image from "next/image";

export default function ArtPieceDetail({ image, title, artist, year, genre }) {
  return (
    <div className="art-piece-details">
      <Image src={image} width={300} height={450} alt="artpiece" />
      <h2>{title}</h2>
      <p>
        <span>Artist: </span> {artist}
      </p>
      <p>
        <span>Year: </span>
        {year}
      </p>
      <p>
        <span>Genre: </span> {genre}
      </p>
    </div>
  );
}
