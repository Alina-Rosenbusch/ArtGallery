import ArtPiecesDetails from "@/components/ArtPiecesDetails";
import { useRouter } from "next/router";

export default function RenderArtPiecesDetails({ pieces }) {
  const router = useRouter();
  const page = router.query.slug;
  const findPieces = pieces.find((piece) => {
    return piece.slug === page;
  });
  //console.log(findPieces);
  //console.log(pieces);
  console.log(page);
  console.log(findPieces);
  console.log(router.query.slug);

  return (
    <>
      <ArtPiecesDetails
        image={findPieces.imageSource}
        artist={findPieces.artist}
        title={findPieces.name}
        year={findPieces.year}
        genre={findPieces.genre}
      />
    </>
  );
}
