import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: "40px",
    height: "40px",
    backgroundColor: red[400],
  },
}));

const CustomCard = ({ bottom, title, userName, userImage }) => {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.root}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      {bottom && (
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} src={userImage}>
              {userName[0].toUpperCase()}
            </Avatar>
          }
          title={
            <Typography variant="p" color="textSecondary">
              {userName}
            </Typography>
          }
        />
      )}
    </Card>
  );
};

export default CustomCard;
