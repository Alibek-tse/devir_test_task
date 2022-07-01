import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./pages/MainLayout";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="posts" element={<PostsPage />}></Route>
          <Route path="posts/:id" element={<PostPage />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MainRoutes;
