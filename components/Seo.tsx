import Head from "next/head";
import RoutePath from "./RoutePath";

export default function Seo() {
  const fullTitle = `${RoutePath()} | AWESOME FOOD STORE`;

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
}
