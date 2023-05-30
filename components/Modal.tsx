import {
  Box,
  Button,
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
    storeData.description && storeData.description.replace(/\n/g, "<br>");

  return (
    <MuiModal
      open={open}
      onClose={() => setModalOpen(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 600 }}>
        <Button onClick={() => setModalOpen(false)}>X</Button>
        <img src={storeData.thumb} />
        <Typography id="transition-modal-title" variant="h6" component="h2">
          {storeData.name}
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          {ReactHtmlParser(description)}
        </Typography>
        {storeData.url && <Link href={storeData.url}>홈페이지 바로가기</Link>}
      </Box>
    </MuiModal>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};
