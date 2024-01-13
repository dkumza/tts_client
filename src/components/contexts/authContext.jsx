import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
   login() {},
   logout() {},
   isUserLoggedIn: false,
   token: null,
   username: '',
});

AuthContext.displayName = 'AuthCtx';

export const AuthCtxProvider = ({ children }) => {
   const tokenFromStorage = localStorage.getItem('session_token');
   const usernameFromStorage = localStorage.getItem('session_username');
   const [sessionToken, setSessionToken] = useState(tokenFromStorage || null);
   const [username, setUserName] = useState(usernameFromStorage || '');

   const isUserLoggedIn = !!sessionToken;

   function login(token, username) {
      setSessionToken(token);
      setUserName(username);
      localStorage.setItem('session_token', token);
      localStorage.setItem('session_username', username);
   }

   function logout() {
      console.log('logout');
      setSessionToken(null);
      setUserName('');
      localStorage.removeItem('session_token');
      localStorage.removeItem('session_username');
   }

   const ctxValues = {
      token: sessionToken,
      isUserLoggedIn,
      login,
      logout,
      username,
   };

   return (
      <AuthContext.Provider value={ctxValues}>{children}</AuthContext.Provider>
   );
};

export function useAuthContext() {
   return useContext(AuthContext);
}
