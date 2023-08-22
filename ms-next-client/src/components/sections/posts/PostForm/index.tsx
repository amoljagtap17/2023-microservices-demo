"use client";
import { Grid, TextField } from "@mui/material";

export function PostForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="content"
          name="content"
          label="Content"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
