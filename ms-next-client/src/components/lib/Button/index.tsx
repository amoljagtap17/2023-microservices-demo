"use client";
import { ButtonProps, Button as MUIButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({
  maxWidth: "250px",
  minWidth: "250px",
  borderRadius: 0,
  display: "block",
}));

export function Button(props: ButtonProps) {
  return (
    <StyledButton
      {...props}
      size="large"
      disableElevation
      disableFocusRipple
      disableRipple
      disableTouchRipple
    />
  );
}
