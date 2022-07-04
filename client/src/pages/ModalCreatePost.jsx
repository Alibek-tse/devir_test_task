import {
  Box,
  Button,
  InputLabel,
  Modal,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useHttp } from "../hooks/http.hooks";

const BoxCustom = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "504px",
  backgroundColor: "#fff",
  padding: "30px",
  transform: "translate(-50%, -50%)",
  borderRadius: "10px",
  opacity: 1,
  overflow: "hidden",
});

export default function ModalCreatePost({ open, handleClose, postRequest }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
    reset,
  } = useForm({ mode: "onChange" });
  const { loading, request, error } = useHttp();
  const addPost = async (postData) => {
    try {
      const data = await request("/api/post/create", "POST", postData);
      console.log("Data", data);
    } catch (error) {}
  };

  const onSubmit = (data) => {
    const result = {
      title: String(getValues().title),
      description: String(getValues().description),
    };
    addPost(result);
    reset();
    postRequest();
    handleClose(false);
  };

  return (
    <Modal open={open} onClose={() => handleClose(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxCustom>
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
          <Button type="submit" disabled={!isValid}>
            Отправить
          </Button>
        </BoxCustom>
      </form>
    </Modal>
  );
}
