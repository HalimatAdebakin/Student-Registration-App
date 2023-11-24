import AuthMiddleware from "../middleware/AuthMiddleware";
import AuthLayout from "../views/layout/AuthLayout";
import MainLayout from "../views/layout/MainLayout";
import Dashboard from "../views/pages/Dashboard";
import Login from "../views/pages/auth/Login";
import Register from "../views/pages/auth/Register";
import AddStudent from "../views/pages/student/AddStudent";
import AddSuccess from "../views/pages/student/AddSuccess";
import DeleteStudent from "../views/pages/dropdown/DeleteStudent";
import StudentProfile from "../views/pages/student/StudentProfile";
import DashboardSkeleton from "../views/skeleton/DashboardSkeleton";
import Menu from "../views/pages/dropdown/Menu";
import EditStudent from "../views/pages/student/EditStudent";
import Logout from "../views/pages/auth/Logout";






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
    createRoute("/addstudent", AddStudent, "add student", true),
    createRoute("/editstudent/:id", EditStudent, "Edit student", true),
    createRoute("/addsuccess/:id", AddSuccess, "add success", true),
    createRoute("/profile", StudentProfile, "student profile", true),
    createRoute("/delete", DeleteStudent, "delete student", true),
    createRoute("/menu", Menu, "menu", true),
    createRoute("/logout", Logout, "Logout", true),
   
  
  ];
  
  export default routes;