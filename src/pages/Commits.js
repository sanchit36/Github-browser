import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Container, List, Typography } from "@material-ui/core";
import CustomCard from "../components/CustomCard";

const Commits = () => {
  const { orgName, repoName } = useParams();
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const branchName = location.state;

  useEffect(() => {
    const fetchCommits = async () => {
      setError(null);
      const url = `https://api.github.com/repos/${orgName}/${repoName}/commits?sha=${branchName}`;
      const response = await fetch(url);
      if (response.status === 200) {
        const result = await response.json();
        setCommits(result);
      }
      setError("Something went wrong, Try Again!");
    };
    fetchCommits();
  }, []);

  return (
    <Container>
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Commits: {branchName}
        </Typography>
      </div>
      <div>
        {error ? (
          <List>
            {commits.map((commit) => (
              <CustomCard
                key={commit.sha}
                bottom
                title={commit.commit.message}
                subtitle={commit.commit.author.date}
                userName={commit.author.login}
                userImage={commit.author.avatar_url}
              />
            ))}
          </List>
        ) : (
          <Typography color="secondary">{error}</Typography>
        )}
      </div>
    </Container>
  );
};

export default Commits;
