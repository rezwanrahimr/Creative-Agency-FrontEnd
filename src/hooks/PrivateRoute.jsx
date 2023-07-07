import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isLoading, user } = useContext(AuthContexts);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  // eslint-disable-next-line no-unreachable
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
