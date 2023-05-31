import { useRouter } from "next/router";

type RoutePathPros = {
  [key: string]: string;
};

export default function RoutePath() {
  const router = useRouter();
  const storeTitle =
    (router.query.params && router.query.params[0]) || "not store name";

  const page: RoutePathPros = {
    "/": "Home",
    "/about": "ABOUT ",
    "/store": "STORE",
    "/store/[...params]": `${storeTitle}`,
    "/404": "NotFound"
  };

  const selectRoute = page[router.pathname];

  return selectRoute;
}
