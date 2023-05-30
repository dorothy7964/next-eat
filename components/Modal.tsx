import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Modal as MuiModal,
  Typography
} from "@mui/material";
import ReactHtmlParser from "react-html-parser";

type ModalProps = {
  open: boolean;
  storeData: any;
  setModalOpen: (isOpen: boolean) => void;
};

export default function Modal({ open, storeData, setModalOpen }: ModalProps) {
  const description =
    storeData.description &&
    storeData.description
      .replace(/</g, "&lt")
      .replace(/\n/g, "<br>")
      .replace(
        "LAST ORDER :",
        '<span style="color: #1976d2; font-weight: bold;">LAST ORDER :</span>'
      );

  return (
    <MuiModal
      open={open}
      onClose={() => setModalOpen(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Card sx={{ ...style, maxWidth: 600 }}>
        <Button
          sx={{ ...buttonStyle }}
          variant="text"
          onClick={() => setModalOpen(false)}
        >
          X
        </Button>
        <CardMedia
          component="img"
          alt="store-image"
          height="100"
          image={storeData.thumb}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {storeData.name}
          </Typography>
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
      </Card>
    </MuiModal>
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
