import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return <h1>Welcome to Awesome Food Store!</h1>;
}
