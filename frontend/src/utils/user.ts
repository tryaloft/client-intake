const USER_1_PASSWORD = process.env.REACT_APP_USER_1_PASSWORD;
const USER_1_NAME = process.env.REACT_APP_USER_1_NAME;


const getPasswordBasedOnUser = (
  username: string,
  password: string
): boolean => {
  switch (username) {
    case USER_1_NAME:
      if (password === USER_1_PASSWORD) return true;
      break;
    default:
      return false;
  }
  return false;
};

export { getPasswordBasedOnUser };
