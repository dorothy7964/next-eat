import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <nav>
      <h1>
        <Link href="/">AWESOME FOOD STORE</Link>
      </h1>
      <div>
        <Link href="/about">
          <span className={router.pathname === "/about" ? "active" : ""}>
            ABOUT 
          </span>
        </Link>
        <Link href="/store">
          <span className={router.pathname === "/store" ? "active" : ""}>
            STORE
          </span>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          display: flex;
          justify-content: space-between;
          background-color: cornflowerblue;
          padding: 10px;
        }
        h1 {
          font-weight: bold;
        }
        nav span {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
