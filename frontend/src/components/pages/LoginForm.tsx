import React, { useState, FormEvent } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import QuillLogo from "../QuillLogo";
import { SecondaryButton } from "../base/Buttons";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUsername } from "../../state/slices/user-slice";
import { getPasswordBasedOnUser } from "../../utils/user";

interface LoginFormState {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (getPasswordBasedOnUser(formState.username, formState.password)) {
      dispatch(setUsername(formState.username));
      dispatch(setLoggedIn(true));
    } else {
      setError("Invalid username or password");
      return;
    }
  };

  const handleChange =
    (prop: keyof LoginFormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [prop]: event.target.value });
    };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: "36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <QuillLogo />
        {error && (
          <Typography variant="body1" sx={{mt: "36px", color: "red", width: "100%" }}>
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: error ? "0px" : "48px" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formState.username}
            onChange={handleChange("username")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formState.password}
            onChange={handleChange("password")}
          />
          <SecondaryButton
            type="submit"
            fullWidth
            disableRipple
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
          >
            Sign In
          </SecondaryButton>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
