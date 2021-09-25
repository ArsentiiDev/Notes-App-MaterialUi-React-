import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { FormControl, FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Radiogroup from "@material-ui/core/RadioGroup";
import { FormLabel } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("work");

  const handleTitleChange = (e) => {
    setTitle({ title: e.target.value });
  };
  const handleDetailsChange = (e) => {
    setDetails({ details: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    console.log(title.title);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      const data = {
        title: title.title,
        details: details.details,
        category: category,
      };
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => history.push("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={handleTitleChange}
          variant="outlined"
          label="Note title"
          fullWidth
          required
          className={classes.field}
          error={titleError}
        />
        <TextField
          onChange={handleDetailsChange}
          variant="outlined"
          label="Details"
          fullWidth
          multiline
          rows={4}
          required
          className={classes.field}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note category</FormLabel>
          <Radiogroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </Radiogroup>
        </FormControl>

        <Button
          type="Submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

      <br />
    </Container>
  );
}
