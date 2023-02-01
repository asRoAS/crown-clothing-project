import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// provider
export const UserProvider = ({ children }) => {
  // we receive children and we need to return user context provider

  const [currentUser, setCurrentUser] = useState(null); // we pass null value for the state not for the context
  const value = { currentUser, setCurrentUser }; // Object that passes the two values that are important, which is both the setter function and the actual value.

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  //* UserProvider is allowing any of the its child component .i.e {children} to access the values inside of its use state.
  //* .Provider is the component that will wrap around any other components that need access to the values inside.

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>; //* this provider is where it is going to receive the value, which is going to hold the actual contextual values.
};
