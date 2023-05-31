import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <h1>
      Welcome to Awesome Food Store!
      <style jsx>{`
        h1 {
          font-size: 2rem;
          border: 3px dashed #c6c6c6;
          padding: 1.6em;
        }
      `}</style>
    </h1>
  );
}
