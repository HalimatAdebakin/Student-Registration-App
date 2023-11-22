import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AdminLogin from './components/AdminLogin';
// import Dashboard from './components/Dashboard';
// import LogOut from './components/LogOut';
import routes from './routes/routes';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from './context/AuthContext';
import Error_404 from './views/Errors/Error_404';
import LoadingSpinner from './views/miscellaneous/LoadingSpinner';

function App() {
  const { loading } = useAuth();


  return (
    <BrowserRouter>
        {loading ? (
            <LoadingSpinner />
          ) : (
            <Routes>
                
                {/* All Routes */}
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}

                {/* Error 404 */}
                <Route path="*" element={<Error_404 />} />

            </Routes>
          )
        }
    </BrowserRouter>
    
  //   <InMemoryDatabaseProvider>
  //   <Router>
  //     <Routes>
  //     <Route path="/" element={<AdminLogin />} />
  //     <Route path="/dashboard" element={<Dashboard />} />
  //     <Route path="/logout" element={<LogOut />} />
    
   
     
  //     {/* Add more routes as needed */}
  //     </Routes>
  // </Router>
  // </InMemoryDatabaseProvider>
  );
}

export default App;
