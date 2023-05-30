import { useRouter } from "next/router";

type RoutePathPros = {
  [key: string]: string;
};

export default function RoutePath() {
  const router = useRouter();
  console.log("📢 [RoutePath.tsx:9]", router);
  const storeTitle =
    (router.query.params && router.query.params[0]) || "not store name";

  const page: RoutePathPros = {
    "/": "Home",
    "/about": "ABOUT ",
    "/store": "STORE",
    "/store/[id]": `${storeTitle}`,
    "/404": "NotFound"
  };

  const selectRoute = page[router.pathname];

  return selectRoute;
}
