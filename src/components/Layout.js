import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { useLocation } from "react-router";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
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

const Layout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      text: "Repo 1",
      description: "This is description for repo",
      path: "/repo1",
    },
    {
      text: "Repo2",
      description: "This is description for repo",
      path: "/repo2",
    },
  ];

  // Functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="h6">{item.text}</Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography noWrap variant="body2">
                      {item.description}
                    </Typography>
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

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Repository</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new repository, please enter Owner/Organization name and
            Repository name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="org"
            label="Owner/Organization"
            type="text"
            required
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="repo"
            label="Repository Name"
            type="text"
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Layout;
