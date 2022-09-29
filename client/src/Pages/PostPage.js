import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Collapses from "../component/Collapse";
import NavPost from "../component/NavPost";
import { AddPost } from "../redux/PostSlice";

const PostPage = () => {
  const [newPost, setNewPost] = useState({});
  const HandleChange = (e) => {
    setNewPost({ ...setNewPost, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const Adding = (e) => {
    e.preventDefault();
    dispatch(AddPost(newPost));
    document.getElementById("postText").value = "";
  };
  return (
    <div>
      <NavPost></NavPost>
      <div
        className="sidebar-btn-wrapper"
        style={{
          padding: "20px 5px",
        }}
      >
        <div >
          <div>
            <form className="post__form">
              <TextField
                label="Add Post"
                id="postText"
                size="small"
                variant="outlined"
                name="Posting"
                className="post__input"
                placeholder="Add Post"
                onChange={HandleChange}
              />
              <Button
                className="buttonQ"
                variant="contained"
                size="small"
                onClick={Adding}
              >
                Add Post
                <BiMessageAdd className="Q" />
              </Button>
            </form>
          </div>
          
        </div>
      </div>
      {/* <QR></QR> */}
      <div className="blog">
      <Collapses></Collapses>
      <img src="../bgPost.jpg" alt="back"></img>
      </div>
    </div>
  );
};

export default PostPage;
