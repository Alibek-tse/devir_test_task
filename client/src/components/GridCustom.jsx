import { Grid } from "@mui/material";

const GridCustom = ({ children }) => (
  <Grid item xl={3.5} lg={3.5} md={3.5} sm={3.5} sx={{ textAlign: "center" }}>
    {children}
  </Grid>
);

export default GridCustom;
