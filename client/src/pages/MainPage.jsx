import React from "react";
import BodyMain from "../components/BodyMain";
import first from "../assets/1.jpeg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";

const MainPage = () => {
  const content = [
    {
      img: first,
      title: "First",
      desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    },
    {
      img: second,
      title: "Second",
      desc: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
    {
      img: third,
      title: "Thirs",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised ",
    },
  ];
  const subTitle = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `;
  return (
    <BodyMain>
      <BodyMain.Title title="Главная страница" subTitile={subTitle} />
      <BodyMain.Content content={content} />
    </BodyMain>
  );
};
export default MainPage;
