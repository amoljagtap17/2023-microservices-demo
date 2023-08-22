import { CircularProgress } from "@/components/lib";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography>Home Page!</Typography>
      <CircularProgress />
    </Stack>
  );
}
