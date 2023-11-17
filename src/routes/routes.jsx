import AuthMiddleware from "../middleware/AuthMiddleware";
import AuthLayout from "../views/layout/AuthLayout";
import MainLayout from "../views/layout/MainLayout";
import Dashboard from "../views/pages/Dashboard";
import Login from "../views/pages/auth/Login";
import Register from "../views/pages/auth/Register";
import DashboardSkeleton from "../views/skeleton/DashboardSkeleton";


const createRoute = (path, element, pageName, privateRoute = true, skeleton = DashboardSkeleton) => ({
    path,
    element: (
      <AuthMiddleware
        path={path}
        pageName={pageName}
        privateRoute={privateRoute}
        component={element}
        layout={privateRoute ? MainLayout : AuthLayout}
        skeleton={skeleton}
      />
    ),
  });
  
  const routes = [
    createRoute("/login", Login, "Login", false),
    createRoute("/register", Register, "Register", false),
    createRoute("/", Dashboard, "Dashboard", true, DashboardSkeleton),
  
  ];
  
  export default routes;