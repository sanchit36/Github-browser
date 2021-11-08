import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { useHistory, useLocation } from "react-router";
import CreateForm from "./CreateForm";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  page: {
    backgroundColor: "#f4f4f4",
    flex: 1,
    padding: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: "#f4f4f4",
  },
  title: {
    padding: theme.spacing(2),
  },
  floatingBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Layout = ({ children, repos, setRepos, setActiveRepo }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const INITIAL_STATE = {
    org: "",
    repo: "",
  };
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [values, setValues] = useState(INITIAL_STATE);

  // Functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleActiveRepo = (repo) => {
    setActiveRepo(repo);
    history.push(repo.path);
  };

  const handleAdd = async () => {
    setError(null);
    const url = `https://api.github.com/repos/${values.org}/${values.repo}`;
    const response = await fetch(url);
    if (response.status === 200) {
      const result = await response.json();
      const newRepo = {
        id: result.id,
        name: result.name,
        fullname: result.full_name,
        ownerName: result.owner.login,
        ownerAvatar: result.owner.avatar,
        description: result.description,
        path: `/${result.name}`,
      };
      setRepos([newRepo, ...repos]);
      setValues(INITIAL_STATE);
      handleActiveRepo(newRepo);
      handleClose();
      return;
    }
    setError("Something went wrong, Try Again!");
  };

  return (
    <div className={classes.root}>
      {/* App bar */}

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* Title */}
        <div>
          <Typography variant="h5" className={classes.title}>
            Github Browser
          </Typography>
        </div>

        {/* List of Repos */}
        <List>
          {repos.map((item) => (
            <ListItem
              button
              key={item.id}
              className={
                location.pathname === item.path ? classes.active : null
              }
              onClick={() => handleActiveRepo(item)}
            >
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="h6">{item.name}</Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography variant="body2">{item.description}</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>

        <Fab
          onClick={handleClickOpen}
          color="secondary"
          aria-label="add"
          className={classes.floatingBtn}
        >
          <AddIcon />
        </Fab>
      </Drawer>

      <div className={classes.page}>{children}</div>

      <CreateForm
        open={open}
        values={values}
        error={error}
        handleClose={handleClose}
        handleOnChange={handleOnChange}
        handleAdd={handleAdd}
      />
    </div>
  );
};

export default Layout;
