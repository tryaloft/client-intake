import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type ClientScreenTileProps = {
  children: ReactNode;
};

const ClientScreenTile: React.FC<ClientScreenTileProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "24px",
        backgroundColor: "white",
      }}
    >
      {children}
    </Box>
  );
};

export default ClientScreenTile;
