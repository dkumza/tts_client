import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:3000/api/auth/login';

export default function Login() {
   const [authState, setAuthState] = useState({
      email: 'james@secure.com',
      password: '123456',
   });

   /**
    * function to enter input values to state
    * @param {*} event
    */
   function handleInput(event) {
      const { name, value } = event.target;
      console.log('name ===', name);
      setAuthState({ ...authState, [name]: value });
   }

   /** jsdoc
    *
    * @param {SubmitEvent} event
    */
   function handleLogin(event) {
      event.preventDefault();
      console.log('js in control');

      // validation

      axios
         .post(LOGIN_URL, authState)
         .then((res) => {
            console.log('res ===', res);
            const { token } = res.data;
            console.log('token ===', token);
            // save token to lS
            localStorage.setItem('bit_token', token);
         })
         .catch((error) => {
            console.warn('handleLogin ivyko klaida:', error);
            const errorAxios = error.response.data;
            console.log('errorAxios ===', errorAxios);
         });
   }

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Typography component="h1" variant="h3">
               Log in
            </Typography>
            <Box
               component="form"
               onSubmit={handleLogin}
               noValidate
               sx={{ mt: 1 }}
            >
               <TextField
                  onChange={handleInput}
                  value={authState.email}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
               />
               <TextField
                  onChange={handleInput}
                  value={authState.email}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
               />

               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
               >
                  Sign In
               </Button>
               <Grid container justifyContent={'flex-end'}>
                  {/* <Grid item xs>
                     <Link href="#" variant="body2">
                        Forgot password?
                     </Link>
                  </Grid> */}
                  <Grid item>
                     <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </Container>
   );
}
