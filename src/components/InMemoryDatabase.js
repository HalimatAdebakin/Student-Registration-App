// src/components/InMemoryDatabase.js
import React, { useState, createContext, useContext } from 'react';


// Create a context to hold the in-memory database
const InMemoryDatabaseContext = createContext();

// Create a provider component to wrap your app and provide access to the in-memory database
export const InMemoryDatabaseProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  // Add a student to the in-memory database
  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  // Get all students from the in-memory database
  const getAllStudents = () => {
    return students;
  };

  // Other database operations can be added as needed

  return (
    <InMemoryDatabaseContext.Provider value={{ addStudent, getAllStudents }}>
      {children}
    </InMemoryDatabaseContext.Provider>
  );
};

// Create a custom hook to access the in-memory database context
export const useInMemoryDatabase = () => {
  return useContext(InMemoryDatabaseContext);
};
