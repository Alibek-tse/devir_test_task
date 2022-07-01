import React, { useState } from "react";
import { useHttp } from "../hooks/http.hooks";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ModalCreatePost from "./ModalCreatePost";

const PostPage = () => {
  const [posts, setPosts] = useState();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  
  const { loading, request, error } = useHttp();
  const postRequest = async () => {
    try {
      const data = await request("/api/post/", "GET", null, {});
      setPosts(data);
    } catch (error) {}
  };

  useEffect(() => {
    postRequest();
  }, [posts]);

  return (
    <>
      <Button sx={{ p: 2, m: 2 }} onClick={() => setModal(true)}>
        ДОБАВИТЬ ПОСТ
      </Button>
      <Container
        sx={{
          height: "70vh",
          width: "100%",
          overflowY: "auto",
          mt: 5,
          cursor: "pointer",
        }}
      >
        <Stack direction="column" spacing={2}>
          {posts?.map((item) => {
            return (
              <Box
                key={item.title}
                sx={{
                  border: "1px solid black",
                  borderRadius: '10px',
                  p: 2,
                  maxHeight: "8vh",
                  overflow: "hidden",
                }}
                onClick={() => navigate(`${item._id}`)}
              >
                <Typography>{item.title}</Typography>
                <Typography>{item.description}</Typography>
              </Box>
            );
          })}
        </Stack>
      </Container>
      <ModalCreatePost open={modal} handleClose={setModal} />
    </>
  );
};
export default PostPage;
