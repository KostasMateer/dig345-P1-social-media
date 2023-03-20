import React, { useState, useEffect } from "react";
import { Grid, Stack } from "@mui/material";

import Navbar from "./components/NavBar/navbar.component";
import Post from "./components/Posts/post.component";
import UploadPostModal from "./components/modals/newpost/newpost.component";
import AboutModal from "./components/modals/about/aboutmodal.component";
import "./styles.css";

export default function App() {

  // API Call
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:8000/allposts")
    fetch("https://dig345-p1-social-media.vercel.app/allposts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setData("error");
        console.log(error);
      });
  }, []);

  // put data in earliest to latest post
  const newData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    
    <div className="App">
      <Navbar
        image={require("./images/logo.png")}
        title="What the @!#$!"
      ></Navbar>
      <div sx={{"marginTop": "74px"}}>
      <Grid container>
        <Grid className="dark-background" item xs={0} md={2}></Grid>
        <Grid className="lighter-background" item xs={12} md={8}>
          <Stack spacing={4}>
            {newData.map((item) => (
              <div key={item._id}>
                
                <Post
                  translated={item.translated}
                  language={item.language}
                  date={item.date}
                  index={item.profileIndex}
                  originalText={item.originalText}
                ></Post>
              </div>
            ))}
          </Stack>
        </Grid>
        <Grid className="dark-background" item xs={0} md={2}></Grid>
      </Grid>
      <UploadPostModal></UploadPostModal>
      <AboutModal></AboutModal>
      </div>
    </div>
  );
}
