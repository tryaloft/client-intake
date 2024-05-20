import { RootState } from "../state";

const selectSelectedClient = (state: RootState) => state.clients.selectedClient;

const selectCaseData = (state: RootState) => state.clients.caseData;

export { selectSelectedClient, selectCaseData };
