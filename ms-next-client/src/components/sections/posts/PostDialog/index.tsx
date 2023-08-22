import { Button } from "@/components/lib";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import { PostForm } from "../PostForm";

interface IPostDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export function PostDialog({ open, onClose, onSubmit }: IPostDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="post-dialog"
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle id="post-dialog">
        Create Post
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box minHeight="20vh">
          <PostForm />
        </Box>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
