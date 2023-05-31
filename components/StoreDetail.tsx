import { IStoresAPI } from "@/types/stores";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

type StoreDetailProps = {
  storeData: IStoresAPI;
};

export default function StoreDetail({ storeData }: StoreDetailProps) {
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
