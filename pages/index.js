import Spotlight from "@/components/Spotlight";


export default function SpotlightPage({pieces}) {
  
  function getRandomPiece() {
    return Math.floor(Math.random() * pieces.length);
  }

  const randomPieceIndex = getRandomPiece();

  return (
    <Spotlight
      image={pieces[randomPieceIndex].imageSource}
      artist={pieces[randomPieceIndex].artist}
    />
  );
}
