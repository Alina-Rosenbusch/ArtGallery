import react from "react";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img>{image} </img>
      <h2> {title}</h2>
      <p>{artist}</p>
    </div>
  );
}
