import React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Paper,
  Grid,
  Stack,
  Link,
  Input,
} from "@mui/material";
import theme from "../../theme/theme";

interface IntakeFormPage {
  [key: string]: string;
}

interface IntakeFormProps {
  intakeForm: {
    type: string;
    pages: IntakeFormPage[];
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const IntakeForm: React.FC<IntakeFormProps> = ({ intakeForm }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ padding: "24px" }}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography variant="h1" gutterBottom>
          Intake Form
        </Typography>
        {/* <Link
          component="button"
          variant="body1"
          onClick={() => {
            console.info("TODO: Download PDF");
          }}
        >
          Download PDF
        </Link> */}
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="intake form tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {intakeForm.pages.map((page, index) => (
            <Tab
              disableRipple
              key={index}
              label={page.title}
              id={`tab-${index}`}
              sx={{
                fontFamily: "Inter",
                textTransform: "none",
                "&.Mui-selected": {
                  color: "info.main",
                  borderColor: "info.main",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      {intakeForm.pages.map((page, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Grid container spacing={2} columns={{ xs: 3, sm: 8, md: 12 }}>
            {Object.entries(page).map(
              ([key, value]) =>
                key !== "title" && (
                  <Grid item xs={2} sm={4} md={4} key={key} sx={{ mt: "32px" }}>
                    <Stack direction="column" spacing={"4px"}>
                      <Typography variant="h2" sx={{ fontSize: "12px" }}>
                        {key.replace(/_/g, " ")}
                      </Typography>
                      <Input
                        multiline
                        defaultValue={value}
                        sx={{
                          ...theme.typography.body1,
                          ml: "16px",
                          fontWeight: "500",
                          "&.MuiInput-root::before": {
                            border: "none",
                          },
                        }}
                      />
                    </Stack>
                  </Grid>
                )
            )}
          </Grid>
        </TabPanel>
      ))}
    </Paper>
  );
};

export default IntakeForm;
