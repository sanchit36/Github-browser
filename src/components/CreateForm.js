import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const CreateForm = ({
  open,
  error,
  handleClose,
  handleOnChange,
  values,
  handleAdd,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add New Repository</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography color="secondary">{error}</Typography>
        </DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="org"
          label="Owner/Organization"
          type="text"
          name="org"
          value={values.org}
          onChange={handleOnChange}
          required
          fullWidth
        />
        <TextField
          margin="dense"
          id="repo"
          label="Repository Name"
          type="text"
          name="repo"
          value={values.repo}
          onChange={handleOnChange}
          required
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateForm;
