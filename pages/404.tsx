import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div>
      <h1>요청하신 페이지는 존재하지 않습니다.</h1>
    </div>
  );
}
