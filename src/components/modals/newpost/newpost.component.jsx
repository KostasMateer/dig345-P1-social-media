import { useState } from "react";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Fab, TextField, Button } from "@mui/material";

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
  outline: "none",
  borderRadius: "10px",
  inputField: {
    width: "100%",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default function PostModal() {
  const [open, setOpen] = useState(false);
  const handleCloseNewPost = () => {
    setOpen(false)
    setTimeout(window.location.reload(), 2000)
  };

  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = () => setOpen(true);

  const [postText, setPostText] = useState("");

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostUpload = () => {
    // Handle post upload logic here
    console.log(`Uploading post with text: ${postText}`);
    fetch(`http://localhost:8000/api/${postText}`)

    // Reset post text after upload
    setPostText("");

    // Close the modal after upload
    handleCloseNewPost();
  };

  return (
    <div>
      <Fab sx={{position: 'fixed', bottom: 16, right: 16}} onClick={handleOpen} color="#484848" aria-label="add">
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Add form fields here to allow the user to upload a post */}
          </Typography>
          <TextField
          id="post-text-input"
          label="Post text"
          variant="outlined"
          value={postText}
          onChange={handlePostTextChange}
          sx={style.inputField}
        />
        <div sx={style.buttonContainer}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handlePostUpload}>
            Upload
          </Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}