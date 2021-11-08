import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  avatar: {
    width: "30px",
    height: "30px",
    backgroundColor: red[400],
  },
});

const CustomCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={1} className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Hello World
          </Typography>
        </CardContent>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>R</Avatar>}
          title="Author"
        />
      </Card>
    </div>
  );
};

export default CustomCard;
