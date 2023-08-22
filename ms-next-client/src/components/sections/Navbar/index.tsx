import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export function Navbar() {
  return (
    <AppBar position="static" square elevation={0} variant="outlined">
      <Container>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Microservices Demo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
