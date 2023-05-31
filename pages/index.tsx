import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Awesome Food Store!</h1>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
        h1 {
          font-size: 2rem;
          border: 3px dashed #c6c6c6;
          padding: 1.6em;
        }
      `}</style>
    </div>
  );
}
