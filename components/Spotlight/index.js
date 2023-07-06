import Image from "next/image";
export default function Spotlight({ image, artist }) {
  return (
    <div className="spotligth">
      <Image src={image} width={200} height={300} alt="Spotlight" />
      <p>{artist}</p>
    </div>
  );
}
