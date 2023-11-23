import React, { createContext, useContext, useState, useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';
import { users } from '../models/userDb';


const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true, token: action.payload };
    case 'LOGOUT':
      return { isAuthenticated: false, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    token: null,
  }); 

  useEffect(() => {
    // Check local storage for an existing token
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const userId = localStorage.getItem('userID');
      const myUserData = users.find((u) => u.id === parseInt(userId));
      setUser(myUserData);
      setIsLoggedIn(true);
      setToken(true);
      dispatch({ type: 'LOGIN', payload: storedToken });
      setLoading(false)
    }else{
      setLoading(false)
    }
  }, []);

  const login = (token, user) => {
    dispatch({ type: 'LOGIN', payload: token });
    setIsLoggedIn(true);
    setToken(token)
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('userID', user.id);
    toast.success("Successfully Logged In");
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    setIsLoggedIn(false);
    setToken(null)
    setUser(null)
    toast.success("Logged out Successfully");
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, isLoggedIn, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};