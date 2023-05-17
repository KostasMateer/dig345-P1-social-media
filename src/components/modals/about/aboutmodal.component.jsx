import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  outline: "none"
};

export default function AboutModal() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem("aboutModalShown");
    if (!hasModalBeenShown) {
      setOpen(true);
      localStorage.setItem("aboutModalShown", "true");
    }
  }, []);
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome to <i>Lost in Translation</i>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We are a social media platform that celebrates language and culture.
            Our mission is to bring people together, bridging gaps between
            languages and cultures. Share your thoughts, experiences, and
            perspectives with a global audience. Post messages in a language you
            don't understand and challenge yourself to learn new ways of
            communicating. Join our community and start sharing your voice with
            the world.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
