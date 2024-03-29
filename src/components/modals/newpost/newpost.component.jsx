import { useState } from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Fab, TextField, Button, IconButton } from "@mui/material";

const MAX_CHARACTERS = 100;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
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
    width: "100%",
    marginLeft: "auto",
  },
  ticker: {
    color: "#484848",
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "20px",
    marginBottom: "10px",
  },
};

export default function PostModal() {
  const [open, setOpen] = useState(false);
  const handleCloseNewPost = () => {
    setOpen(false);
    window.location.reload();
    // setTimeout(window.location.reload(), 2000)
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => setOpen(true);

  const [postText, setPostText] = useState("");

  const [charactersRemaining, setCharactersRemaining] =
    useState(MAX_CHARACTERS);

  const handlePostTextChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 250) {
      setPostText(inputText);
      setCharactersRemaining(MAX_CHARACTERS - inputText.length);
    }
  };

  const handlePostUpload = () => {
    // Handle post upload logic here
    console.log(`Uploading post with text: ${postText}`);
    fetch(`https://dig345-p1-social-media.vercel.app/api/${postText}`).then(
      () => {
        // Reset post text after upload
        setPostText("");
        // Close the modal after upload
        handleCloseNewPost();
      }
    );
  };

  return (
    <div>
      <Fab
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={handleOpen}
        color="#484848"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: "absolute", top: 0, left: 0 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <form onSubmit={handlePostUpload}>
            <TextField
              id="post-text-input"
              label="Post text"
              variant="outlined"
              value={postText}
              onChange={handlePostTextChange}
              sx={style.inputField}
              inputProps={{
                maxLength: MAX_CHARACTERS,
              }}
            />
            <Typography sx={style.ticker}>{charactersRemaining}</Typography>
            <div style={style.buttonContainer}>
              <Button variant="contained" color="primary" type="submit">
                Upload
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
