import React, { useEffect } from "react";
import {
  Box,
  Button,
  List,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  ListItemButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QuillLogo from "./QuillLogo";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedClient } from "../state/selectors/client-selectors";
import currCaseData from "../assets/client-intake.json";
import { setCaseData, setSelectedClient } from "../state/slices/client-slice";

interface Client {
  id: string;
  name: string;
  status: string;
}

const clients: Client[] = [
  {
    name: "Frank Magellan",
    status: "New Client",
    id: "1",
  },
  {
    name: "Cecelia Johnson",
    status: "New Client",
    id: "2",
  },
  {
    name: "Viraj Bindra",
    status: "Pending Engagement",
    id: "3",
  },
  {
    name: "John Smith",
    status: "New Client",
    id: "4",
  },
  {
    name: "Jane Johnson",
    status: "New Client",
    id: "5",
  },
  {
    name: "Alex Brown",
    status: "Pending Engagement",
    id: "6",
  },
  {
    name: "Emily Taylor",
    status: "Active Client",
    id: "7",
  },
  {
    name: "Chris Anderson",
    status: "Active Client",
    id: "8",
  },
  {
    name: "Katie Thomas",
    status: "Active Client",
    id: "9",
  },
  {
    name: "Michael Jackson",
    status: "Active Client",
    id: "10",
  },
  {
    name: "Sarah White",
    status: "Active Client",
    id: "11",
  },
  {
    name: "David Harris",
    status: "Active Client",
    id: "12",
  },
  {
    name: "Alex Brown",
    status: "Pending Engagement",
    id: "13",
  },
  {
    name: "Emily Taylor",
    status: "Active Client",
    id: "14",
  },
  {
    name: "Chris Anderson",
    status: "Active Client",
    id: "15",
  },
  {
    name: "Katie Thomas",
    status: "Active Client",
    id: "16",
  },
  {
    name: "Michael Jackson",
    status: "Active Client",
    id: "17",
  },
  {
    name: "Sarah White",
    status: "Active Client",
    id: "18",
  },
  {
    name: "David Harris",
    status: "Active Client",
    id: "19",
  },
];

const Sidebar: React.FC = () => {
  const selectedClient = useSelector(selectSelectedClient);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedClient(clients[0].id));
    // TODO get client data from API
    dispatch(setCaseData(currCaseData));
  },[dispatch]);

  const handleListItemClick = (event: any, index: number) => {
    dispatch(setSelectedClient(clients[index].id));
    // TODO get case data from API
    dispatch(setCaseData(currCaseData));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - 48px)`,
        backgroundColor: "#fff",
        borderRight: 1,
        borderColor: "white",
        padding: "24px",
      }}
    >
      <Box sx={{ padding: 2 }}>
        <QuillLogo />
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #F0F0F0",
          paddingBottom: "8px",
          mt: "40px",
        }}
      >
        <Typography variant="h2">Clients</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: "auto", paddingX: 2 }}>
        <List>
          {clients.map((client, index) => (
            <ListItemButton
              disableRipple
              key={index}
              sx={{
                paddingY: "16px",
                width: "312px",
                height: "78px",
                "&.Mui-selected": {
                  backgroundColor: "#F2F2F2",
                  borderRadius: "8px",
                },
              }}
              onClick={(event) => handleListItemClick(event, index)}
              selected={selectedClient === client.id}
            >
              <ListItemText
                primary={<Typography variant="body1">{client.name}</Typography>}
                secondary={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#7a7a7a"
                    }}
                  >
                    {client.status}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "#7a7a7a" }} />
              </ListItemSecondaryAction>
            </ListItemButton>
          ))}
        </List>
      </Box>
      {/* <Button
        variant="contained"
        disableRipple
        sx={{
          backgroundColor: "#25004D",
          color: "#fff",
          padding: "16px",
          fontSize: 16,
          fontWeight: "bold",
          height: "48px",
        }}
      >
        <MicNoneIcon sx={{ height: "20px" }} />
        <Typography
          variant="body1"
          sx={{ marginLeft: "8px", textTransform: "none" }}
        >
          Record Intake
        </Typography>
      </Button> */}
    </Box>
  );
};

export default Sidebar;
