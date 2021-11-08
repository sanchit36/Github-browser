import React from "react";
import { Container, Grid } from "@material-ui/core";
import CustomCard from "../components/CustomCard";

const Home = ({ activeRepo }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
