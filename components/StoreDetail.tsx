import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import { useRouter } from "next/router";

type StoreDetailProps = {
  storeData: any;
};

export default function StoreDetail({ storeData }: StoreDetailProps) {
  const router = useRouter();

  const isDetailPage = router.pathname === "/store/[id]";

  const description =
    storeData &&
    storeData.description &&
    storeData.description
      .replace(/</g, "&lt")
      .replace(/\n/g, "<br>")
      .replace(
        "LAST ORDER :",
        '<span style="color: #1976d2; font-weight: bold;">LAST ORDER :</span>'
      );

  return (
    <div>
      <CardContent>
        <Link href={`/store/${storeData.name}/${storeData.id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {storeData.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {ReactHtmlParser(description)}
        </Typography>
      </CardContent>
      <CardActions>
        {storeData.url && (
          <Button size="small" href={storeData.url} target="_blank">
            홈페이지 바로가기
          </Button>
        )}
      </CardActions>
    </div>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  outline: "none"
};

const buttonStyle = {
  position: "absolute" as "absolute",
  right: 0,
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "#fff",
  cursor: "pointer"
};
