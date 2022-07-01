import React from "react";
import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import image from "../assets/main.jpg";
import GridCustom from "./GridCustom";

const BoxCustom = styled(Box)`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 70vh;
`;

const TypographyCustom = styled(Typography)({
  color: "#ecf9d2f2",
});

const ContainerCustom = styled(Container)(({ theme }) => ({
  height: "50vh",
  background: "red",
  marginTop: "40px",
  borderRadius: 20,
  boxShadow: "22px 15px 8px 0px rgba(34, 60, 80, 0.2)",
  backgroundColor: "#e1e1e1",
  overflow: "hidden",
  [theme.breakpoints.down("xl")]: {
    width: "calc(100% - 50px)",
    marginTop: "50px",
  },
  [theme.breakpoints.down("lg")]: {
    height: "calc(100% - 8vh)",
  },
  [theme.breakpoints.down("md")]: {
    overflowY: "scroll",
  },
}));

const BodyMain = ({ children }) => {
  return <BoxCustom>{children}</BoxCustom>;
};

const Title = ({ title = "", subTitile = "", ...props }) => (
  <Container>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ pt: 5 }}
      spacing={2}
    >
      <TypographyCustom sx={{ fontSize: { lg: 60, md: 45, sm: 35, xs: 25 } }}>
        {title}
      </TypographyCustom>
      <TypographyCustom
        sx={{
          textAlign: "center",
          fontSize: { lg: 23, md: 15, sm: 10, xs: 10 },
        }}
      >
        {subTitile}
      </TypographyCustom>
    </Stack>
  </Container>
);
const Content = ({ content = "" }) => (
  <ContainerCustom>
    <Grid container spacing={1} justifyContent="space-between" sx={{ p: 2 }}>
      {content.map((item) => (
        <GridCustom key={item.title}>
          <Stack direction="column" spacing={2}>
            <Box sx={{ maxWidth: "100%", maxHeight: "100%" }}>
              <img
                src={item.img}
                style={{ width: "100%", height: "180px", borderRadius: "10px" }}
              />
            </Box>
            <TypographyCustom
              sx={{
                textAlign: "center",
                fontSize: { lg: 18, md: 15, xs: 12 },
                color: "black",
              }}
            >
              {item.description}
            </TypographyCustom>
          </Stack>
        </GridCustom>
      ))}
    </Grid>
  </ContainerCustom>
);

BodyMain.Title = Title;
BodyMain.Content = Content;

export default BodyMain;
