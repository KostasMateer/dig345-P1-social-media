import { useState } from "react";
import { Typography, Paper, Grid, Stack } from "@mui/material"
import "./post.style.css"

const images = [require('../../images/laughingcat.png'), require('../../images/sadcat.png'), require('../../images/scaredcat.png'), require('../../images/smilingcat.png'), require('../../images/smirkcat.png')];

function Post(props) {
  const date = new Date(props.date);
  const fullDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
  const timeOfPost = `${(date.getHours < 12) ? date.getHours() : date.getHours() - 12}:${date.getMinutes()}${(date.getHours < 12) ? "am" : "pm"}`

  const [text, setText] = useState(props.translated);

  const handleClick = () => {
    setText(text === props.translated ? props.originalText : props.translated);
  };

  const randomProfile = images[props.index];
    return (
      <Paper className="post-color">
        <Grid className="spacing + no-top-padding" container columns={8} spacing={2}>
          <Grid item xs={1}>
            <img src={randomProfile} alt="Profile Pic" height={50} width={50} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">User</Typography>
            <Typography className="hovering" onClick={handleClick} variant="body1">{text}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Stack>
            <Typography variant="subtitle1">{props.language}</Typography>
            <Typography variant="caption">{fullDate}</Typography>
            <Typography variant="caption">{timeOfPost}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    );
}

export default Post;
