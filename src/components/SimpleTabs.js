import React, { useEffect, useState } from "react";
import TabPanel from "../components/TabPanel";
import {
  AppBar,
  List,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import CustomCard from "./CustomCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SimpleTabs = ({ repo }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [branches, setBranches] = useState([]);
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchBranches = async () => {
    setError(null);
    const url = `https://api.github.com/repos/${repo.fullname}/branches`;
    const response = await fetch(url);
    if (response.status === 200) {
      const result = await response.json();
      setBranches(result);
    }
    setError("Something went wrong, Try Again!");
  };

  const fetchIssues = async () => {
    setError(null);
    const url = `https://api.github.com/repos/${repo.fullname}/issues`;
    const response = await fetch(url);
    if (response.status === 200) {
      const result = await response.json();
      setIssues(result);
    }
    setError("Something went wrong, Try Again!");
  };

  useEffect(() => {
    if (value === 0) {
      fetchBranches();
    } else {
      fetchIssues();
    }
  }, [value, repo]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs">
          <Tab label="Branches" {...a11yProps(0)} />
          <Tab label="Issues" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {error ? (
          <List>
            {branches.map((branch) => (
              <CustomCard key={branch.name} title={branch.name} />
            ))}
          </List>
        ) : (
          <Typography color="secondary">{error}</Typography>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {error ? (
          <List>
            {issues.map((issue) => (
              <CustomCard
                key={issue.id}
                bottom
                title={issue.title}
                userName={issue.user.login}
                userImage={issue.user.avatar_url}
              />
            ))}
          </List>
        ) : (
          <Typography color="secondary">{error}</Typography>
        )}
      </TabPanel>
    </div>
  );
};

export default SimpleTabs;
