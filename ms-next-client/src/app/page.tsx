import { PostCreate, PostList } from "@/components/sections";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={2}>
      <PostCreate />
      <PostList />
    </Stack>
  );
}
