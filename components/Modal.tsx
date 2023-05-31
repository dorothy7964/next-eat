import { Button, Card, CardMedia, Modal as MuiModal } from "@mui/material";
import StoreDetail from "./StoreDetail";

type ModalProps = {
  open: boolean;
  storeData: any;
  setModalOpen: (isOpen: boolean) => void;
};

export default function Modal({ open, storeData, setModalOpen }: ModalProps) {
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
        <StoreDetail storeData={storeData} />
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
