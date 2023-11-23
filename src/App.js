import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from './context/AuthContext';
import Error_404 from './views/Errors/Error_404';
import LoadingSpinner from './views/miscellaneous/LoadingSpinner';

function App() {
  const { loading } = useAuth();

  return (
    <BrowserRouter>
      <ToastContainer />
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
    
  );
}

export default App;
