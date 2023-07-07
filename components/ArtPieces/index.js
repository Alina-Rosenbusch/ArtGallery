import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <div key={piece.slug} className="art-piece">
            <Image
              src={piece.imageSource}
              width={200}
              height={300}
              alt="artpiece"
            />
            <h2> {piece.name}</h2>
            <p>{piece.artist}</p>
          </div>
        );
      })}
    </>
  );
}
