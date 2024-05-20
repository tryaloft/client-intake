import styled from "@emotion/styled";
import { Button } from "@mui/material";

const SecondaryButton = styled(Button)({
  lineHeight: "24px",
  textDecoration: "none",
  textTransform: "none",
});

const PurpleIconButton = styled(Button)({
  svg: {
    fill: "#25004D",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export { SecondaryButton, PurpleIconButton };
