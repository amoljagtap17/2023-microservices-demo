"use client";
import { Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export function PostForm() {
  const { control, formState } = useFormContext();
  console.log("formState::", formState);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Title" variant="outlined" fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Content"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
