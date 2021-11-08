import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import CustomCard from "../components/CustomCard";
import SimpleTabs from "../components/SimpleTabs";

const Home = ({ repos, setRepos, activeRepo, setActiveRepo }) => {
  const history = useHistory();

  const handleDelete = () => {
    const newRepos = repos.filter((r) => r.id !== activeRepo.id);
    setActiveRepo(null);
    history.push("/");
    setRepos(newRepos);
  };

  return (
    <Container>
      {activeRepo ? (
        <>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                {activeRepo.name}
              </Typography>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {activeRepo.ownerName}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {activeRepo.description}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={handleDelete}
                color="secondary"
                variant="contained"
              >
                Delete
              </Button>
            </Grid>
          </Grid>

          <SimpleTabs />
        </>
      ) : (
        <Typography variant="h6" align="center">
          Click on a repo to select or add new repository
        </Typography>
      )}
    </Container>
  );
};

export default Home;
