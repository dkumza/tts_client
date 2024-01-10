import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
   login() {},
   logout() {},
   isUserLoggedIn: false,
   token: null,
   userEmail: '',
});

AuthContext.displayName = 'AuthCtx';

export const AuthCtxProvider = ({ children }) => {
   const tokenFromStorage = localStorage.getItem('session_token');
   const emailFromStorage = localStorage.getItem('session_email');
   const [sessionToken, setSessionToken] = useState(tokenFromStorage || null);
   const [userEmail, setUserEmail] = useState(emailFromStorage || '');

   const isUserLoggedIn = !!sessionToken;

   function login(token, email) {
      setSessionToken(token);
      setUserEmail(email);
      localStorage.setItem('session_token', token);
      localStorage.setItem('session_email', email);
   }

   function logout() {
      console.log('logout');
      setSessionToken(null);
      setUserEmail('');
      localStorage.removeItem('session_token');
      localStorage.removeItem('session_email');
   }

   const ctxValues = {
      token: sessionToken,
      isUserLoggedIn,
      login,
      logout,
      userEmail,
   };

   return (
      <AuthContext.Provider value={ctxValues}>{children}</AuthContext.Provider>
   );
};

export function useAuthContext() {
   return useContext(AuthContext);
}
