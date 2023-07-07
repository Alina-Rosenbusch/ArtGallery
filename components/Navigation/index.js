import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">Spotlight</Link>{" "}
        </li>
        <li>
          <Link href="/art-pieces/">Art Pieces</Link>
        </li>
        <li>
          <Link href="#">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
