import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";

const StudentContext = createContext();

const studentsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "FETCH_STUDENTS":
      return action.payload;
    case "UPDATE_STUDENT":
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case "DELETE_STUDENT":
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
    case "BLACKLIST_STUDENT":
      return state.map((student) =>
        student.id === action.payload
          ? { ...student, blacklisted: true }
          : student
      );
  }
};

export const StudentProvider = ({ children }) => {
  const [students, dispatch] = useReducer(studentsReducer, []);

  useEffect(() => {
    // Retrieve student data from local storage.
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    dispatch({ type: "FETCH_STUDENTS", payload: storedStudents });
  }, []);

  const addStudent = (newStudent, pictureDataURL) => {
    const studentWithPicture = {
      ...newStudent,
      picture: pictureDataURL,
      blacklisted: false,
    };

    dispatch({ type: "ADD_STUDENT", payload: studentWithPicture });

    // Update local storage with the new student data.
    const updatedStudents = [...students, studentWithPicture];
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    console.log("Local storage updated:", updatedStudents);

    // Read the file as a data URL
    // reader.readAsDataURL(file);

    toast.success("Student Added Successfully");
  };

  const updateStudent = (updatedStudent, file) => {
    // Ensure the file is a valid Blob object
  
      
     
       
        // Update student with new image URL
        const studentWithImage = {
          ...updatedStudent,
          file, // Assuming imageUrl is the correct field name
          blacklisted: updatedStudent.blacklisted,
        };
  
        // Dispatch the update action
        dispatch({ type: "UPDATE_STUDENT", payload: studentWithImage });
  
        // Update local storage with the updated student data.
        const updatedStudents = students.map((student) =>
          student.id === updatedStudent.id ? studentWithImage : student
        );
        localStorage.setItem("students", JSON.stringify(updatedStudents));
  
        toast.success("Student Profile Updated Successfully");
      };

    
  

  const deleteStudent = (studentId) => {
    // Find the student with the specified id
    const studentToDelete = students.find(
      (student) => student.id === studentId
    );
    if (!studentToDelete) {
      console.error(`Student with id ${studentId} not found.`);
      return;
    }
    dispatch({ type: "DELETE_STUDENT", payload: studentId });

    // Update local storage by removing the deleted student data.
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    toast.success("Student Profile Deleted Successfully");
  };

  const blacklistStudent = (studentId) => {
    dispatch({ type: "BLACKLIST_STUDENT", payload: studentId });
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent,
        blacklistStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
};
