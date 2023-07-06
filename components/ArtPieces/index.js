export default function ArtPieces({ image, title, artist }) {
  return (
    <section className="Gallery">
      <div>
        <img>{image} </img>
        <h2> {title}</h2>
        <p>{artist}</p>
      </div>
    </section>
  );
}
