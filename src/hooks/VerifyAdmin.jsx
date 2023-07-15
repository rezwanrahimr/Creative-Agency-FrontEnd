import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../Context/AuthContext";
import Loading from "../Components/Loading/Loading";
import { useQuery } from "react-query";

// eslint-disable-next-line react/prop-types
const VerifyAdmin = ({ children }) => {
  const location = useLocation();
  const { isLoading, user } = useContext(AuthContexts);

  const { data: currentUser } = useQuery({
    queryKey: ["user-admin", user],
    queryFn: async () => {
      const res = await fetch(
        `https://creative-agency-backend-henna.vercel.app/user-admin?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (currentUser?.role == "Admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default VerifyAdmin;
