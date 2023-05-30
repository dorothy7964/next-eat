import { useRouter } from "next/router";

type RoutePathPros = {
  [key: string]: string;
};

export default function RoutePath() {
  const router = useRouter();
  const movieTitle =
    (router.query.params && router.query.params[0]) || "not movie title";

  const page: RoutePathPros = {
    "/": "Home",
    "/about": "About",
    "/movies/[...params]": `${movieTitle}`,
    "/404": "NotFound"
  };

  const selectRoute = page[router.pathname];

  return selectRoute;
}
