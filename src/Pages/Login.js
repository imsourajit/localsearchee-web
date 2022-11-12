import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";


const theme = createTheme();

export default function Login() {


  const [errorText, setErrorText] = React.useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password")

    if(!email.length) {
      setErrorText("Please enter valid email id")
      return;
    }

    if(!password.length) {
      setErrorText("Password cannot be left blank")
      return;
    }

    //
    //

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Sign in
          </Typography>


          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <p style={{
              color: "red"
            }}>{errorText}</p>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleSubmit}
            >
                Sign In
            </Button>
            {/*<Grid container>*/}
            {/*  <Grid item xs>*/}
            {/*    <Link href="#" variant="body2">*/}
            {/*        Forgot password?*/}
            {/*    </Link>*/}
            {/*  </Grid>*/}
            {/*  <Grid item>*/}
            {/*    <Link href="#" variant="body2">*/}
            {/*      {"Don't have an account? Sign Up"}*/}
            {/*    </Link>*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}
          </Box>
        </Box>
        {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
      </Container>
    </ThemeProvider>
  );
}
