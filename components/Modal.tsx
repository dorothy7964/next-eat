import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";

type ModalProps = {
  open: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

export default function Modal({ open, setModalOpen }: ModalProps) {
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

  return (
    <MuiModal
      open={open}
      onClose={() => setModalOpen(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 200 }}>
        <h2 id="child-modal-title">Text in a child modal</h2>
        <p id="child-modal-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Button onClick={() => setModalOpen(false)}>Close Child Modal</Button>
      </Box>
    </MuiModal>
  );
}
