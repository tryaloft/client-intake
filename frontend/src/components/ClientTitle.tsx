import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCaseData } from "../state/selectors/client-selectors";

const ClientTitle: React.FC = () => {
  const caseData = useSelector(selectCaseData);

  return (
    <div>
      <Typography variant="h1">{caseData?.case_name}</Typography>
      <Stack direction="row" gap="20px">
        <Typography sx={{fontWeight: 500, fontSize: "1rem", color:"#404040"}} variant="body2">{caseData?.case_type}</Typography>
        <Box>
          <Typography sx={{fontWeight: 500}} variant="body2">{caseData?.engagement_status}</Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default ClientTitle;
