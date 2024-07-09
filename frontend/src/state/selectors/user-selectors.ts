import { RootState } from "../state";

const selectUsername = (state: RootState) => state.user.username;

const selectLoggedIn = (state: RootState) => state.user.loggedIn;

export { selectUsername, selectLoggedIn };