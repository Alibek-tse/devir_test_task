import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    postRequest();
  }, []);

  return <div style={{ padding: "12rem" }}>{post?.description}</div>;
}

