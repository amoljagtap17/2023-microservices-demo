"use client";
import { Button } from "@/components/lib";
import { useState } from "react";
import { PostDialog } from "../PostDialog";

export function PostCreate() {
  const [showPostDialog, setShowPostDialog] = useState(false);

  const toggleShowPostDialog = () => {
    setShowPostDialog((prevShowPostDialog) => !prevShowPostDialog);
  };

  return (
    <>
      <Button variant="contained" onClick={toggleShowPostDialog}>
        Create Post
      </Button>
      <PostDialog open={showPostDialog} onClose={toggleShowPostDialog} />
    </>
  );
}
