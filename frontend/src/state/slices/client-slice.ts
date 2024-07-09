import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CaseData } from "../../services/types/client-intake-types";

interface Client {
    name: string;
    status: string;
  }
  
  interface ClientsState {
    clients: Client[];
    selectedClient: string | null;
    caseData?: CaseData;
  }
  
  const initialState: ClientsState = {
      clients: [
          { name: 'Frank Magellan', status: 'New Client' },
          { name: 'Cecelia Johnson', status: 'New Client' },
          { name: 'Viraj Bindra', status: 'Pending Engagement' },
          { name: 'Cece Johnson', status: 'Active Client' },
          { name: 'John Doe', status: 'Active Client' },
          { name: 'Jane Smith', status: 'Active Client' },
          { name: 'Michael Johnson', status: 'Active Client' },
          { name: 'Emily Davis', status: 'Active Client' },
          { name: 'David Wilson', status: 'Active Client' }
      ],
      selectedClient: null,
  };
  
  const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
      addClient(state, action: PayloadAction<Client>) {
        state.clients.push(action.payload);
      },
      removeClient(state, action: PayloadAction<number>) {
        state.clients.splice(action.payload, 1);
      },
      setSelectedClient(state, action: PayloadAction<string>) {
        state.selectedClient = action.payload;
      },
      setCaseData(state, action: PayloadAction<CaseData>) {
          state.caseData = action.payload;
      },
    }
  });
  
  export const { addClient, removeClient, setSelectedClient, setCaseData } = clientsSlice.actions;

  export default clientsSlice.reducer;
