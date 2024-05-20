import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ClientScreenTile from "./base/ClientScreenTile";
import { useSelector } from "react-redux";
import { selectCaseData } from "../state/selectors/client-selectors";
import { Details } from "@mui/icons-material";
import { getConsiderationStatusColor } from "../utils/color";

interface Props {
  // Define your component's props here
}

const KeyConsiderations: React.FC<Props> = (props) => {
  const caseData = useSelector(selectCaseData);

  const { liability, damages, assets } = caseData?.key_considerations ?? {
    assets: { Status: "Unknown", Details: "Unknown" },
    damages: { Status: "Unknown", Details: "Unknown" },
    liability: { Status: "Unknown", Details: "Unknown" },
  };

  return (
    <ClientScreenTile>
      <Stack direction="column" spacing={2}>
        <Typography variant="h1">Key Case Considerations</Typography>
        {/* <Stack direction="row" gap={"24px"}>
          <Typography variant="body1">Liability</Typography>
          <Typography variant="body1">Damages</Typography>
          <Typography variant="body1">Assets</Typography>

        </Stack> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" sx={{ mb: "8px" }}>
              Liability:{" "}
              <Box
                component="span"
                sx={{ color: getConsiderationStatusColor(liability.Status) }}
              >
                {liability.Status}
              </Box>
            </Typography>
            <Typography variant="subtitle1">{liability.Details}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" sx={{ mb: "8px" }}>
              Damages:{" "}
              <Box
                component="span"
                sx={{ color: getConsiderationStatusColor(damages.Status) }}
              >
                {damages.Status}
              </Box>
            </Typography>
            <Typography variant="subtitle1">{damages.Details}</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mb: "8px" }}>
            <Typography variant="body1">
              Assets:{" "}
              <Box
                component="span"
                sx={{ color: getConsiderationStatusColor(assets.Status) }}
              >
                {assets.Status}
              </Box>
            </Typography>
            <Typography variant="subtitle1">{assets.Details}</Typography>
          </Grid>
        </Grid>
      </Stack>
    </ClientScreenTile>
  );
};

export default KeyConsiderations;
