import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <Link href={`/art-pieces/${piece.slug}`} key={piece.slug}>
            <div className="art-piece">
              <Image
                src={piece.imageSource}
                width={200}
                height={300}
                alt="artpiece"
              />
              <h2>{piece.name}</h2>
              <p>{piece.artist}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
