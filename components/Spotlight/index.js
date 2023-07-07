import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
export default function Spotlight({ image, artist }) {
  return (
    <div className="spotlight">
      <FavoriteButton />
      <Image src={image} width={300} height={450} alt="Spotlight" />
      <p>{artist}</p>
    </div>
  );
}
