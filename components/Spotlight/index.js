import Image from "next/image";
export default function Spotlight({ image, artist }) {
  return (
    <div className="spotligth">
      <Image src={image} width={300} height={450} alt="Spotlight" />
      <p>{artist}</p>
    </div>
  );
}
