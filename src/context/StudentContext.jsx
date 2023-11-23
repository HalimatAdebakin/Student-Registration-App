import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';


const StudentContext = createContext();

const studentsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [...state, action.payload];
    case 'FETCH_STUDENTS':
      return action.payload;
    case 'UPDATE_STUDENT':
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case 'DELETE_STUDENT':
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export const StudentProvider = ({ children }) => {
  const [students, dispatch] = useReducer(studentsReducer, []);

  useEffect(() => {
    // Retrieve student data from local storage.
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    dispatch({ type: 'FETCH_STUDENTS', payload: storedStudents });
  }, []);

  const addStudent = (newStudent, file) => {
    // Ensure the file is a valid Blob object
    if (file instanceof Blob) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const studentWithPicture = {
          ...newStudent,
          picture: e.target.result,
        };
  
        dispatch({ type: 'ADD_STUDENT', payload: studentWithPicture });
  
        // Update local storage with the new student data.
        const updatedStudents = [...students, studentWithPicture];
        localStorage.setItem('students', JSON.stringify(updatedStudents));
      };
  
      // Read the file as a data URL
      reader.readAsDataURL(file);

      toast.success("Student Added Successfully");
    } else {
      // Handle the case where the file is not a valid Blob
      toast.error("Invalid file format");
    }
  };

  const updateStudent = (updatedStudent, file) => {
    // Read the file and convert it to a data URL
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target.result;

      // Update student with new image URL
      const studentWithImage = { ...updatedStudent, imageUrl };
      dispatch({ type: 'UPDATE_STUDENT', payload: studentWithImage });

      // Update local storage with the updated student data.
      const updatedStudents = students.map((student) =>
        student.id === updatedStudent.id ? studentWithImage : student
      );
      localStorage.setItem('students', JSON.stringify(updatedStudents));

      toast.success("Student Profile Updated Sucessfully")
    };

    reader.readAsDataURL(file);
  };

  const deleteStudent = (studentId) => {
    dispatch({ type: 'DELETE_STUDENT', payload: studentId });

    // Update local storage by removing the deleted student data.
    const updatedStudents = students.filter((student) => student.id !== studentId);
    localStorage.setItem('students', JSON.stringify(updatedStudents));

    toast.success("Student Profile Deleted Successfully")
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
