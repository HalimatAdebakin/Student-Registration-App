import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { responseCatcher } from '../resources/response';
import config from '../config/config';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchUserData = async () => {
    try {
      
      setUser(null);

    } catch (error) {
      responseCatcher(error)
      console.error('Error fetching authenticated data:', error);

      // when auth fails
      setUser(null);
      setIsLoggedIn(false);
      setToken(null);
      localStorage.removeItem('token');

    } finally {
      setLoading(false);
    }
  };

  const asyncLocalStorage = {
    getItem: async (key) => {
      return await Promise.resolve(localStorage.getItem(key));
    },
    // Implement other methods similarly if needed
  };

  useEffect(() => {
    async function checkLocalStorage() {  
   
        const tokenFromLocalStorage = await asyncLocalStorage.getItem('token');

        if(tokenFromLocalStorage) {
          fetchUserData();
          setIsLoggedIn(true);
        }else{
          setLoading(false);
        }
      
    }
      
    checkLocalStorage();
  }, []);

  const authenticateUser = async (response) => {
    const { token: newToken, userData: newUser } = response;

    if (newToken) {
      localStorage.setItem('token', JSON.stringify(newToken));
      setToken(newToken);
      setUser(newUser);
      setIsLoggedIn(true);
      fetchUserData();
      toast.success(response.message);
    }
    
  };

  const register = async (userFormData) => {
    try {
     
      authenticateUser({});
    } catch (error) {
      responseCatcher(error);
    }
  };
 
  const login = async (userLoginData) => {
    try {
      
      authenticateUser({});
    } catch (error) {
      responseCatcher(error);
    }
  };


  const updateUserData = async (newUserData, showNotification = true) => {
    try {
     

    } catch (error) {
      responseCatcher(error);
      return false;
    }
  };

  const logout = () => {
      toast.success("Logged out Successfully");
      setUser(null);
      setIsLoggedIn(false);
      setToken(null);
      localStorage.removeItem('token');
  };


  const authContextValue = useMemo(() => {
    return {
      user,
      isLoggedIn,
      login,
      logout,
      token,
      register,
      fetchUserData,
      loading,
      updateUserData,
      authenticateUser,
    };
  }, [user, isLoggedIn, token, loading]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
