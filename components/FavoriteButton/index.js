import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button type="button" className="favorite-button">
      <Image
        src="/resources/assets/heart.svg"
        width={40}
        height={40}
        alt="Favorite Button"
      />
    </button>
  );
}
