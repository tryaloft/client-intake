import { RootState } from "../state";

const selectSelectedClient = (state: RootState) => state.client.selectedClient;

const selectCaseData = (state: RootState) => state.client.caseData;

export { selectSelectedClient, selectCaseData };
