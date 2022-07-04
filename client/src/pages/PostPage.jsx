import { Button, Container, InputLabel, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hooks";

export default function PostPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState();
  const { loading, request, error } = useHttp();
  const postRequest = async () => {
    try {
      const data = await request(`/api/post/${params.id}`, "GET", null, {});
      setPost(data);
    } catch (error) {}
  };

  const updateRequest = async (putData) => {
    try {
      const data = await request(
        `/api/post/edit/${params.id}`,
        "PUT",
        putData,
        {}
      );
    } catch (error) {}
  };

  useEffect(() => {
    postRequest();
  }, []);

  const defaultValues = {
    title: "",
    descriptions: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
    reset,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    reset({
      title: post?.title,
      description: post?.description,
    });
  }, [post]);
  const onSubmit = (data) => {
    const result = {
      title: String(getValues().title),
      description: String(getValues().description),
    };
    updateRequest(result);
    reset();
    navigate(-1);
  };

  return (
    <Container
      sx={{
        height: "70vh",
        width: "100%",
        overflowY: "auto",
        mt: 5,
        cursor: "pointer",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={3}>
          <Stack direction="column">
            <InputLabel>Заголовок</InputLabel>
            <TextField
              {...register("title", { required: true })}
              placeholder="Введите наименование заголовка"
            />
          </Stack>

          <Stack direction="column">
            <InputLabel>Описание</InputLabel>
            <TextField
              placeholder="Введите описание поста"
              multiline
              rows={2}
              maxRows={4}
              {...register("description", { required: true })}
            />
          </Stack>
        </Stack>
        <Button type="submit" disabled={!isValid || !isDirty}>
          Отправить
        </Button>
        <Button
          type="submit"
          onClick={() => navigate(-1)}
        >
          Отмена
        </Button>
      </form>
    </Container>
  );
}
